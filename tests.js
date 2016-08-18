function ScratchExtensionsMock() {
    this.register = function (name, descriptor, ext) {
        //nop
    };
}

var ScratchExtensions = new ScratchExtensionsMock();


QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});