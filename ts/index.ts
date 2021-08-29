import type { PluginBuild, PartialMessage, Loader } from 'esbuild';
import ffi from 'ffi-napi';

const lib = ffi.Library('target/debug/libwasmpack_wrapper', {
  'double_input': [ 'int', [ 'int' ] ]
});

const input = 4;
const output = lib.double_input(input);
console.log(input + " * 2 = " + output);

