Output = {
    Red : 0,
    Blue : 1
}

Channel = {
    Ch1: 0,
    Ch2: 1,
    Ch3: 2,
    Ch4: 3
}

Mode = {
    Pwm: 0,
    IncDec: 1
}

IncDec = {
    ToggleFullForward: 0,
    ToggleDirection: 1,
    IncrementNumericalPwm: 2,
    DecrementNumericalPwm: 3,
    IncrementPwm: 4,
    DecrementPwm: 5,
    FullForward: 6,
    FullBackward: 7,
    ToggleFullForwardBackward: 8,
    ClearC1: 9,
    SetC1: 10,
    ToggleC1: 11,
    ClearC2: 12,
    SetC2: 13,
    ToggleC2: 14,
    ToggleF: 15
}

PwmSpeed = {
    Float: 0,
    ForwardStep1: 1,
    ForwardStep2: 2,
    ForwardStep3: 3,
    ForwardStep4: 4,
    ForwardStep5: 5,
    ForwardStep6: 6,
    ForwardStep7: 7,
    BreakThenFloat: 8,
    BackwardStep7: 9,
    BackwardStep6: 10,
    BackwardStep5: 11,
    BackwardStep4: 12,
    BackwardStep3: 13,
    BackwardStep2: 14,
    BackwardStep1: 15
}

//TODO Comments
function Message(channel, output, mode, value) {
    var toggle = 0; //Even0
    var escape = 0; //UseMode0
    var address = 0; //reserved

    var nibble1 = (toggle << 3) | (escape << 2) | channel;
    var nibble2 = address << 3 | 1 << 2 | mode << 1 | output;
    var nibble3 = value;
    var lrc = 0xf ^ nibble1 ^ nibble2 ^ nibble3;

    this.data = (nibble1 << 12) | (nibble2 << 8) | (nibble3 << 4) | lrc;

    this.getBytes = function () {
        return toBytes(toPulses(this.data));
    }

    this.toString = function () {
        var result = "";
        result += '|';
        for (var nibbleNr = 0; nibbleNr < 4; nibbleNr++) {
            for (var bitNr = 0; bitNr < 4; bitNr++) {
                var bit = ((this.data << (nibbleNr * 4 + bitNr)) & 0x8000) != 0;
                var ch = bit ? '1' : '0';
                result += ch;
            }
            result += '|';
        }
        return result;
    }

    function toPulses(data) {

        var sync = new Array(45).fill(1, 0, 6).fill(0, 6, 6 + 39);
        var bit0 = new Array(16).fill(1, 0, 6).fill(0, 6, 6 + 10);
        var bit1 = new Array(27).fill(1, 0, 6).fill(0, 6, 6 + 21);

        var pulses = [].concat(sync);

        var mask = 0x8000;
        while (mask != 0) {
            var current = (data & mask) === 0 ? bit0 : bit1;
            pulses = pulses.concat(current);
            mask >>= 1;
        }
        return pulses.concat(sync);
    }

    function toBytes(pulses) {

        var buffer = [];
        buffer.length = Math.ceil(pulses.length / 8);
        for (var i = 0; i < buffer.length; i++) {
            var current = 0;
            for (var j = 0; j < 8; j++) {
                var index = i * 8 + j;
                if (index >= pulses.length) break;
                current = current << 1;
                var bit = pulses[index];
                current = current | bit;
            }
            buffer[i] = current;
        }
        return buffer;
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