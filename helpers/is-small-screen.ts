import { isBrowser } from "./is-browser";

export function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth < 768;
}
