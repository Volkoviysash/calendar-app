import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  Event = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    element: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.Event,
    element: Event,
  },
];
