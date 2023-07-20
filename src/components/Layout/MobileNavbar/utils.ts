type MenuItemBasic = {
  label: string;
  isLayerTitle: boolean;
};

type MenuItem = {
  label: PostType;
  layerLabel: Layer;
  isLayerTitle: false;
};

type MenuCategory = {
  label: Layer;
  isLayerTitle: true;
};

type MenuItemTransfrom<T extends MenuItemBasic> = T['isLayerTitle'] extends true
  ? MenuCategory
  : MenuItem;

type MenuItemOutput = (
  | MenuItemTransfrom<MenuCategory>
  | MenuItemTransfrom<MenuItem>
)[];

export function solveMaskMenu(layers: [Layer, Record<string, RouteT[]>][]) {
  const result: MenuItemOutput = [];
  layers.forEach(([layerLabel, layer]) => {
    result.push({ label: layerLabel, isLayerTitle: true });
    Object.keys(layer).map((category) =>
      result.push({
        label: category as PostType,
        isLayerTitle: false,
        layerLabel,
      }),
    );
  });
  console.log('result', result);
  return result;
}
