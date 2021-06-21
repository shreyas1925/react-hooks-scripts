import React, { useEffect } from "react";

const useCount = (count) => {
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);
};

export default useCount;
