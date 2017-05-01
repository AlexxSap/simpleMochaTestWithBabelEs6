'use strict';

function assert(value1, value2)
{
  if(value1 === value2)
  {
    return 0;
  }
  return 1;
};

var currentAll = 0;
var currentFail = 0;
var currentPass = 0;

export function runTest(name, actual, expected)
{
  const result = assert(actual, expected);
  if(result === 0)
  {
    console.log("test " + name + " done");
    currentPass++;
  }
  else
  {
    console.log("test " + name + " fail!");
    currentFail++;
  }
  currentAll++;
};

var currentName = '';

export function startTests(name)
{
  currentAll = 0;
  currentFail = 0;
  currentPass = 0;
  currentName = name;
  console.log('start tests ' + name);
}

export function endTests()
{
  globalAll += currentAll;
  globalFail += currentFail;
  globalPass += currentPass;
  console.log("test " + currentName +
  " pass="+ currentPass +
  " fail=" + currentFail);
}

var globalAll = 0;
var globalFail = 0;
var globalPass = 0;

export function startGlobalTests()
{
  globalAll = 0;
  globalFail = 0;
  globalPass = 0;
  console.log('start tests');
}

export function endGlobalTests()
{
  console.log("all test=" + globalAll +
  " pass="+ globalPass + 
  " fail=" + globalFail);
}
