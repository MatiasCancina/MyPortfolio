import { useState, useMemo } from "react";

export const useCaroussel = (arr = []) => {
  const [position, setPosition] = useState(0);

  const memoizedArray = useMemo(() => arr, [arr]);

  const onClickNext = () => {
    if (position < memoizedArray.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const onClickPrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(memoizedArray.length - 1);
    }
  };

  return {
    position,
    onClickNext,
    onClickPrev,
  };
};
