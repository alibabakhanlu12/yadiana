interface IRoute {
  path?: string;
  icon?: string;
  name: string;
  routes?: IRoute[];
  checkActive?(pathname: String, route: IRoute): boolean;
  exact?: boolean;
}

export function routeIsActive(pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route);
  }

  return route?.exact
    ? pathname == route?.path
    : route?.path
    ? pathname.indexOf(route.path) === 0
    : false;
}

const routes: IRoute[] = [
  {
    path: "/admin/dashboard/", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "داشبورد", // name that appear in Sidebar
    exact: true,
  },
  {
    path: "/admin/dashboard/myprofile",
    icon: "FormsIcon",
    name: "پروفایل من",
  },
  {
    path: "/admin/dashboard/playlists",
    icon: "CardsIcon",
    name: "لیست پخش ها",
  },
  {
    path: "/admin/dashboard/channels",
    icon: "ChartsIcon",
    name: "لیست کانال ها",
  },
  {
    path: "/admin/dashboard/usermanagement",
    icon: "ButtonsIcon",
    name: "مدریت کاربران",
  },
  {
    path: "/admin/dashboard/rolemanagement",
    icon: "ModalsIcon",
    name: "مدریت نقش ها",
  },
  {
    path: "/admin/dashboard/universitymanagement",
    icon: "TablesIcon",
    name: "مدریت دانشگاه ها",
  },
  {
    path: "/admin/dashboard/commentmanagement",
    icon: "PagesIcon",
    name: "مدریت نظرات",
  
  },
];

export type { IRoute };
export default routes;
