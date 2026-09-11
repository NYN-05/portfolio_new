import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const EASE = [0.22, 1, 0.36, 1];

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
