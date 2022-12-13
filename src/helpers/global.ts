export function createEnum<T extends string>(
  ...enumValues: Array<T>
): { [K in T]: K } {
  const spec: any = {};
  for (const value of enumValues) {
    spec[value] = value;
  }
  return Object.freeze(spec);
}
