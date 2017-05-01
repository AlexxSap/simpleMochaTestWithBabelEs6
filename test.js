'use strict';

import {sum} from "./index";
import {Test} from "./myTest";

let $ = Test();

$.startGlobalTests();
$.startTests('sum');
$.runTest('simple1', sum(1, 3), 4);
$.runTest('simple2', sum(1, 4), 4);
$.runTest('simple3', sum(6, 0), 6);
$.endTests();
$.endGlobalTests();
