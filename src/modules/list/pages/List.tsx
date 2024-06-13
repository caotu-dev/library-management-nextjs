"use client";

import { RouterConfig } from "@/core/constants/router";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
import Link from "next/link";
import listApi from "@/shared/services/api/list.api";
import { useQuery, keepPreviousData, QueryClient, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import TableAction from "../components/TableAction";
import TableSkeleton from "../components/TableSkeleton";
import PaginationComponent from "@/shared/components/pagination/Pagination";
import CommonUtils from "@/shared/utils/common.util";
import { useSearchParams } from "next/navigation";

const ListPage: React.FC<{}> = () => {
  const limit = 10;
  const searchParams = useSearchParams();
  const currentPage: number = Number(searchParams?.get("page")) ?? 1;
  const [page, setPage] = useState(currentPage);

  const initialData = {
    "todos": [
      {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true,
        "userId": 26
      },
    ],
    "total": 150,
    "skip": 0,
    "limit": 30
  }

  const breadcrumbs: any = [
    {
      title: "Lists",
      url: RouterConfig.LIST,
    },
  ];

  const getTodoList = () => {
    const request = {
      limit: limit,
      skip: page * limit,
    };
    const response = listApi.getList(request as any);
    return response;
  };

  const useQueryTodos = () => {
    const query: any = useQuery({
      queryKey: ["todos", page],
      queryFn: getTodoList,
      initialData: {
        status: 200,
        data: initialData
      },
      // initialData: () => {
      //    Use a todo from the 'todos' query as the initial data for this todo query
      //   return queryClient.getQueryData(['todos'])
      // },
      // placeholderData: keepPreviousData,
    });
    const total = query?.data?.data?.total;
    const todolist = query?.data?.data?.todos;
    const pageCount = Math.ceil(total / limit);
    return {
      ...query,
      todolist,
      total,
      pageCount,
    };
  };

  // Queries
  const { todolist, isLoading, pageCount, data } = useQueryTodos();

  const handlePageClick = (e: any) => {
    const pageIdx = Number(e?.selected) ?? 0;
    const currentPage = pageIdx + 1;
    CommonUtils.updateUrlParams(RouterConfig.LIST + "?page=" + currentPage);
    setPage(currentPage);
  };

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
            { (
              data?.data?.todos?.map((item: any, key: number) => (
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
                    <TableAction page={page} item={item} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {todolist?.length > 0 && (
          <div className="mt-4 flex justify-center w-full">
            <PaginationComponent
              handlePageClick={handlePageClick}
              total={pageCount}
              activePage={page}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ListPage;
