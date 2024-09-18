import {
  generator
} from "./chunk.7ZQCSUGJ.mjs";

// src/local.ts
var storage = typeof window !== "undefined" ? window.localStorage : void 0;
var g = generator(storage);
var readable = g.readable;
var writable = g.writable;
var derived = g.derived;
var get = g.get;

export {
  readable,
  writable,
  derived,
  get
};
