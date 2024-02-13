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

// lib/components/blob.ts
var blob_exports = {};
__export(blob_exports, {
  blob: () => blob
});
module.exports = __toCommonJS(blob_exports);
var blob = {
  ".d-blob1": {
    width: "150px",
    height: "150px",
    backgroundColor: "#3498db",
    margin: "20px",
    borderRadius: "60% 50% 70% 50% / 60% 90% 60% 70%"
  },
  ".d-blob2": {
    width: "150px",
    height: "150px",
    backgroundColor: "#3498db",
    margin: "20px",
    borderRadius: "80% 30% 90% 60% / 60% 60% 60% 70%"
  },
  ".d-blob3": {
    width: "150px",
    height: "150px",
    backgroundColor: "#3498db",
    margin: "20px",
    borderRadius: "90% 80% 40% 30% / 60% 55% 60% 70%"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  blob
});
