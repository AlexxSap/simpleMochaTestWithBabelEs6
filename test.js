'use strict';

//
// const {describe, it} = require('mocha');
// const {expect} = require('chai');

import {sum} from "./index";
import {runTest, startGlobalTests, endGlobalTests, startTests, endTests} from "./myTest";

startGlobalTests();
startTests('sum');
runTest('simple1', sum(1, 3), 4);
runTest('simple2', sum(1, 4), 4);
runTest('simple3', sum(6, 0), 6);
endTests();
endGlobalTests();


//
// describe("sum", function()
// {
//   it('simple1', function()
//   {
//     assert.equal(module.exports.sum(1, 3), 4);
//   });
//   it('simple2', function()
//   {
//     assert.equal(module.exports.sum(6, 0), 6);
//   });
//
// });
