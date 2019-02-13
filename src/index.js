import { useState, useLayoutEffect } from "react";

function useOptimizedResize(...userCallbacks) {
  const [running, setRunning] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const callBackWidth = ({ innerWidth }) => setWidth(innerWidth);
  const callBackHeight = ({ innerHeight }) => setHeight(innerHeight);

  const callbacks = [callBackWidth, callBackHeight, ...userCallbacks];

  useLayoutEffect(() => {
    // fired on resize event
    let timer = null;
    function resize() {
      if (!running) {
        setRunning(true);

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallbacks);
        } else {
          timer = setTimeout(runCallbacks, 66);
        }
      }
    }

    // run the callbacks
    function runCallbacks() {
      const { innerHeight, innerWidth } = window;
      callbacks.forEach(callback => callback({ innerHeight, innerWidth }));
      setRunning(false);
    }

    window.addEventListener("resize", resize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  });

  return [width, height];
}

export default useOptimizedResize;
