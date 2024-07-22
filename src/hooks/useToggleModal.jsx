import { useState } from "react";

function useToggle(initalState = false) {
  const [state, setState] = useState(initalState);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
}