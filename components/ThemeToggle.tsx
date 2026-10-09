"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "aip-theme-inverted";

export default function ThemeToggle() {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) === "true";
    document.documentElement.classList.toggle("aip-inverted", saved);
    setInverted(saved);
  }, []);

  function toggleTheme() {
    const next = !inverted;
    document.documentElement.classList.toggle("aip-inverted", next);
    window.localStorage.setItem(THEME_KEY, String(next));
    setInverted(next);
  }

  return (
    <button
      type="button"
      aria-label={inverted ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
      aria-pressed={inverted}
      className="aip-theme-toggle"
      onClick={toggleTheme}
    />
  );
}
