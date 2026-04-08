import { useRef, useState } from "react";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

export function useTurnstile() {
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  const resetTurnstile = () => {
    setTurnstileToken("");
    turnstileRef.current?.reset();
  };

  return {
    turnstileRef,
    turnstileToken,
    setTurnstileToken,
    resetTurnstile,
  };
}
