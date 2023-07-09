export function getArticles(menulists: RouteT[]) {
  let result = 0;
  menulists.forEach((list) => {
    list.children && list.children.forEach(() => result++);
  });
  return result;
}
