"use client";

import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Inconsolata, Inter, Lora } from "next/font/google";

const ThemeContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<Dispatch<ThemeAction> | null>(null);

const inter = Inter({ subsets: ["latin"], display: "swap" });
const lora = Lora({ subsets: ["latin"], display: "swap" });
const inconsolata = Inconsolata({ subsets: ["latin"], display: "swap" });

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(themeReducer, initialState);

  const font =
    state.style === "inter"
      ? inter
      : state.style === "lora"
      ? lora
      : inconsolata;

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <body className={font.className}>{children}</body>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);

  if (context === null) {
    throw new Error("useThemeDispatch must be used within a ThemeProvider");
  }

  return context;
}

type ThemeAction = {
  type: "change";
  payload: "inter" | "lora" | "inconsolata";
};

function themeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case "change": {
      return {
        ...state,
        style: action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export interface ThemeState {
  style: "inter" | "lora" | "inconsolata";
}

const initialState: ThemeState = {
  style: "inter",
};
