function ScratchExtensionsMock() {
  this.register = function (name, descriptor, ext) {
    //nop
  };
}

var ScratchExtensions = new ScratchExtensionsMock();


QUnit.test('Ensure enums work', function (assert) {
  var message1 = new Message(Channel.Ch2, Output.Blue, Mode.IncDec, IncDec.FullBackward);
  var message2 = new Message(1, 1, 1, 7 )
  assert.deepEqual(message1.getBytes(), message2.getBytes());
});

//===========================================================================================

QUnit.test('Ch1, Red, Pwm, Float => |0000|0100|0000|1011|', function (assert) {
  var message = new Message(0, 0, 0, 0);
  assert.equal(message.toString(), '|0000|0100|0000|1011|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep1 => |0000|0100|0001|1010|', function (assert) {
  var message = new Message(0, 0, 0, 1);
  assert.equal(message.toString(), '|0000|0100|0001|1010|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep2 => |0000|0100|0010|1001|', function (assert) {
  var message = new Message(0, 0, 0, 2);
  assert.equal(message.toString(), '|0000|0100|0010|1001|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep3 => |0000|0100|0011|1000|', function (assert) {
  var message = new Message(0, 0, 0, 3);
  assert.equal(message.toString(), '|0000|0100|0011|1000|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep4 => |0000|0100|0100|1111|', function (assert) {
  var message = new Message(0, 0, 0, 4);
  assert.equal(message.toString(), '|0000|0100|0100|1111|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep5 => |0000|0100|0101|1110|', function (assert) {
  var message = new Message(0, 0, 0, 5);
  assert.equal(message.toString(), '|0000|0100|0101|1110|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep6 => |0000|0100|0110|1101|', function (assert) {
  var message = new Message(0, 0, 0, 6);
  assert.equal(message.toString(), '|0000|0100|0110|1101|');
});

QUnit.test('Ch1, Red, Pwm, ForwardStep7 => |0000|0100|0111|1100|', function (assert) {
  var message = new Message(0, 0, 0, 7);
  assert.equal(message.toString(), '|0000|0100|0111|1100|');
});

QUnit.test('Ch1, Red, Pwm, BreakThenFloat => |0000|0100|1000|0011|', function (assert) {
  var message = new Message(0, 0, 0, 8);
  assert.equal(message.toString(), '|0000|0100|1000|0011|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep7 => |0000|0100|1001|0010|', function (assert) {
  var message = new Message(0, 0, 0, 9);
  assert.equal(message.toString(), '|0000|0100|1001|0010|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep6 => |0000|0100|1010|0001|', function (assert) {
  var message = new Message(0, 0, 0, 10);
  assert.equal(message.toString(), '|0000|0100|1010|0001|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep5 => |0000|0100|1011|0000|', function (assert) {
  var message = new Message(0, 0, 0, 11);
  assert.equal(message.toString(), '|0000|0100|1011|0000|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep4 => |0000|0100|1100|0111|', function (assert) {
  var message = new Message(0, 0, 0, 12);
  assert.equal(message.toString(), '|0000|0100|1100|0111|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep3 => |0000|0100|1101|0110|', function (assert) {
  var message = new Message(0, 0, 0, 13);
  assert.equal(message.toString(), '|0000|0100|1101|0110|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep2 => |0000|0100|1110|0101|', function (assert) {
  var message = new Message(0, 0, 0, 14);
  assert.equal(message.toString(), '|0000|0100|1110|0101|');
});

QUnit.test('Ch1, Red, Pwm, BackwardStep1 => |0000|0100|1111|0100|', function (assert) {
  var message = new Message(0, 0, 0, 15);
  assert.equal(message.toString(), '|0000|0100|1111|0100|');
});

QUnit.test('Ch1, Blue, Pwm, Float => |0000|0101|0000|1010|', function (assert) {
  var message = new Message(0, 1, 0, 0);
  assert.equal(message.toString(), '|0000|0101|0000|1010|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep1 => |0000|0101|0001|1011|', function (assert) {
  var message = new Message(0, 1, 0, 1);
  assert.equal(message.toString(), '|0000|0101|0001|1011|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep2 => |0000|0101|0010|1000|', function (assert) {
  var message = new Message(0, 1, 0, 2);
  assert.equal(message.toString(), '|0000|0101|0010|1000|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep3 => |0000|0101|0011|1001|', function (assert) {
  var message = new Message(0, 1, 0, 3);
  assert.equal(message.toString(), '|0000|0101|0011|1001|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep4 => |0000|0101|0100|1110|', function (assert) {
  var message = new Message(0, 1, 0, 4);
  assert.equal(message.toString(), '|0000|0101|0100|1110|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep5 => |0000|0101|0101|1111|', function (assert) {
  var message = new Message(0, 1, 0, 5);
  assert.equal(message.toString(), '|0000|0101|0101|1111|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep6 => |0000|0101|0110|1100|', function (assert) {
  var message = new Message(0, 1, 0, 6);
  assert.equal(message.toString(), '|0000|0101|0110|1100|');
});

QUnit.test('Ch1, Blue, Pwm, ForwardStep7 => |0000|0101|0111|1101|', function (assert) {
  var message = new Message(0, 1, 0, 7);
  assert.equal(message.toString(), '|0000|0101|0111|1101|');
});

QUnit.test('Ch1, Blue, Pwm, BreakThenFloat => |0000|0101|1000|0010|', function (assert) {
  var message = new Message(0, 1, 0, 8);
  assert.equal(message.toString(), '|0000|0101|1000|0010|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep7 => |0000|0101|1001|0011|', function (assert) {
  var message = new Message(0, 1, 0, 9);
  assert.equal(message.toString(), '|0000|0101|1001|0011|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep6 => |0000|0101|1010|0000|', function (assert) {
  var message = new Message(0, 1, 0, 10);
  assert.equal(message.toString(), '|0000|0101|1010|0000|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep5 => |0000|0101|1011|0001|', function (assert) {
  var message = new Message(0, 1, 0, 11);
  assert.equal(message.toString(), '|0000|0101|1011|0001|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep4 => |0000|0101|1100|0110|', function (assert) {
  var message = new Message(0, 1, 0, 12);
  assert.equal(message.toString(), '|0000|0101|1100|0110|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep3 => |0000|0101|1101|0111|', function (assert) {
  var message = new Message(0, 1, 0, 13);
  assert.equal(message.toString(), '|0000|0101|1101|0111|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep2 => |0000|0101|1110|0100|', function (assert) {
  var message = new Message(0, 1, 0, 14);
  assert.equal(message.toString(), '|0000|0101|1110|0100|');
});

QUnit.test('Ch1, Blue, Pwm, BackwardStep1 => |0000|0101|1111|0101|', function (assert) {
  var message = new Message(0, 1, 0, 15);
  assert.equal(message.toString(), '|0000|0101|1111|0101|');
});

QUnit.test('Ch2, Red, Pwm, Float => |0001|0100|0000|1010|', function (assert) {
  var message = new Message(1, 0, 0, 0);
  assert.equal(message.toString(), '|0001|0100|0000|1010|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep1 => |0001|0100|0001|1011|', function (assert) {
  var message = new Message(1, 0, 0, 1);
  assert.equal(message.toString(), '|0001|0100|0001|1011|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep2 => |0001|0100|0010|1000|', function (assert) {
  var message = new Message(1, 0, 0, 2);
  assert.equal(message.toString(), '|0001|0100|0010|1000|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep3 => |0001|0100|0011|1001|', function (assert) {
  var message = new Message(1, 0, 0, 3);
  assert.equal(message.toString(), '|0001|0100|0011|1001|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep4 => |0001|0100|0100|1110|', function (assert) {
  var message = new Message(1, 0, 0, 4);
  assert.equal(message.toString(), '|0001|0100|0100|1110|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep5 => |0001|0100|0101|1111|', function (assert) {
  var message = new Message(1, 0, 0, 5);
  assert.equal(message.toString(), '|0001|0100|0101|1111|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep6 => |0001|0100|0110|1100|', function (assert) {
  var message = new Message(1, 0, 0, 6);
  assert.equal(message.toString(), '|0001|0100|0110|1100|');
});

QUnit.test('Ch2, Red, Pwm, ForwardStep7 => |0001|0100|0111|1101|', function (assert) {
  var message = new Message(1, 0, 0, 7);
  assert.equal(message.toString(), '|0001|0100|0111|1101|');
});

QUnit.test('Ch2, Red, Pwm, BreakThenFloat => |0001|0100|1000|0010|', function (assert) {
  var message = new Message(1, 0, 0, 8);
  assert.equal(message.toString(), '|0001|0100|1000|0010|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep7 => |0001|0100|1001|0011|', function (assert) {
  var message = new Message(1, 0, 0, 9);
  assert.equal(message.toString(), '|0001|0100|1001|0011|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep6 => |0001|0100|1010|0000|', function (assert) {
  var message = new Message(1, 0, 0, 10);
  assert.equal(message.toString(), '|0001|0100|1010|0000|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep5 => |0001|0100|1011|0001|', function (assert) {
  var message = new Message(1, 0, 0, 11);
  assert.equal(message.toString(), '|0001|0100|1011|0001|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep4 => |0001|0100|1100|0110|', function (assert) {
  var message = new Message(1, 0, 0, 12);
  assert.equal(message.toString(), '|0001|0100|1100|0110|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep3 => |0001|0100|1101|0111|', function (assert) {
  var message = new Message(1, 0, 0, 13);
  assert.equal(message.toString(), '|0001|0100|1101|0111|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep2 => |0001|0100|1110|0100|', function (assert) {
  var message = new Message(1, 0, 0, 14);
  assert.equal(message.toString(), '|0001|0100|1110|0100|');
});

QUnit.test('Ch2, Red, Pwm, BackwardStep1 => |0001|0100|1111|0101|', function (assert) {
  var message = new Message(1, 0, 0, 15);
  assert.equal(message.toString(), '|0001|0100|1111|0101|');
});

QUnit.test('Ch2, Blue, Pwm, Float => |0001|0101|0000|1011|', function (assert) {
  var message = new Message(1, 1, 0, 0);
  assert.equal(message.toString(), '|0001|0101|0000|1011|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep1 => |0001|0101|0001|1010|', function (assert) {
  var message = new Message(1, 1, 0, 1);
  assert.equal(message.toString(), '|0001|0101|0001|1010|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep2 => |0001|0101|0010|1001|', function (assert) {
  var message = new Message(1, 1, 0, 2);
  assert.equal(message.toString(), '|0001|0101|0010|1001|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep3 => |0001|0101|0011|1000|', function (assert) {
  var message = new Message(1, 1, 0, 3);
  assert.equal(message.toString(), '|0001|0101|0011|1000|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep4 => |0001|0101|0100|1111|', function (assert) {
  var message = new Message(1, 1, 0, 4);
  assert.equal(message.toString(), '|0001|0101|0100|1111|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep5 => |0001|0101|0101|1110|', function (assert) {
  var message = new Message(1, 1, 0, 5);
  assert.equal(message.toString(), '|0001|0101|0101|1110|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep6 => |0001|0101|0110|1101|', function (assert) {
  var message = new Message(1, 1, 0, 6);
  assert.equal(message.toString(), '|0001|0101|0110|1101|');
});

QUnit.test('Ch2, Blue, Pwm, ForwardStep7 => |0001|0101|0111|1100|', function (assert) {
  var message = new Message(1, 1, 0, 7);
  assert.equal(message.toString(), '|0001|0101|0111|1100|');
});

QUnit.test('Ch2, Blue, Pwm, BreakThenFloat => |0001|0101|1000|0011|', function (assert) {
  var message = new Message(1, 1, 0, 8);
  assert.equal(message.toString(), '|0001|0101|1000|0011|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep7 => |0001|0101|1001|0010|', function (assert) {
  var message = new Message(1, 1, 0, 9);
  assert.equal(message.toString(), '|0001|0101|1001|0010|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep6 => |0001|0101|1010|0001|', function (assert) {
  var message = new Message(1, 1, 0, 10);
  assert.equal(message.toString(), '|0001|0101|1010|0001|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep5 => |0001|0101|1011|0000|', function (assert) {
  var message = new Message(1, 1, 0, 11);
  assert.equal(message.toString(), '|0001|0101|1011|0000|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep4 => |0001|0101|1100|0111|', function (assert) {
  var message = new Message(1, 1, 0, 12);
  assert.equal(message.toString(), '|0001|0101|1100|0111|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep3 => |0001|0101|1101|0110|', function (assert) {
  var message = new Message(1, 1, 0, 13);
  assert.equal(message.toString(), '|0001|0101|1101|0110|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep2 => |0001|0101|1110|0101|', function (assert) {
  var message = new Message(1, 1, 0, 14);
  assert.equal(message.toString(), '|0001|0101|1110|0101|');
});

QUnit.test('Ch2, Blue, Pwm, BackwardStep1 => |0001|0101|1111|0100|', function (assert) {
  var message = new Message(1, 1, 0, 15);
  assert.equal(message.toString(), '|0001|0101|1111|0100|');
});

QUnit.test('Ch3, Red, Pwm, Float => |0010|0100|0000|1001|', function (assert) {
  var message = new Message(2, 0, 0, 0);
  assert.equal(message.toString(), '|0010|0100|0000|1001|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep1 => |0010|0100|0001|1000|', function (assert) {
  var message = new Message(2, 0, 0, 1);
  assert.equal(message.toString(), '|0010|0100|0001|1000|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep2 => |0010|0100|0010|1011|', function (assert) {
  var message = new Message(2, 0, 0, 2);
  assert.equal(message.toString(), '|0010|0100|0010|1011|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep3 => |0010|0100|0011|1010|', function (assert) {
  var message = new Message(2, 0, 0, 3);
  assert.equal(message.toString(), '|0010|0100|0011|1010|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep4 => |0010|0100|0100|1101|', function (assert) {
  var message = new Message(2, 0, 0, 4);
  assert.equal(message.toString(), '|0010|0100|0100|1101|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep5 => |0010|0100|0101|1100|', function (assert) {
  var message = new Message(2, 0, 0, 5);
  assert.equal(message.toString(), '|0010|0100|0101|1100|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep6 => |0010|0100|0110|1111|', function (assert) {
  var message = new Message(2, 0, 0, 6);
  assert.equal(message.toString(), '|0010|0100|0110|1111|');
});

QUnit.test('Ch3, Red, Pwm, ForwardStep7 => |0010|0100|0111|1110|', function (assert) {
  var message = new Message(2, 0, 0, 7);
  assert.equal(message.toString(), '|0010|0100|0111|1110|');
});

QUnit.test('Ch3, Red, Pwm, BreakThenFloat => |0010|0100|1000|0001|', function (assert) {
  var message = new Message(2, 0, 0, 8);
  assert.equal(message.toString(), '|0010|0100|1000|0001|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep7 => |0010|0100|1001|0000|', function (assert) {
  var message = new Message(2, 0, 0, 9);
  assert.equal(message.toString(), '|0010|0100|1001|0000|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep6 => |0010|0100|1010|0011|', function (assert) {
  var message = new Message(2, 0, 0, 10);
  assert.equal(message.toString(), '|0010|0100|1010|0011|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep5 => |0010|0100|1011|0010|', function (assert) {
  var message = new Message(2, 0, 0, 11);
  assert.equal(message.toString(), '|0010|0100|1011|0010|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep4 => |0010|0100|1100|0101|', function (assert) {
  var message = new Message(2, 0, 0, 12);
  assert.equal(message.toString(), '|0010|0100|1100|0101|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep3 => |0010|0100|1101|0100|', function (assert) {
  var message = new Message(2, 0, 0, 13);
  assert.equal(message.toString(), '|0010|0100|1101|0100|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep2 => |0010|0100|1110|0111|', function (assert) {
  var message = new Message(2, 0, 0, 14);
  assert.equal(message.toString(), '|0010|0100|1110|0111|');
});

QUnit.test('Ch3, Red, Pwm, BackwardStep1 => |0010|0100|1111|0110|', function (assert) {
  var message = new Message(2, 0, 0, 15);
  assert.equal(message.toString(), '|0010|0100|1111|0110|');
});

QUnit.test('Ch3, Blue, Pwm, Float => |0010|0101|0000|1000|', function (assert) {
  var message = new Message(2, 1, 0, 0);
  assert.equal(message.toString(), '|0010|0101|0000|1000|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep1 => |0010|0101|0001|1001|', function (assert) {
  var message = new Message(2, 1, 0, 1);
  assert.equal(message.toString(), '|0010|0101|0001|1001|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep2 => |0010|0101|0010|1010|', function (assert) {
  var message = new Message(2, 1, 0, 2);
  assert.equal(message.toString(), '|0010|0101|0010|1010|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep3 => |0010|0101|0011|1011|', function (assert) {
  var message = new Message(2, 1, 0, 3);
  assert.equal(message.toString(), '|0010|0101|0011|1011|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep4 => |0010|0101|0100|1100|', function (assert) {
  var message = new Message(2, 1, 0, 4);
  assert.equal(message.toString(), '|0010|0101|0100|1100|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep5 => |0010|0101|0101|1101|', function (assert) {
  var message = new Message(2, 1, 0, 5);
  assert.equal(message.toString(), '|0010|0101|0101|1101|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep6 => |0010|0101|0110|1110|', function (assert) {
  var message = new Message(2, 1, 0, 6);
  assert.equal(message.toString(), '|0010|0101|0110|1110|');
});

QUnit.test('Ch3, Blue, Pwm, ForwardStep7 => |0010|0101|0111|1111|', function (assert) {
  var message = new Message(2, 1, 0, 7);
  assert.equal(message.toString(), '|0010|0101|0111|1111|');
});

QUnit.test('Ch3, Blue, Pwm, BreakThenFloat => |0010|0101|1000|0000|', function (assert) {
  var message = new Message(2, 1, 0, 8);
  assert.equal(message.toString(), '|0010|0101|1000|0000|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep7 => |0010|0101|1001|0001|', function (assert) {
  var message = new Message(2, 1, 0, 9);
  assert.equal(message.toString(), '|0010|0101|1001|0001|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep6 => |0010|0101|1010|0010|', function (assert) {
  var message = new Message(2, 1, 0, 10);
  assert.equal(message.toString(), '|0010|0101|1010|0010|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep5 => |0010|0101|1011|0011|', function (assert) {
  var message = new Message(2, 1, 0, 11);
  assert.equal(message.toString(), '|0010|0101|1011|0011|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep4 => |0010|0101|1100|0100|', function (assert) {
  var message = new Message(2, 1, 0, 12);
  assert.equal(message.toString(), '|0010|0101|1100|0100|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep3 => |0010|0101|1101|0101|', function (assert) {
  var message = new Message(2, 1, 0, 13);
  assert.equal(message.toString(), '|0010|0101|1101|0101|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep2 => |0010|0101|1110|0110|', function (assert) {
  var message = new Message(2, 1, 0, 14);
  assert.equal(message.toString(), '|0010|0101|1110|0110|');
});

QUnit.test('Ch3, Blue, Pwm, BackwardStep1 => |0010|0101|1111|0111|', function (assert) {
  var message = new Message(2, 1, 0, 15);
  assert.equal(message.toString(), '|0010|0101|1111|0111|');
});

QUnit.test('Ch4, Red, Pwm, Float => |0011|0100|0000|1000|', function (assert) {
  var message = new Message(3, 0, 0, 0);
  assert.equal(message.toString(), '|0011|0100|0000|1000|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep1 => |0011|0100|0001|1001|', function (assert) {
  var message = new Message(3, 0, 0, 1);
  assert.equal(message.toString(), '|0011|0100|0001|1001|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep2 => |0011|0100|0010|1010|', function (assert) {
  var message = new Message(3, 0, 0, 2);
  assert.equal(message.toString(), '|0011|0100|0010|1010|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep3 => |0011|0100|0011|1011|', function (assert) {
  var message = new Message(3, 0, 0, 3);
  assert.equal(message.toString(), '|0011|0100|0011|1011|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep4 => |0011|0100|0100|1100|', function (assert) {
  var message = new Message(3, 0, 0, 4);
  assert.equal(message.toString(), '|0011|0100|0100|1100|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep5 => |0011|0100|0101|1101|', function (assert) {
  var message = new Message(3, 0, 0, 5);
  assert.equal(message.toString(), '|0011|0100|0101|1101|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep6 => |0011|0100|0110|1110|', function (assert) {
  var message = new Message(3, 0, 0, 6);
  assert.equal(message.toString(), '|0011|0100|0110|1110|');
});

QUnit.test('Ch4, Red, Pwm, ForwardStep7 => |0011|0100|0111|1111|', function (assert) {
  var message = new Message(3, 0, 0, 7);
  assert.equal(message.toString(), '|0011|0100|0111|1111|');
});

QUnit.test('Ch4, Red, Pwm, BreakThenFloat => |0011|0100|1000|0000|', function (assert) {
  var message = new Message(3, 0, 0, 8);
  assert.equal(message.toString(), '|0011|0100|1000|0000|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep7 => |0011|0100|1001|0001|', function (assert) {
  var message = new Message(3, 0, 0, 9);
  assert.equal(message.toString(), '|0011|0100|1001|0001|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep6 => |0011|0100|1010|0010|', function (assert) {
  var message = new Message(3, 0, 0, 10);
  assert.equal(message.toString(), '|0011|0100|1010|0010|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep5 => |0011|0100|1011|0011|', function (assert) {
  var message = new Message(3, 0, 0, 11);
  assert.equal(message.toString(), '|0011|0100|1011|0011|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep4 => |0011|0100|1100|0100|', function (assert) {
  var message = new Message(3, 0, 0, 12);
  assert.equal(message.toString(), '|0011|0100|1100|0100|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep3 => |0011|0100|1101|0101|', function (assert) {
  var message = new Message(3, 0, 0, 13);
  assert.equal(message.toString(), '|0011|0100|1101|0101|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep2 => |0011|0100|1110|0110|', function (assert) {
  var message = new Message(3, 0, 0, 14);
  assert.equal(message.toString(), '|0011|0100|1110|0110|');
});

QUnit.test('Ch4, Red, Pwm, BackwardStep1 => |0011|0100|1111|0111|', function (assert) {
  var message = new Message(3, 0, 0, 15);
  assert.equal(message.toString(), '|0011|0100|1111|0111|');
});

QUnit.test('Ch4, Blue, Pwm, Float => |0011|0101|0000|1001|', function (assert) {
  var message = new Message(3, 1, 0, 0);
  assert.equal(message.toString(), '|0011|0101|0000|1001|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep1 => |0011|0101|0001|1000|', function (assert) {
  var message = new Message(3, 1, 0, 1);
  assert.equal(message.toString(), '|0011|0101|0001|1000|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep2 => |0011|0101|0010|1011|', function (assert) {
  var message = new Message(3, 1, 0, 2);
  assert.equal(message.toString(), '|0011|0101|0010|1011|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep3 => |0011|0101|0011|1010|', function (assert) {
  var message = new Message(3, 1, 0, 3);
  assert.equal(message.toString(), '|0011|0101|0011|1010|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep4 => |0011|0101|0100|1101|', function (assert) {
  var message = new Message(3, 1, 0, 4);
  assert.equal(message.toString(), '|0011|0101|0100|1101|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep5 => |0011|0101|0101|1100|', function (assert) {
  var message = new Message(3, 1, 0, 5);
  assert.equal(message.toString(), '|0011|0101|0101|1100|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep6 => |0011|0101|0110|1111|', function (assert) {
  var message = new Message(3, 1, 0, 6);
  assert.equal(message.toString(), '|0011|0101|0110|1111|');
});

QUnit.test('Ch4, Blue, Pwm, ForwardStep7 => |0011|0101|0111|1110|', function (assert) {
  var message = new Message(3, 1, 0, 7);
  assert.equal(message.toString(), '|0011|0101|0111|1110|');
});

QUnit.test('Ch4, Blue, Pwm, BreakThenFloat => |0011|0101|1000|0001|', function (assert) {
  var message = new Message(3, 1, 0, 8);
  assert.equal(message.toString(), '|0011|0101|1000|0001|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep7 => |0011|0101|1001|0000|', function (assert) {
  var message = new Message(3, 1, 0, 9);
  assert.equal(message.toString(), '|0011|0101|1001|0000|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep6 => |0011|0101|1010|0011|', function (assert) {
  var message = new Message(3, 1, 0, 10);
  assert.equal(message.toString(), '|0011|0101|1010|0011|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep5 => |0011|0101|1011|0010|', function (assert) {
  var message = new Message(3, 1, 0, 11);
  assert.equal(message.toString(), '|0011|0101|1011|0010|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep4 => |0011|0101|1100|0101|', function (assert) {
  var message = new Message(3, 1, 0, 12);
  assert.equal(message.toString(), '|0011|0101|1100|0101|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep3 => |0011|0101|1101|0100|', function (assert) {
  var message = new Message(3, 1, 0, 13);
  assert.equal(message.toString(), '|0011|0101|1101|0100|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep2 => |0011|0101|1110|0111|', function (assert) {
  var message = new Message(3, 1, 0, 14);
  assert.equal(message.toString(), '|0011|0101|1110|0111|');
});

QUnit.test('Ch4, Blue, Pwm, BackwardStep1 => |0011|0101|1111|0110|', function (assert) {
  var message = new Message(3, 1, 0, 15);
  assert.equal(message.toString(), '|0011|0101|1111|0110|');
});

QUnit.test('Ch1, Red, IncDec, ToggleFullForward => |0000|0110|0000|1001|', function (assert) {
  var message = new Message(0, 0, 1, 0);
  assert.equal(message.toString(), '|0000|0110|0000|1001|');
});

QUnit.test('Ch1, Red, IncDec, ToggleDirection => |0000|0110|0001|1000|', function (assert) {
  var message = new Message(0, 0, 1, 1);
  assert.equal(message.toString(), '|0000|0110|0001|1000|');
});

QUnit.test('Ch1, Red, IncDec, IncrementNumericalPwm => |0000|0110|0010|1011|', function (assert) {
  var message = new Message(0, 0, 1, 2);
  assert.equal(message.toString(), '|0000|0110|0010|1011|');
});

QUnit.test('Ch1, Red, IncDec, DecrementNumericalPwm => |0000|0110|0011|1010|', function (assert) {
  var message = new Message(0, 0, 1, 3);
  assert.equal(message.toString(), '|0000|0110|0011|1010|');
});

QUnit.test('Ch1, Red, IncDec, IncrementPwm => |0000|0110|0100|1101|', function (assert) {
  var message = new Message(0, 0, 1, 4);
  assert.equal(message.toString(), '|0000|0110|0100|1101|');
});

QUnit.test('Ch1, Red, IncDec, DecrementPwm => |0000|0110|0101|1100|', function (assert) {
  var message = new Message(0, 0, 1, 5);
  assert.equal(message.toString(), '|0000|0110|0101|1100|');
});

QUnit.test('Ch1, Red, IncDec, FullForward => |0000|0110|0110|1111|', function (assert) {
  var message = new Message(0, 0, 1, 6);
  assert.equal(message.toString(), '|0000|0110|0110|1111|');
});

QUnit.test('Ch1, Red, IncDec, FullBackward => |0000|0110|0111|1110|', function (assert) {
  var message = new Message(0, 0, 1, 7);
  assert.equal(message.toString(), '|0000|0110|0111|1110|');
});

QUnit.test('Ch1, Red, IncDec, ToggleFullForwardBackward => |0000|0110|1000|0001|', function (assert) {
  var message = new Message(0, 0, 1, 8);
  assert.equal(message.toString(), '|0000|0110|1000|0001|');
});

QUnit.test('Ch1, Red, IncDec, ClearC1 => |0000|0110|1001|0000|', function (assert) {
  var message = new Message(0, 0, 1, 9);
  assert.equal(message.toString(), '|0000|0110|1001|0000|');
});

QUnit.test('Ch1, Red, IncDec, SetC1 => |0000|0110|1010|0011|', function (assert) {
  var message = new Message(0, 0, 1, 10);
  assert.equal(message.toString(), '|0000|0110|1010|0011|');
});

QUnit.test('Ch1, Red, IncDec, ToggleC1 => |0000|0110|1011|0010|', function (assert) {
  var message = new Message(0, 0, 1, 11);
  assert.equal(message.toString(), '|0000|0110|1011|0010|');
});

QUnit.test('Ch1, Red, IncDec, ClearC2 => |0000|0110|1100|0101|', function (assert) {
  var message = new Message(0, 0, 1, 12);
  assert.equal(message.toString(), '|0000|0110|1100|0101|');
});

QUnit.test('Ch1, Red, IncDec, SetC2 => |0000|0110|1101|0100|', function (assert) {
  var message = new Message(0, 0, 1, 13);
  assert.equal(message.toString(), '|0000|0110|1101|0100|');
});

QUnit.test('Ch1, Red, IncDec, ToggleC2 => |0000|0110|1110|0111|', function (assert) {
  var message = new Message(0, 0, 1, 14);
  assert.equal(message.toString(), '|0000|0110|1110|0111|');
});

QUnit.test('Ch1, Red, IncDec, ToggleFullBackward => |0000|0110|1111|0110|', function (assert) {
  var message = new Message(0, 0, 1, 15);
  assert.equal(message.toString(), '|0000|0110|1111|0110|');
});

QUnit.test('Ch1, Blue, IncDec, ToggleFullForward => |0000|0111|0000|1000|', function (assert) {
  var message = new Message(0, 1, 1, 0);
  assert.equal(message.toString(), '|0000|0111|0000|1000|');
});

QUnit.test('Ch1, Blue, IncDec, ToggleDirection => |0000|0111|0001|1001|', function (assert) {
  var message = new Message(0, 1, 1, 1);
  assert.equal(message.toString(), '|0000|0111|0001|1001|');
});

QUnit.test('Ch1, Blue, IncDec, IncrementNumericalPwm => |0000|0111|0010|1010|', function (assert) {
  var message = new Message(0, 1, 1, 2);
  assert.equal(message.toString(), '|0000|0111|0010|1010|');
});

QUnit.test('Ch1, Blue, IncDec, DecrementNumericalPwm => |0000|0111|0011|1011|', function (assert) {
  var message = new Message(0, 1, 1, 3);
  assert.equal(message.toString(), '|0000|0111|0011|1011|');
});

QUnit.test('Ch1, Blue, IncDec, IncrementPwm => |0000|0111|0100|1100|', function (assert) {
  var message = new Message(0, 1, 1, 4);
  assert.equal(message.toString(), '|0000|0111|0100|1100|');
});

QUnit.test('Ch1, Blue, IncDec, DecrementPwm => |0000|0111|0101|1101|', function (assert) {
  var message = new Message(0, 1, 1, 5);
  assert.equal(message.toString(), '|0000|0111|0101|1101|');
});

QUnit.test('Ch1, Blue, IncDec, FullForward => |0000|0111|0110|1110|', function (assert) {
  var message = new Message(0, 1, 1, 6);
  assert.equal(message.toString(), '|0000|0111|0110|1110|');
});

QUnit.test('Ch1, Blue, IncDec, FullBackward => |0000|0111|0111|1111|', function (assert) {
  var message = new Message(0, 1, 1, 7);
  assert.equal(message.toString(), '|0000|0111|0111|1111|');
});

QUnit.test('Ch1, Blue, IncDec, ToggleFullForwardBackward => |0000|0111|1000|0000|', function (assert) {
  var message = new Message(0, 1, 1, 8);
  assert.equal(message.toString(), '|0000|0111|1000|0000|');
});

QUnit.test('Ch1, Blue, IncDec, ClearC1 => |0000|0111|1001|0001|', function (assert) {
  var message = new Message(0, 1, 1, 9);
  assert.equal(message.toString(), '|0000|0111|1001|0001|');
});

QUnit.test('Ch1, Blue, IncDec, SetC1 => |0000|0111|1010|0010|', function (assert) {
  var message = new Message(0, 1, 1, 10);
  assert.equal(message.toString(), '|0000|0111|1010|0010|');
});

QUnit.test('Ch1, Blue, IncDec, ToggleC1 => |0000|0111|1011|0011|', function (assert) {
  var message = new Message(0, 1, 1, 11);
  assert.equal(message.toString(), '|0000|0111|1011|0011|');
});

QUnit.test('Ch1, Blue, IncDec, ClearC2 => |0000|0111|1100|0100|', function (assert) {
  var message = new Message(0, 1, 1, 12);
  assert.equal(message.toString(), '|0000|0111|1100|0100|');
});

QUnit.test('Ch1, Blue, IncDec, SetC2 => |0000|0111|1101|0101|', function (assert) {
  var message = new Message(0, 1, 1, 13);
  assert.equal(message.toString(), '|0000|0111|1101|0101|');
});

QUnit.test('Ch1, Blue, IncDec, ToggleC2 => |0000|0111|1110|0110|', function (assert) {
  var message = new Message(0, 1, 1, 14);
  assert.equal(message.toString(), '|0000|0111|1110|0110|');
});

QUnit.test('Ch1, Blue, IncDec, ToggleFullBackward => |0000|0111|1111|0111|', function (assert) {
  var message = new Message(0, 1, 1, 15);
  assert.equal(message.toString(), '|0000|0111|1111|0111|');
});

QUnit.test('Ch2, Red, IncDec, ToggleFullForward => |0001|0110|0000|1000|', function (assert) {
  var message = new Message(1, 0, 1, 0);
  assert.equal(message.toString(), '|0001|0110|0000|1000|');
});

QUnit.test('Ch2, Red, IncDec, ToggleDirection => |0001|0110|0001|1001|', function (assert) {
  var message = new Message(1, 0, 1, 1);
  assert.equal(message.toString(), '|0001|0110|0001|1001|');
});

QUnit.test('Ch2, Red, IncDec, IncrementNumericalPwm => |0001|0110|0010|1010|', function (assert) {
  var message = new Message(1, 0, 1, 2);
  assert.equal(message.toString(), '|0001|0110|0010|1010|');
});

QUnit.test('Ch2, Red, IncDec, DecrementNumericalPwm => |0001|0110|0011|1011|', function (assert) {
  var message = new Message(1, 0, 1, 3);
  assert.equal(message.toString(), '|0001|0110|0011|1011|');
});

QUnit.test('Ch2, Red, IncDec, IncrementPwm => |0001|0110|0100|1100|', function (assert) {
  var message = new Message(1, 0, 1, 4);
  assert.equal(message.toString(), '|0001|0110|0100|1100|');
});

QUnit.test('Ch2, Red, IncDec, DecrementPwm => |0001|0110|0101|1101|', function (assert) {
  var message = new Message(1, 0, 1, 5);
  assert.equal(message.toString(), '|0001|0110|0101|1101|');
});

QUnit.test('Ch2, Red, IncDec, FullForward => |0001|0110|0110|1110|', function (assert) {
  var message = new Message(1, 0, 1, 6);
  assert.equal(message.toString(), '|0001|0110|0110|1110|');
});

QUnit.test('Ch2, Red, IncDec, FullBackward => |0001|0110|0111|1111|', function (assert) {
  var message = new Message(1, 0, 1, 7);
  assert.equal(message.toString(), '|0001|0110|0111|1111|');
});

QUnit.test('Ch2, Red, IncDec, ToggleFullForwardBackward => |0001|0110|1000|0000|', function (assert) {
  var message = new Message(1, 0, 1, 8);
  assert.equal(message.toString(), '|0001|0110|1000|0000|');
});

QUnit.test('Ch2, Red, IncDec, ClearC1 => |0001|0110|1001|0001|', function (assert) {
  var message = new Message(1, 0, 1, 9);
  assert.equal(message.toString(), '|0001|0110|1001|0001|');
});

QUnit.test('Ch2, Red, IncDec, SetC1 => |0001|0110|1010|0010|', function (assert) {
  var message = new Message(1, 0, 1, 10);
  assert.equal(message.toString(), '|0001|0110|1010|0010|');
});

QUnit.test('Ch2, Red, IncDec, ToggleC1 => |0001|0110|1011|0011|', function (assert) {
  var message = new Message(1, 0, 1, 11);
  assert.equal(message.toString(), '|0001|0110|1011|0011|');
});

QUnit.test('Ch2, Red, IncDec, ClearC2 => |0001|0110|1100|0100|', function (assert) {
  var message = new Message(1, 0, 1, 12);
  assert.equal(message.toString(), '|0001|0110|1100|0100|');
});

QUnit.test('Ch2, Red, IncDec, SetC2 => |0001|0110|1101|0101|', function (assert) {
  var message = new Message(1, 0, 1, 13);
  assert.equal(message.toString(), '|0001|0110|1101|0101|');
});

QUnit.test('Ch2, Red, IncDec, ToggleC2 => |0001|0110|1110|0110|', function (assert) {
  var message = new Message(1, 0, 1, 14);
  assert.equal(message.toString(), '|0001|0110|1110|0110|');
});

QUnit.test('Ch2, Red, IncDec, ToggleFullBackward => |0001|0110|1111|0111|', function (assert) {
  var message = new Message(1, 0, 1, 15);
  assert.equal(message.toString(), '|0001|0110|1111|0111|');
});

QUnit.test('Ch2, Blue, IncDec, ToggleFullForward => |0001|0111|0000|1001|', function (assert) {
  var message = new Message(1, 1, 1, 0);
  assert.equal(message.toString(), '|0001|0111|0000|1001|');
});

QUnit.test('Ch2, Blue, IncDec, ToggleDirection => |0001|0111|0001|1000|', function (assert) {
  var message = new Message(1, 1, 1, 1);
  assert.equal(message.toString(), '|0001|0111|0001|1000|');
});

QUnit.test('Ch2, Blue, IncDec, IncrementNumericalPwm => |0001|0111|0010|1011|', function (assert) {
  var message = new Message(1, 1, 1, 2);
  assert.equal(message.toString(), '|0001|0111|0010|1011|');
});

QUnit.test('Ch2, Blue, IncDec, DecrementNumericalPwm => |0001|0111|0011|1010|', function (assert) {
  var message = new Message(1, 1, 1, 3);
  assert.equal(message.toString(), '|0001|0111|0011|1010|');
});

QUnit.test('Ch2, Blue, IncDec, IncrementPwm => |0001|0111|0100|1101|', function (assert) {
  var message = new Message(1, 1, 1, 4);
  assert.equal(message.toString(), '|0001|0111|0100|1101|');
});

QUnit.test('Ch2, Blue, IncDec, DecrementPwm => |0001|0111|0101|1100|', function (assert) {
  var message = new Message(1, 1, 1, 5);
  assert.equal(message.toString(), '|0001|0111|0101|1100|');
});

QUnit.test('Ch2, Blue, IncDec, FullForward => |0001|0111|0110|1111|', function (assert) {
  var message = new Message(1, 1, 1, 6);
  assert.equal(message.toString(), '|0001|0111|0110|1111|');
});

QUnit.test('Ch2, Blue, IncDec, FullBackward => |0001|0111|0111|1110|', function (assert) {
  var message = new Message(1, 1, 1, 7);
  assert.equal(message.toString(), '|0001|0111|0111|1110|');
});

QUnit.test('Ch2, Blue, IncDec, ToggleFullForwardBackward => |0001|0111|1000|0001|', function (assert) {
  var message = new Message(1, 1, 1, 8);
  assert.equal(message.toString(), '|0001|0111|1000|0001|');
});

QUnit.test('Ch2, Blue, IncDec, ClearC1 => |0001|0111|1001|0000|', function (assert) {
  var message = new Message(1, 1, 1, 9);
  assert.equal(message.toString(), '|0001|0111|1001|0000|');
});

QUnit.test('Ch2, Blue, IncDec, SetC1 => |0001|0111|1010|0011|', function (assert) {
  var message = new Message(1, 1, 1, 10);
  assert.equal(message.toString(), '|0001|0111|1010|0011|');
});

QUnit.test('Ch2, Blue, IncDec, ToggleC1 => |0001|0111|1011|0010|', function (assert) {
  var message = new Message(1, 1, 1, 11);
  assert.equal(message.toString(), '|0001|0111|1011|0010|');
});

QUnit.test('Ch2, Blue, IncDec, ClearC2 => |0001|0111|1100|0101|', function (assert) {
  var message = new Message(1, 1, 1, 12);
  assert.equal(message.toString(), '|0001|0111|1100|0101|');
});

QUnit.test('Ch2, Blue, IncDec, SetC2 => |0001|0111|1101|0100|', function (assert) {
  var message = new Message(1, 1, 1, 13);
  assert.equal(message.toString(), '|0001|0111|1101|0100|');
});

QUnit.test('Ch2, Blue, IncDec, ToggleC2 => |0001|0111|1110|0111|', function (assert) {
  var message = new Message(1, 1, 1, 14);
  assert.equal(message.toString(), '|0001|0111|1110|0111|');
});

QUnit.test('Ch2, Blue, IncDec, ToggleFullBackward => |0001|0111|1111|0110|', function (assert) {
  var message = new Message(1, 1, 1, 15);
  assert.equal(message.toString(), '|0001|0111|1111|0110|');
});

QUnit.test('Ch3, Red, IncDec, ToggleFullForward => |0010|0110|0000|1011|', function (assert) {
  var message = new Message(2, 0, 1, 0);
  assert.equal(message.toString(), '|0010|0110|0000|1011|');
});

QUnit.test('Ch3, Red, IncDec, ToggleDirection => |0010|0110|0001|1010|', function (assert) {
  var message = new Message(2, 0, 1, 1);
  assert.equal(message.toString(), '|0010|0110|0001|1010|');
});

QUnit.test('Ch3, Red, IncDec, IncrementNumericalPwm => |0010|0110|0010|1001|', function (assert) {
  var message = new Message(2, 0, 1, 2);
  assert.equal(message.toString(), '|0010|0110|0010|1001|');
});

QUnit.test('Ch3, Red, IncDec, DecrementNumericalPwm => |0010|0110|0011|1000|', function (assert) {
  var message = new Message(2, 0, 1, 3);
  assert.equal(message.toString(), '|0010|0110|0011|1000|');
});

QUnit.test('Ch3, Red, IncDec, IncrementPwm => |0010|0110|0100|1111|', function (assert) {
  var message = new Message(2, 0, 1, 4);
  assert.equal(message.toString(), '|0010|0110|0100|1111|');
});

QUnit.test('Ch3, Red, IncDec, DecrementPwm => |0010|0110|0101|1110|', function (assert) {
  var message = new Message(2, 0, 1, 5);
  assert.equal(message.toString(), '|0010|0110|0101|1110|');
});

QUnit.test('Ch3, Red, IncDec, FullForward => |0010|0110|0110|1101|', function (assert) {
  var message = new Message(2, 0, 1, 6);
  assert.equal(message.toString(), '|0010|0110|0110|1101|');
});

QUnit.test('Ch3, Red, IncDec, FullBackward => |0010|0110|0111|1100|', function (assert) {
  var message = new Message(2, 0, 1, 7);
  assert.equal(message.toString(), '|0010|0110|0111|1100|');
});

QUnit.test('Ch3, Red, IncDec, ToggleFullForwardBackward => |0010|0110|1000|0011|', function (assert) {
  var message = new Message(2, 0, 1, 8);
  assert.equal(message.toString(), '|0010|0110|1000|0011|');
});

QUnit.test('Ch3, Red, IncDec, ClearC1 => |0010|0110|1001|0010|', function (assert) {
  var message = new Message(2, 0, 1, 9);
  assert.equal(message.toString(), '|0010|0110|1001|0010|');
});

QUnit.test('Ch3, Red, IncDec, SetC1 => |0010|0110|1010|0001|', function (assert) {
  var message = new Message(2, 0, 1, 10);
  assert.equal(message.toString(), '|0010|0110|1010|0001|');
});

QUnit.test('Ch3, Red, IncDec, ToggleC1 => |0010|0110|1011|0000|', function (assert) {
  var message = new Message(2, 0, 1, 11);
  assert.equal(message.toString(), '|0010|0110|1011|0000|');
});

QUnit.test('Ch3, Red, IncDec, ClearC2 => |0010|0110|1100|0111|', function (assert) {
  var message = new Message(2, 0, 1, 12);
  assert.equal(message.toString(), '|0010|0110|1100|0111|');
});

QUnit.test('Ch3, Red, IncDec, SetC2 => |0010|0110|1101|0110|', function (assert) {
  var message = new Message(2, 0, 1, 13);
  assert.equal(message.toString(), '|0010|0110|1101|0110|');
});

QUnit.test('Ch3, Red, IncDec, ToggleC2 => |0010|0110|1110|0101|', function (assert) {
  var message = new Message(2, 0, 1, 14);
  assert.equal(message.toString(), '|0010|0110|1110|0101|');
});

QUnit.test('Ch3, Red, IncDec, ToggleFullBackward => |0010|0110|1111|0100|', function (assert) {
  var message = new Message(2, 0, 1, 15);
  assert.equal(message.toString(), '|0010|0110|1111|0100|');
});

QUnit.test('Ch3, Blue, IncDec, ToggleFullForward => |0010|0111|0000|1010|', function (assert) {
  var message = new Message(2, 1, 1, 0);
  assert.equal(message.toString(), '|0010|0111|0000|1010|');
});

QUnit.test('Ch3, Blue, IncDec, ToggleDirection => |0010|0111|0001|1011|', function (assert) {
  var message = new Message(2, 1, 1, 1);
  assert.equal(message.toString(), '|0010|0111|0001|1011|');
});

QUnit.test('Ch3, Blue, IncDec, IncrementNumericalPwm => |0010|0111|0010|1000|', function (assert) {
  var message = new Message(2, 1, 1, 2);
  assert.equal(message.toString(), '|0010|0111|0010|1000|');
});

QUnit.test('Ch3, Blue, IncDec, DecrementNumericalPwm => |0010|0111|0011|1001|', function (assert) {
  var message = new Message(2, 1, 1, 3);
  assert.equal(message.toString(), '|0010|0111|0011|1001|');
});

QUnit.test('Ch3, Blue, IncDec, IncrementPwm => |0010|0111|0100|1110|', function (assert) {
  var message = new Message(2, 1, 1, 4);
  assert.equal(message.toString(), '|0010|0111|0100|1110|');
});

QUnit.test('Ch3, Blue, IncDec, DecrementPwm => |0010|0111|0101|1111|', function (assert) {
  var message = new Message(2, 1, 1, 5);
  assert.equal(message.toString(), '|0010|0111|0101|1111|');
});

QUnit.test('Ch3, Blue, IncDec, FullForward => |0010|0111|0110|1100|', function (assert) {
  var message = new Message(2, 1, 1, 6);
  assert.equal(message.toString(), '|0010|0111|0110|1100|');
});

QUnit.test('Ch3, Blue, IncDec, FullBackward => |0010|0111|0111|1101|', function (assert) {
  var message = new Message(2, 1, 1, 7);
  assert.equal(message.toString(), '|0010|0111|0111|1101|');
});

QUnit.test('Ch3, Blue, IncDec, ToggleFullForwardBackward => |0010|0111|1000|0010|', function (assert) {
  var message = new Message(2, 1, 1, 8);
  assert.equal(message.toString(), '|0010|0111|1000|0010|');
});

QUnit.test('Ch3, Blue, IncDec, ClearC1 => |0010|0111|1001|0011|', function (assert) {
  var message = new Message(2, 1, 1, 9);
  assert.equal(message.toString(), '|0010|0111|1001|0011|');
});

QUnit.test('Ch3, Blue, IncDec, SetC1 => |0010|0111|1010|0000|', function (assert) {
  var message = new Message(2, 1, 1, 10);
  assert.equal(message.toString(), '|0010|0111|1010|0000|');
});

QUnit.test('Ch3, Blue, IncDec, ToggleC1 => |0010|0111|1011|0001|', function (assert) {
  var message = new Message(2, 1, 1, 11);
  assert.equal(message.toString(), '|0010|0111|1011|0001|');
});

QUnit.test('Ch3, Blue, IncDec, ClearC2 => |0010|0111|1100|0110|', function (assert) {
  var message = new Message(2, 1, 1, 12);
  assert.equal(message.toString(), '|0010|0111|1100|0110|');
});

QUnit.test('Ch3, Blue, IncDec, SetC2 => |0010|0111|1101|0111|', function (assert) {
  var message = new Message(2, 1, 1, 13);
  assert.equal(message.toString(), '|0010|0111|1101|0111|');
});

QUnit.test('Ch3, Blue, IncDec, ToggleC2 => |0010|0111|1110|0100|', function (assert) {
  var message = new Message(2, 1, 1, 14);
  assert.equal(message.toString(), '|0010|0111|1110|0100|');
});

QUnit.test('Ch3, Blue, IncDec, ToggleFullBackward => |0010|0111|1111|0101|', function (assert) {
  var message = new Message(2, 1, 1, 15);
  assert.equal(message.toString(), '|0010|0111|1111|0101|');
});

QUnit.test('Ch4, Red, IncDec, ToggleFullForward => |0011|0110|0000|1010|', function (assert) {
  var message = new Message(3, 0, 1, 0);
  assert.equal(message.toString(), '|0011|0110|0000|1010|');
});

QUnit.test('Ch4, Red, IncDec, ToggleDirection => |0011|0110|0001|1011|', function (assert) {
  var message = new Message(3, 0, 1, 1);
  assert.equal(message.toString(), '|0011|0110|0001|1011|');
});

QUnit.test('Ch4, Red, IncDec, IncrementNumericalPwm => |0011|0110|0010|1000|', function (assert) {
  var message = new Message(3, 0, 1, 2);
  assert.equal(message.toString(), '|0011|0110|0010|1000|');
});

QUnit.test('Ch4, Red, IncDec, DecrementNumericalPwm => |0011|0110|0011|1001|', function (assert) {
  var message = new Message(3, 0, 1, 3);
  assert.equal(message.toString(), '|0011|0110|0011|1001|');
});

QUnit.test('Ch4, Red, IncDec, IncrementPwm => |0011|0110|0100|1110|', function (assert) {
  var message = new Message(3, 0, 1, 4);
  assert.equal(message.toString(), '|0011|0110|0100|1110|');
});

QUnit.test('Ch4, Red, IncDec, DecrementPwm => |0011|0110|0101|1111|', function (assert) {
  var message = new Message(3, 0, 1, 5);
  assert.equal(message.toString(), '|0011|0110|0101|1111|');
});

QUnit.test('Ch4, Red, IncDec, FullForward => |0011|0110|0110|1100|', function (assert) {
  var message = new Message(3, 0, 1, 6);
  assert.equal(message.toString(), '|0011|0110|0110|1100|');
});

QUnit.test('Ch4, Red, IncDec, FullBackward => |0011|0110|0111|1101|', function (assert) {
  var message = new Message(3, 0, 1, 7);
  assert.equal(message.toString(), '|0011|0110|0111|1101|');
});

QUnit.test('Ch4, Red, IncDec, ToggleFullForwardBackward => |0011|0110|1000|0010|', function (assert) {
  var message = new Message(3, 0, 1, 8);
  assert.equal(message.toString(), '|0011|0110|1000|0010|');
});

QUnit.test('Ch4, Red, IncDec, ClearC1 => |0011|0110|1001|0011|', function (assert) {
  var message = new Message(3, 0, 1, 9);
  assert.equal(message.toString(), '|0011|0110|1001|0011|');
});

QUnit.test('Ch4, Red, IncDec, SetC1 => |0011|0110|1010|0000|', function (assert) {
  var message = new Message(3, 0, 1, 10);
  assert.equal(message.toString(), '|0011|0110|1010|0000|');
});

QUnit.test('Ch4, Red, IncDec, ToggleC1 => |0011|0110|1011|0001|', function (assert) {
  var message = new Message(3, 0, 1, 11);
  assert.equal(message.toString(), '|0011|0110|1011|0001|');
});

QUnit.test('Ch4, Red, IncDec, ClearC2 => |0011|0110|1100|0110|', function (assert) {
  var message = new Message(3, 0, 1, 12);
  assert.equal(message.toString(), '|0011|0110|1100|0110|');
});

QUnit.test('Ch4, Red, IncDec, SetC2 => |0011|0110|1101|0111|', function (assert) {
  var message = new Message(3, 0, 1, 13);
  assert.equal(message.toString(), '|0011|0110|1101|0111|');
});

QUnit.test('Ch4, Red, IncDec, ToggleC2 => |0011|0110|1110|0100|', function (assert) {
  var message = new Message(3, 0, 1, 14);
  assert.equal(message.toString(), '|0011|0110|1110|0100|');
});

QUnit.test('Ch4, Red, IncDec, ToggleFullBackward => |0011|0110|1111|0101|', function (assert) {
  var message = new Message(3, 0, 1, 15);
  assert.equal(message.toString(), '|0011|0110|1111|0101|');
});

QUnit.test('Ch4, Blue, IncDec, ToggleFullForward => |0011|0111|0000|1011|', function (assert) {
  var message = new Message(3, 1, 1, 0);
  assert.equal(message.toString(), '|0011|0111|0000|1011|');
});

QUnit.test('Ch4, Blue, IncDec, ToggleDirection => |0011|0111|0001|1010|', function (assert) {
  var message = new Message(3, 1, 1, 1);
  assert.equal(message.toString(), '|0011|0111|0001|1010|');
});

QUnit.test('Ch4, Blue, IncDec, IncrementNumericalPwm => |0011|0111|0010|1001|', function (assert) {
  var message = new Message(3, 1, 1, 2);
  assert.equal(message.toString(), '|0011|0111|0010|1001|');
});

QUnit.test('Ch4, Blue, IncDec, DecrementNumericalPwm => |0011|0111|0011|1000|', function (assert) {
  var message = new Message(3, 1, 1, 3);
  assert.equal(message.toString(), '|0011|0111|0011|1000|');
});

QUnit.test('Ch4, Blue, IncDec, IncrementPwm => |0011|0111|0100|1111|', function (assert) {
  var message = new Message(3, 1, 1, 4);
  assert.equal(message.toString(), '|0011|0111|0100|1111|');
});

QUnit.test('Ch4, Blue, IncDec, DecrementPwm => |0011|0111|0101|1110|', function (assert) {
  var message = new Message(3, 1, 1, 5);
  assert.equal(message.toString(), '|0011|0111|0101|1110|');
});

QUnit.test('Ch4, Blue, IncDec, FullForward => |0011|0111|0110|1101|', function (assert) {
  var message = new Message(3, 1, 1, 6);
  assert.equal(message.toString(), '|0011|0111|0110|1101|');
});

QUnit.test('Ch4, Blue, IncDec, FullBackward => |0011|0111|0111|1100|', function (assert) {
  var message = new Message(3, 1, 1, 7);
  assert.equal(message.toString(), '|0011|0111|0111|1100|');
});

QUnit.test('Ch4, Blue, IncDec, ToggleFullForwardBackward => |0011|0111|1000|0011|', function (assert) {
  var message = new Message(3, 1, 1, 8);
  assert.equal(message.toString(), '|0011|0111|1000|0011|');
});

QUnit.test('Ch4, Blue, IncDec, ClearC1 => |0011|0111|1001|0010|', function (assert) {
  var message = new Message(3, 1, 1, 9);
  assert.equal(message.toString(), '|0011|0111|1001|0010|');
});

QUnit.test('Ch4, Blue, IncDec, SetC1 => |0011|0111|1010|0001|', function (assert) {
  var message = new Message(3, 1, 1, 10);
  assert.equal(message.toString(), '|0011|0111|1010|0001|');
});

QUnit.test('Ch4, Blue, IncDec, ToggleC1 => |0011|0111|1011|0000|', function (assert) {
  var message = new Message(3, 1, 1, 11);
  assert.equal(message.toString(), '|0011|0111|1011|0000|');
});

QUnit.test('Ch4, Blue, IncDec, ClearC2 => |0011|0111|1100|0111|', function (assert) {
  var message = new Message(3, 1, 1, 12);
  assert.equal(message.toString(), '|0011|0111|1100|0111|');
});

QUnit.test('Ch4, Blue, IncDec, SetC2 => |0011|0111|1101|0110|', function (assert) {
  var message = new Message(3, 1, 1, 13);
  assert.equal(message.toString(), '|0011|0111|1101|0110|');
});

QUnit.test('Ch4, Blue, IncDec, ToggleC2 => |0011|0111|1110|0101|', function (assert) {
  var message = new Message(3, 1, 1, 14);
  assert.equal(message.toString(), '|0011|0111|1110|0101|');
});

QUnit.test('Ch4, Blue, IncDec, ToggleFullBackward => |0011|0111|1111|0100|', function (assert) {
  var message = new Message(3, 1, 1, 15);
  assert.equal(message.toString(), '|0011|0111|1111|0100|');
});

//===========================================================================================

QUnit.test('toBytes 25709', function (assert) {
  var message = new Message();
  message.data = 25709;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 0, 3, 240, 3, 240, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 0, 1, 248, 0, 0, 63, 0, 63, 0, 0, 7, 224, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 16152', function (assert) {
  var message = new Message();
  message.data = 16152;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 7, 224, 7, 224, 7, 224, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 18398', function (assert) {
  var message = new Message();
  message.data = 18398;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 0, 0, 0, 0]);
});
QUnit.test('toBytes 47552', function (assert) {
  var message = new Message();
  message.data = 47552;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 63, 0, 63, 0, 63, 0, 63, 0, 63, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 44862', function (assert) {
  var message = new Message();
  message.data = 44862;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 12338', function (assert) {
  var message = new Message();
  message.data = 12338;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 31, 128, 31, 128, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 15, 192, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 29960', function (assert) {
  var message = new Message();
  message.data = 29960;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 15, 192, 15, 192, 0, 1, 248, 1, 248, 1, 248, 1, 248, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 51263', function (assert) {
  var message = new Message();
  message.data = 51263;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 0, 3, 240, 3, 240, 3, 240, 3, 240, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 24975', function (assert) {
  var message = new Message();
  message.data = 24975;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 25671', function (assert) {
  var message = new Message();
  message.data = 25671;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 0, 3, 240, 3, 240, 3, 240, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 49914', function (assert) {
  var message = new Message();
  message.data = 49914;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 31, 128, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 4341', function (assert) {
  var message = new Message();
  message.data = 4341;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 15068', function (assert) {
  var message = new Message();
  message.data = 15068;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 61030', function (assert) {
  var message = new Message();
  message.data = 61030;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 0, 0, 0, 0]);
});
QUnit.test('toBytes 4492', function (assert) {
  var message = new Message();
  message.data = 4492;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 8555', function (assert) {
  var message = new Message();
  message.data = 8555;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 252, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 55650', function (assert) {
  var message = new Message();
  message.data = 55650;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 15, 192, 0, 1, 248, 0, 0, 63, 0, 63, 0, 63, 0, 63, 0, 0, 7, 224, 7, 224, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 36574', function (assert) {
  var message = new Message();
  message.data = 36574;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 0, 0, 0, 0]);
});
QUnit.test('toBytes 10810', function (assert) {
  var message = new Message();
  message.data = 10810;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 3, 240, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 63746', function (assert) {
  var message = new Message();
  message.data = 63746;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 0, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 0, 0, 63, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 30262', function (assert) {
  var message = new Message();
  message.data = 30262;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 15, 192, 0, 1, 248, 0, 0, 63, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 252, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 11631', function (assert) {
  var message = new Message();
  message.data = 11631;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 0, 0, 0]);
});
QUnit.test('toBytes 13589', function (assert) {
  var message = new Message();
  message.data = 13589;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 31106', function (assert) {
  var message = new Message();
  message.data = 31106;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 0, 0, 63, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 7524', function (assert) {
  var message = new Message();
  message.data = 7524;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 1, 248, 0, 0, 63, 0, 63, 0, 63, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 43808', function (assert) {
  var message = new Message();
  message.data = 43808;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 0, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 1, 248, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 9414', function (assert) {
  var message = new Message();
  message.data = 9414;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 252, 0, 0, 31, 128, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 1, 248, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 63422', function (assert) {
  var message = new Message();
  message.data = 63422;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 5591', function (assert) {
  var message = new Message();
  message.data = 5591;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 57328', function (assert) {
  var message = new Message();
  message.data = 57328;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 31, 128, 0, 3, 240, 0, 0, 126, 0, 0, 15, 192, 0, 1, 248, 0, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 3, 240, 3, 240, 3, 240, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 23339', function (assert) {
  var message = new Message();
  message.data = 23339;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 3, 240, 0, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 0, 1, 248, 1, 248, 0, 0, 63, 0, 63, 0, 0, 7, 224, 0, 0, 252, 0, 0, 0, 0, 0]);
});
QUnit.test('toBytes 23629', function (assert) {
  var message = new Message();
  message.data = 23629;
  assert.deepEqual(message.getBytes(), [252, 0, 0, 0, 0, 7, 224, 7, 224, 0, 0, 252, 0, 252, 0, 0, 31, 128, 0, 3, 240, 0, 0, 126, 0, 126, 0, 126, 0, 126, 0, 0, 15, 192, 15, 192, 15, 192, 0, 1, 248, 0, 0, 63, 0, 63, 0, 0, 7, 224, 0, 0, 0, 0, 0]);
});

