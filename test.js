'use strict';

// var assert = require('assert');
// const {describe, it} = require('mocha');

// import sum from "./index";

describe("sum", function()
{
  it('simple1', function()
  {
    assert.equal(sum(1, 3), 4);
  });
  it('simple2', function()
  {
    assert.equal(sum(6, 0), 6);
  });

});
