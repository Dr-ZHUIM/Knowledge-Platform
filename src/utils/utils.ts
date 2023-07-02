export function isUndefinedOrEmptyString(value: string) {
  if (value === undefined || value.length === 0) {
    return true;
  }
  return false;
}

export function handleClassName(validatedArg?: string) {
  return validatedArg ? ` ${validatedArg}` : '';
}
