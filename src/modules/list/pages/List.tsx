"use client";

import { RouterConfig } from "@/core/constants/router";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
// import Link from "next/link";

const ListPage: React.FC<{}> = () => {
  const breadcrumbs: any = [
    {
      title: "Lists",
      url: RouterConfig.LIST,
    },
  ];
  return (
    <section className="p-4 pt-2">
      <div className="flex items-center justify-between">
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />
        {/* <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href={RouterConfig.LIST_CREATE}
        >
          Create
        </Link> */}
      </div>

      <div className="relative overflow-x-auto pt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListPage;
