import { useCallback } from "react";
import { debounce } from "lodash";

function useDebounce(callback: (value: string) => void, delay = 500) {
  const debouncedFn = useCallback(
    debounce((value: string) => {
      callback(value);
    }, delay),
    [callback, delay]
  );

  return debouncedFn;
}

export default useDebounce;
