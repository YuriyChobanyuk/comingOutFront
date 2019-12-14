export const adminRoutes = [
  {
    name: "Dashboard",
    path: "/admin"
  },
  {
    name: "Subjects",
    path: "/admin/subjects"
  },
  {
    name: "Controls",
    path: "/admin/controls"
  }
];

export const publicRoutes = [{
  name: "Home",
  path: '/'
},
{
  name: "About",
  path: "/about"
}]
export const userRoutes = [...publicRoutes, {
  name: "Profile",
  path: "/user"
}];

export const routesList = {
  adminRoutes,
  publicRoutes,
  userRoutes
};
