"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7ZQCSUGJjs = require('./chunk.7ZQCSUGJ.js');

// src/local.ts
var storage = typeof window !== "undefined" ? window.localStorage : void 0;
var g = _chunk7ZQCSUGJjs.generator.call(void 0, storage);
var readable = g.readable;
var writable = g.writable;
var derived = g.derived;
var get = g.get;






exports.readable = readable; exports.writable = writable; exports.derived = derived; exports.get = get;
