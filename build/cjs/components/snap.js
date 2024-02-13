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

// lib/components/snap.ts
var snap_exports = {};
__export(snap_exports, {
  snap: () => snap
});
module.exports = __toCommonJS(snap_exports);
var snap = {
  ".d-snap": {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    /* กำหนดให้ scroll ตรงขึ้นแนวนอน */
    whiteSpace: "nowrap",
    /* ห้ามขึ้นบรรทัดใหม่ */
    height: "100vh",
    "&::-webkit-scrollbar": {
      height: "0px",
      width: "0"
    }
  },
  ".d-snap-items": {
    width: "100%",
    height: "100%",
    flexShrink: "0",
    /* ไม่ให้ย่อขนาดเมื่อเลื่อน */
    scrollSnapAlign: "start",
    /* ให้ตรงขึ้นที่จุดเริ่มต้นของแต่ละ Item */
    backgroundColor: "#3498db"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  snap
});
