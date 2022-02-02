import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

let options = {
  damping: 0.1,
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
};

export default SmoothScroll;
