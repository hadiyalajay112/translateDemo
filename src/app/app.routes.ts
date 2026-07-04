import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "folder",
    loadComponent: () =>
      import("./folder/folder.page").then((m) => m.FolderPage),
  },
  {
    path: "",
    redirectTo: "folder",
    pathMatch: "full",
  },
];