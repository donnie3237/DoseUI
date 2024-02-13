"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// lib/plugin.ts
var import_plugin = __toESM(require("tailwindcss/plugin"));

// lib/components/button.ts
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

// lib/Layout/Layout.ts
var Layout = {
  ".d-flex-center": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  ".d-flex-between": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

// lib/components/arcrodian.ts
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

// lib/components/loading.ts
var loading = {
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" }
  },
  ".d-loading": {
    border: "8px solid #3498db",
    borderTop: "8px solid transparent",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite"
  }
};

// lib/components/slider.ts
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

// lib/components/text.ts
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

// lib/components/blob.ts
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

// lib/components/parallax.ts
var parallax = {
  ".d-parallax": {
    minHeight: "200px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

// lib/components/snap.ts
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

// lib/plugin.ts
var components = Object.assign(
  {},
  button,
  Layout,
  accrodian,
  loading,
  slider,
  text,
  blob,
  parallax,
  snap
);
module.exports = (0, import_plugin.default)(
  function({ addComponents }) {
    addComponents(components);
  }
);
