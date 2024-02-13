"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/components/text.ts
var text_exports = {};
__export(text_exports, {
  text: () => text
});
module.exports = __toCommonJS(text_exports);
var text = {
  ".d-text-fantasy": {
    color: "transparent !important",
    backgroundImage: "linear-gradient(71.78deg,#c23a00 27.87%,rgba(118, 41, 41, 0.72) 52.56%,#0292ba 74.58%)",
    backgroundClip: "text !important",
    fontWeight: "900 !important"
  },
  ".d-text-dark": {
    backgroundImage: "linear-gradient(71.78deg,#121111 27.87%,rgba(64, 64, 64, 0.72) 52.56%,#404040 74.58%)",
    color: "transparent !important",
    backgroundClip: "text !important",
    fontWeight: "900 !important"
  },
  ".d-text-warm": {
    backgroundImage: "linear-gradient(71.78deg,#ac0000 27.87%,rgba(105, 0, 0) 52.56%,#6b0049 74.58%)",
    color: "transparent !important",
    backgroundClip: "text !important",
    fontWeight: "900 !important"
  },
  ".d-text-green": {
    backgroundImage: "linear-gradient(71.78deg,#00811c 27.87%,rgba(1, 139, 8, 0.8) 52.56%,#5fa005 74.58%)",
    color: "transparent !important",
    backgroundClip: "text !important",
    fontWeight: "900 !important"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  text
});
