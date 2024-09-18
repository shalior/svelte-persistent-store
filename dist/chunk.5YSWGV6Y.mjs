import {
  generator
} from "./chunk.7ZQCSUGJ.mjs";

// src/session.ts
var storage = typeof window !== "undefined" ? window.sessionStorage : void 0;
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
