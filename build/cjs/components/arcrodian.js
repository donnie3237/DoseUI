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

// lib/components/arcrodian.ts
var arcrodian_exports = {};
__export(arcrodian_exports, {
  accrodian: () => accrodian
});
module.exports = __toCommonJS(arcrodian_exports);
var accrodian = {
  ".d-accrodian": {
    transition: "all 0.7s",
    marginLeft: "20px",
    paddingBottom: "10px",
    borderLeft: "2px solid #0b0b0b",
    paddingLeft: "10px"
  },
  ".d-accrodian-head": {
    fontSize: "1.4em",
    cursor: "pointer",
    fontWeight: "700"
  },
  ".d-accrodian-content": {
    paddingLeft: "20px",
    paddingTop: "10px",
    maxWidth: "calc(100% - 40px)",
    textAlign: "justify"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  accrodian
});
