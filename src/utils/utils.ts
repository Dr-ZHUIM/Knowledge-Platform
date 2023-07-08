export function isUndefinedOrEmptyString(value: string) {
  if (value === undefined || value.length === 0) {
    return true;
  }
  return false;
}

export function handleClassName(validatedArg?: string) {
  return validatedArg ? ` ${validatedArg}` : '';
}

export function handlePage(page: string) {
  const pagePath = page.split('/');
  return {
    currentRoutes: ['', `/${pagePath[1]}/${pagePath[2]}`],
    active: pagePath[1] as Layer,
  };
}
