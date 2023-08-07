type ValidObject = Record<PropertyKey, any> | any[] | null;

export function deepClone(item: ValidObject): ValidObject {
  // 验证传入的对象是否为 null 或者 undefined
  let result: ValidObject = null;
  if (!item) return result;
  result = item instanceof Array ? [] : {};
  for (const [key, value] of Object.entries(item)) {
    if (result instanceof Array) {
      result[Number(key)] =
        typeof value === 'object' ? deepClone(value) : value;
    } else {
      result[key] = typeof value === 'object' ? deepClone(value) : value;
    }
  }
  return result;
}
