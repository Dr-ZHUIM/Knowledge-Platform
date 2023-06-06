import { ReactNode } from "react";
import * as Pages from "@/pages";

export declare type RouteT = {
  path: string;
  label: string;
  element?: ReactNode;
  children?: RouteT[];
};

const routes: RouteT[] = [
  {
    path: "/border",
    label: "边框与背景",
    children: [
      {
        label: "透明边框",
        path: "/transparentBorder",
        element: <Pages.TransparentBorder />,
      },
      {
        label: "多重边框",
        path: "/multiBorder",
        element: <Pages.MultiBorder />,
      },
      {
        label: "条纹背景",
        path: "/stripesBackground",
        element: <Pages.StripesBackground />,
      },
    ],
  },
];

export default routes;

