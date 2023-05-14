"use client";

import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Inconsolata, Inter, Lora } from "next/font/google";
import classnames from "classnames";

const ThemeContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<Dispatch<ThemeAction> | null>(null);

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const lora = Lora({ subsets: ["latin"], display: "swap" });
export const inconsolata = Inconsolata({ subsets: ["latin"], display: "swap" });

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

  const darkStyle = state.darkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <html lang="en" className={classnames(font.className, darkStyle)}>
          {children}
        </html>
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

type ThemeAction =
  | {
      type: "CHANGE";
      payload: "inter" | "lora" | "inconsolata";
    }
  | {
      type: "TOGGLE_DARK_MODE";
      payload: boolean;
    };

function themeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        style: action.payload,
      };
    }
    case "TOGGLE_DARK_MODE": {
      return {
        ...state,
        darkMode: action.payload,
      };
    }
    default: {
      throw Error(`Invalid action: ${JSON.stringify(action)}`);
    }
  }
}

export interface ThemeState {
  style: "inter" | "lora" | "inconsolata";
  darkMode: boolean;
}

const initialState: ThemeState = {
  style: "inter",
  darkMode: false,
};
