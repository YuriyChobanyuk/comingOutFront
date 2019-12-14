export function camelToPascal<T>(value: T): T | string {
  return typeof value === "string"
    ? value.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())
    : value;
}
