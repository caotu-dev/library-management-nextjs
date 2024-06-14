"use client";

import { RouterConfig } from "@/core/constants/router";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
import CreateListForm from "../components/CreateListForm";


const ListCreatePage: React.FC<{}> = () => {
  const breadcrumbs: any = [
    {
      title: "Lists",
      url: RouterConfig.LIST,
    },
    {
      title: "Create",
      url: null,
    },
  ];

  return (
    <section className="p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <div className="flex pt-2">
        <CreateListForm isComponent={false} />
      </div>
    </section>
  );
};

export default ListCreatePage;
