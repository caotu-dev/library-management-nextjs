"use client";
import { RouterConfig } from "@/core/constants/router";
import BreadcrumbComponent from "@/shared/components/breadcrumb/Breadcrumb";
import PostItem from "../components/PostItem";
import CommonUtils from "@/shared/utils/common.util";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import postApi from "@/shared/services/api/post.api";
import LoadingIcon from "@/shared/components/icons/Loading";

export default function PostDetailPage({ slug }: { slug: string }) {
  const id = CommonUtils.slugToID(slug);

  const { data, isPending } = useQuery({
    queryKey: ["article", id],
    queryFn: () => postApi.getDetails(Number(id)),
  });

  const breadcrumbs: any = [
    {
      title: "Forum",
      url: RouterConfig.LIST,
    },
    {
      title: data?.data?.title,
      url: null,
    },
  ];

  // Prefetch the comments
  useQuery({
    queryKey: ["article-comments", id],
    queryFn: () => postApi.getCommentsById(Number(id)),
    // Optional optimization to avoid rerenders when this query changes:
    notifyOnChangeProps: [],
  });

  if (isPending) {
    return "Loading article...";
  }

  return (
    <section className="p-4 pt-2">
      <div className="flex items-center justify-between">
        <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      </div>
      <div className="relative overflow-y-auto pt-4 mx-auto">
        <PostItem isDetails={true} post={data?.data}>
          <Comments id={id} />
        </PostItem>
      </div>
    </section>
  );
}
