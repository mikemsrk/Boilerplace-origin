var TestUtils = require('react-addons').TestUtils;
var AuthStore = require('../app/stores/AuthStore');

describe("AuthStore", function() {

  it("should be an object", function() {
    expect(typeof AuthStore).toBe('object');
  });

  it("emit should be a function", function() {
    expect(typeof AuthStore.emitChange).toBe('function');
  });

});