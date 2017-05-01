'use strict';

function assert(value1, value2)
{
  if(value1 === value2)
  {
    return 0;
  }
  return 1;
};

var current = 0;

export function runTest(name, actual, expected)
{
  const result = assert(actual, expected);
  if(result === 0)
  {
    console.log("test " + name + " done");
  }
  else
  {
    console.log("test " + name + " fail!");
  }
  current += result;
};

export function endTests()
{
  console.log("test done with "+ current + " errors");
}
