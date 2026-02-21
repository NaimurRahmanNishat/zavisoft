"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const NavigationLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const prevPathname = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => setLoading(true), 0);

      const hideTimer = setTimeout(() => setLoading(false), 800);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        clearTimeout(hideTimer);
      };
    }
  }, [pathname]);

  if (!loading) return null;
  return <LoadingScreen />;
};

export default NavigationLoader;