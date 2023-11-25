"use client";

import { isBrowser } from "@/helpers/is-browser";
import { isSmallScreen } from "@/helpers/is-small-screen";
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextProps {
  isCollapsed: boolean;
  setCollapsed: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps,
);

export const SidebarProvider: FC<PropsWithChildren> = function ({ children }) {
  const location = isBrowser() ? window.location.pathname : "/";
  const storedIsCollapsed = isBrowser()
    ? localStorage.getItem("isSidebarCollapsed") === "true"
    : false;

  const [isCollapsed, setCollapsed] = useState(storedIsCollapsed);

  // Close Sidebar on page change on mobile
  useEffect(() => {
    if (isSmallScreen()) {
      setCollapsed(true);
    }
  }, [location]);

  // Close Sidebar on mobile tap inside main content
  useEffect(() => {
    function handleMobileTapInsideMain(event: MouseEvent) {
      const main = document.querySelector("#main-content");
      const isClickInsideMain = main?.contains(event.target as Node);

      if (isSmallScreen() && isClickInsideMain) {
        setCollapsed(true);
      }
    }

    document.addEventListener("mousedown", handleMobileTapInsideMain);

    return () => {
      document.removeEventListener("mousedown", handleMobileTapInsideMain);
    };
  }, []);

  // Update local storage when collapsed state changed
  useEffect(() => {
    localStorage.setItem("isSidebarCollapsed", isCollapsed ? "true" : "false");
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export function useSidebarContext(): SidebarContextProps {
  const context = useContext(SidebarContext);

  if (typeof context === "undefined") {
    throw new Error(
      "useSidebarContext should be used within the SidebarContext provider!",
    );
  }

  return context;
}
