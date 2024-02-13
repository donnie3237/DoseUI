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

// lib/components/button.ts
var button_exports = {};
__export(button_exports, {
  button: () => button
});
module.exports = __toCommonJS(button_exports);
var button = {
  ".d-btn": {
    padding: "10px 30px",
    display: "flex",
    backgroundColor: "#1f1f1f",
    borderRadius: "7px",
    color: "white",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-danger": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "7px",
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-green": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "7px",
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-blue": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "7px",
    color: "white",
    backgroundColor: "blue",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-yellow": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "7px",
    color: "white",
    backgroundColor: "#e6ac00",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-c": {
    padding: "10px 30px",
    display: "flex",
    backgroundColor: "#1f1f1f",
    borderRadius: "22px",
    color: "white",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-c-yellow": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "22px",
    color: "white",
    backgroundColor: "#e6ac00",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-c-danger": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "22px",
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-c-green": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "22px",
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-c-blue": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "22px",
    color: "white",
    backgroundColor: "blue",
    "&:hover": {
      opacity: "0.9"
    }
  },
  ".d-btn-g": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "5px",
    color: "#1f1f1f",
    border: "2px solid #1f1f1f",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "#1f1f1f",
      transition: "all 0.3s"
    }
  },
  ".d-btn-g-green": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "5px",
    color: "green",
    border: "2px solid green",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "green",
      transition: "all 0.3s"
    }
  },
  ".d-btn-g-danger": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "5px",
    color: "red",
    border: "2px solid red",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "red",
      transition: "all 0.3s"
    }
  },
  ".d-btn-g-yellow": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "5px",
    color: "#e6ac00",
    border: "2px solid #e6ac00",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "#e6ac00",
      transition: "all 0.3s"
    }
  },
  ".d-btn-g-blue": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "5px",
    color: "blue",
    border: "2px solid blue",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "blue",
      transition: "all 0.3s"
    }
  },
  ".d-btn-gc-blue": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "25px",
    color: "blue",
    border: "2px solid blue",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "blue",
      transition: "all 0.3s"
    }
  },
  ".d-btn-gc-danger": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "25px",
    color: "red",
    border: "2px solid red",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "red",
      transition: "all 0.3s"
    }
  },
  ".d-btn-gc-green": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "25px",
    color: "green",
    border: "2px solid green",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "green",
      transition: "all 0.3s"
    }
  },
  ".d-btn-gc-yellow": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "25px",
    color: "#e6ac00",
    border: "2px solid #e6ac00",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "#e6ac00",
      transition: "all 0.3s"
    }
  },
  ".d-btn-gc": {
    padding: "10px 30px",
    display: "flex",
    borderRadius: "25px",
    color: "#1f1f1f",
    border: "2px solid #1f1f1f",
    "&:hover": {
      opacity: "0.9",
      color: "white",
      backgroundColor: "#1f1f1f",
      transition: "all 0.3s"
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  button
});
