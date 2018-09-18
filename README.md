To reproduce the problem:
1. `npm install`
2. `polymer build`
3. `cd build/esm-bundled`
4. `serve`
5. Open in Chrome


If you instead do `polyserve --open`, the app works as it should.

If you change to `"bundle": false` in `polymer.json`, the built version works as it should

If you downgrade using `npm i @polymer/lit-element@0.6.0-dev.5 lit-html@0.11.0`, the built version works as it should
