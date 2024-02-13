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

// lib/components/slider.ts
var slider_exports = {};
__export(slider_exports, {
  slider: () => slider
});
module.exports = __toCommonJS(slider_exports);
var slider = {
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" }
  },
  ".d-slider": {
    width: "calc(100% - 40px)",
    display: "flex",
    overflowX: "scroll",
    margin: "20px 0",
    marginLeft: "20px",
    padding: "0 20px",
    paddingBottom: "20px",
    "&::-webkit-scrollbar": {
      height: "10px",
      borderRadius: "5px",
      width: "0"
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#aaaaaa",
      borderRadius: "5px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgb(0, 0, 0)",
      borderRadius: "5px"
    }
  },
  ".d-slider-title": {
    width: "100%",
    fontSize: "1.5em",
    borderBottom: "2px solid rgb(0, 0, 0)",
    paddingBottom: "10px",
    marginTop: "30px",
    paddingLeft: "20px",
    fontWeight: "bold"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  slider
});
