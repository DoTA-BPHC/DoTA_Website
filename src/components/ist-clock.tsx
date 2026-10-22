"use client";

import { useEffect, useState } from "react";

export function IstClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    });
    function updateTime() {
      setTime(formatter.format(new Date()));
    }

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="font-mono text-mono-xs tabular-nums uppercase">{time} IST</span>;
}
