"use client";

import { RouterConfig } from "@/core/constants/router";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
import Link from "next/link";
import TableAction from "../components/TableAction";
import listApi from "@/shared/services/api/list.api";
import { useEffect, useState } from "react";

async function getTodoList() {
  const response = await listApi.getList();
  if (response.status === 200) {
    return response?.data?.todos;
  }

  return [];
}

const ListPage: React.FC<{}> = () => {
  const [list, setList] = useState([]);

  const breadcrumbs: any = [
    {
      title: "Lists",
      url: RouterConfig.LIST,
    },
  ];

  const getList = async () => {
    const res = await getTodoList();
    setList(res);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="p-4 pt-2">
      <div className="flex items-center justify-between">
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />
        <Link
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          href={RouterConfig.LIST_CREATE}
        >
          Create
        </Link>
      </div>

      <div className="relative overflow-x-auto pt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Todo
              </th>
              <th scope="col" className="px-6 py-3 w-20">
                Status
              </th>
              <th scope="col" className="px-6 py-3 w-40">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item: any, key: number) => (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.todo}
                </th>
                <td className="px-6 py-4">
                  {item?.completed ? "Done" : "Pending"}
                </td>
                <td className="px-6 py-4">
                  <TableAction setList={setList} item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListPage;
