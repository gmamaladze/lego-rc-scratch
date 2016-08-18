function ScratchExtensionsMock() {
    this.register = function (name, descriptor, ext) {
        //nop
    };
}

var ScratchExtensions = new ScratchExtensionsMock();


QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "hello test", function( assert ) {
  var message = new Message(1, 1, 2, 1);
  assert.equal( message.toString(), "hello!" );  
});