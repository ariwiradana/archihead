"use client";
import { usePathname } from "next/navigation";
import { useEffect, useTransition } from "react";
import NProgress from "nprogress";

export default function PageLoader() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      NProgress.start();
    });

    if (!isPending) {
      NProgress.done();
    }
  }, [pathname, isPending]);

  return null;
}
