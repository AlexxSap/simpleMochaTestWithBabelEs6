var assert = require('assert');
import {sum} from "./index";

describe("sum", function()
{
  it('simple1', function()
  {
    assert.equal(sum(1, 3), 4);
  });

});
