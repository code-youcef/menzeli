"use client";

import { SlidingNumber } from "./sliding-number";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimalSeparator?: string;
  padStart?: boolean;
}

export default function AnimatedNumber({
  value,
  prefix,
  suffix,
  className,
  decimalSeparator = ".",
  padStart = false
}: AnimatedNumberProps) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      {prefix && <span>{prefix}</span>}
      <SlidingNumber 
        value={value} 
        decimalSeparator={decimalSeparator}
        padStart={padStart}
      />
      {suffix && <span>{suffix}</span>}
    </div>
  );
}
