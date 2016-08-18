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

    ext.read_command = function () {
        return 'channel 1';
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['w', 'forward on %m.channel output %m.output for %n secs', 'full_forward_for', 'channel 1', 'red', 1],
            ['h', 'when command received', 'when_comand_received'],
            ['r', 'channel', 'read_channel']
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