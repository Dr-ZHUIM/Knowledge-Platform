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
    label: "border",
    children: [
      {
        label: "transparentBorder",
        path: "/transparentBorder",
        element: <Pages.TransparentBorder />,
      },
      {
        label: "multiBorder",
        path: "/multiBorder",
        element: <Pages.MultiBorder />,
      },
    ],
  },
];

export default routes;

