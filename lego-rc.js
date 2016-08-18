function Message(channel, output, data, mode) {
    this.channel = channel;
    this.toggle = 0; //Even0
    this.escape = 0; //UseMode0
    this.data = data;
    this.output = output;
    this.mode = mode //direct|inc-dec
    this.address = 0; //reserved

    this.getData = function () {
        var nibble1 = this.getNiblle1();
        var nibble2 = this.getNiblle2();
        var nibble3 = this.getNiblle3();
        var lrc = this.calculateLrc(nibble1, nibble2, nibble3);
        var data = (nibble1 << 12) | (nibble2 << 8) | (nibble3 << 4) | lrc;
        return data;
    }

    this.getNiblle1 = function () {
        return (this.toggle << 3) | (this.escape << 2) | this.channel;
    }

    this.getNiblle2 = function () {
        return this.address << 3 | 1 << 2 | this.mode << 1 | this.output;
    }

    this.getNiblle3 = function () {
        return this.data;
    }

    this.calculateLrc = function (nibble1, nibble2, nibble3) {
        //Longitudinal Redundancy Check
        return 0xf ^ nibble1 ^ nibble2 ^ nibble3;
    }

    this.toString = function () {
        var result = "";
        var data = this.getData();
        result += '|';
        for (nibbleNr = 0; nibbleNr < 4; nibbleNr++) {
            for (bitNr = 0; bitNr < 4; bitNr++) {
                var bit = ((data << (nibbleNr * 4 + bitNr)) & 0x8000) != 0;
                var ch = bit ? '1' : '0';
                result += ch;
            }
            result += '|';
        }
        return result;
    }
}

function encode_to_pulses(data) {
    var MaxEncodedMessageSize = 522;
    var HighIrPulseCount = 6;
    var LowIrPulseCountFor0 = 10;
    var LowIrPulseCountFor1 = 21;
    var LowIrPulseCountForStartStop = 39;

    var buffer = new ushort[MaxEncodedMessageSize];
    var currentDataMask = 0x8000;
    var currentPulse = 0;
    currentPulse = FillStartStop(buffer, currentPulse);

    while (currentDataMask != 0) {
        var currentDataBit = (data & currentDataMask) == 0;
        currentPulse = FillBit(currentDataBit, currentPulse, buffer);
        currentDataMask >>= 1;
    }
    //stop bit
    var finalPulseCount = Fill(buffer, currentPulse, HighIrPulseCount, 39);
    var result = Trim(buffer, finalPulseCount);
    return result;

    function FillBit(currentDataBit, currentPulse, buffer) {
        var lowPulseCount = currentDataBit ? LowIrPulseCountFor0 : LowIrPulseCountFor1;
        currentPulse = Fill(buffer, currentPulse, HighIrPulseCount, lowPulseCount);
        return currentPulse;
    }

    function FillStartStop(buffer, startIndex) {
        return Fill(buffer, startIndex, HighIrPulseCount, LowIrPulseCountForStartStop);
    }

    function Trim(buffer, finalLength) {
        var result = new ushort[finalLength];
        Array.Copy(buffer, result, finalLength);
        return result;
    }

    function Fill(buffer, startIndex, pulseCount, irPulse) {
        for (var i = startIndex; i < startIndex + pulseCount; i++) { buffer[i] = irPulse; }
        return i;
    }

    function Fill(buffer, startIndex, highPulseCount, lowPulseCount) {
        var currentIndex = startIndex;
        currentIndex = Fill(buffer, currentIndex, highPulseCount, IrPulse.High);
        currentIndex = Fill(buffer, currentIndex, lowPulseCount, IrPulse.Low);
        return currentIndex;
    }
}


(function (ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function () { };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.full_forward_for = function (channel, output, seconds, callback) {
        console.log('Forward on ' + channel + ' output ' + output + ' for ' + seconds + ' seconds');
        window.setTimeout(function () {
            callback();
        }, seconds * 1000);
    };

    ext.when_comand_received = function () {
        return false;
    };

    ext.read_channel = function () {
        return 'channel 1';
    };

    ext.read_command_buffer = function () {
        return [1, 2, 3, 4, 5];
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['w', 'forward on %m.channel output %m.output for %n secs', 'full_forward_for', 'channel 1', 'red', 1],
            ['h', 'when command received', 'when_comand_received'],
            ['r', 'channel', 'read_channel'],
            ['r', 'buffer', 'read_command_buffer']
        ],
        menus: {
            channel: ['channel 1', 'channel 2', 'channel 3', 'channel 4'],
            output: ['red', 'blue']
        },
        url: 'https://gmamaladze.github.io/lego-rc-scratch/'
    };

    // Register the extension
    ScratchExtensions.register('Lego Power Functions RC', descriptor, ext);
})({});