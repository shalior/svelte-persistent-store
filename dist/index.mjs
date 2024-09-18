import {
  derived as derived2,
  get as get2,
  readable as readable2,
  writable as writable2
} from "./chunk.RFCYBOGC.mjs";
import {
  derived,
  get,
  readable,
  writable
} from "./chunk.5YSWGV6Y.mjs";
import "./chunk.7ZQCSUGJ.mjs";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/local.ts
var local_exports = {};
__export(local_exports, {
  derived: () => derived2,
  get: () => get2,
  readable: () => readable2,
  writable: () => writable2
});

// src/session.ts
var session_exports = {};
__export(session_exports, {
  derived: () => derived,
  get: () => get,
  readable: () => readable,
  writable: () => writable
});

// src/index.ts
var src_default = {
  local: local_exports,
  session: session_exports
};
export {
  src_default as default
};
