import * as svelte_store from 'svelte/store';

declare const readable: <T>(key: string, value: T, start: (set: (value: T) => void) => void | (() => void)) => svelte_store.Readable<T>;
declare const writable: <T>(key: string, value: T, start?: (set: (value: T) => void) => void | (() => void)) => svelte_store.Writable<T>;
declare const derived: <S extends svelte_store.Readable<any> | [svelte_store.Readable<any>, ...svelte_store.Readable<any>[]], U>(key: string, stores: S, fn: ((values: S extends svelte_store.Readable<infer U_1> ? U_1 : { [K in keyof S]: S[K] extends svelte_store.Readable<infer U_2> ? U_2 : never; }) => U) | ((values: S extends svelte_store.Readable<infer U_1> ? U_1 : { [K in keyof S]: S[K] extends svelte_store.Readable<infer U_2> ? U_2 : never; }, set: (value: U) => void) => void | (() => void)), initial_value?: U) => svelte_store.Readable<U>;
declare const get: typeof svelte_store.get;

declare const session_readable: typeof readable;
declare const session_writable: typeof writable;
declare const session_derived: typeof derived;
declare const session_get: typeof get;
declare namespace session {
  export {
    session_readable as readable,
    session_writable as writable,
    session_derived as derived,
    session_get as get,
  };
}

export { derived as d, get as g, readable as r, session as s, writable as w };
