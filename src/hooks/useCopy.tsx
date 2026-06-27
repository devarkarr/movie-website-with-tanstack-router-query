/** @format */

import React from "react";

const useCopy = () => {
  const [copied, setCopied] = React.useState(false);

  const onCopy = (text: string) => {
    // web api
    navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return { copied, onCopy } as const;
};

export default useCopy;
