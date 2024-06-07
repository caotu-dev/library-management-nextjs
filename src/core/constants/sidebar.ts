import { RouterConfig } from "./router";
import { Subjects } from "./subject";

const subjectMenu = Subjects.map((sj) => {
  return {
    title: sj,
    url: RouterConfig.SUBJECT + `?name=${sj}`,
  };
});

export const SidebarMenu = [
  {
    title: "Home",
    url: RouterConfig.HOME,
    icon: "",
    authentication: false,
  },
  {
    title: "Subjects",
    url: "",
    icon: "",
    isExpand: false,
    children: subjectMenu,
    authentication: false,
  },
  {
    title: "My List",
    url: RouterConfig.LIST,
    icon: "",
    authentication: true,
  },
];
