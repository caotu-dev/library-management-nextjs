"use client";

import { RouterConfig } from "@/core/constants/router";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
import PostItem from "../components/PostItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import postApi from "@/shared/services/api/post.api";
import React from "react";
import LoadingIcon from "@/shared/components/icons/Loading";

const ForumPage: React.FC<{}> = () => {
  const limit = 20;

  const breadcrumbs: any = [
    {
      title: "Forum",
      url: RouterConfig.LIST,
    },
  ];

  const fetchPostList = async ({
    pageParam,
  }: {
    pageParam: number | undefined;
  }) => {
    if (!pageParam) return;
    const request = {
      limit: limit,
      skip: pageParam * limit,
    };
    const response = await postApi.getList(request as any);
    return response;
  };

  const usePostInfiniteQuery = () => {
    const query = useInfiniteQuery({
      queryKey: ["infinitePost"],
      queryFn: fetchPostList,
      initialPageParam: 1,
      retry: 2,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage: any, allPages, lastPageParam) => {
        if (lastPage?.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
        if (firstPageParam <= 1) return undefined;
        return firstPageParam - 1;
      },
    });

    return { ...query };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePostInfiniteQuery();

  return (
    <section className="p-4 pt-2">
      <div className="flex items-center justify-between">
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      </div>
      <div className="relative overflow-y-auto pt-4 mx-auto">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group?.data?.posts?.map((post: TPost) => (
              <React.Fragment key={post?.id}><PostItem post={post} /></React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        {isFetchingNextPage ? (
          <LoadingIcon />
        ) : hasNextPage ? (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            Load More
          </button>
        ) : ""}
      </div>
    </section>
  );
};

export default ForumPage;
