// lib/components/snap.ts
var snap = {
  ".d-snap": {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    whiteSpace: "nowrap",
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
    scrollSnapAlign: "start",
    backgroundColor: "#3498db"
  }
};
export {
  snap
};
