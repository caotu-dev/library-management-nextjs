import CommonUtils from "@/shared/utils/common.util";
import { RouterConfig } from "./router";
import { Subjects } from "./subject";

const subjectMenu = Subjects.map((sj) => {
  const slug = CommonUtils.toSlug(sj);
  return {
    title: sj,
    url: `${RouterConfig.SUBJECT}/${slug}`,
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
    title: "My Todo-Read",
    url: RouterConfig.LIST,
    icon: "",
    authentication: false,
  },
  {
    title: "Forums",
    url: RouterConfig.FORUM,
    icon: "",
    authentication: false,
  },
];
