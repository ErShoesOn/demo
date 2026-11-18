export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
  return undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: { path?: string; maxAge?: number } = {}
) {
  if (typeof document === "undefined") return;
  let cookieString = `${name}=${value}`;
  if (options.path) cookieString += `; path=${options.path}`;
  if (options.maxAge) cookieString += `; max-age=${options.maxAge}`;
  document.cookie = cookieString;
}
