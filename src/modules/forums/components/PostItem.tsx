import { RouterConfig } from "@/core/constants/router";
import CommonUtils from "@/shared/utils/common.util";
import Link from "next/link";

interface IProps {
  post: TPost;
  isDetails?: boolean;
  children?: React.ReactNode;
}
export default function PostItem({ post, isDetails, children }: IProps) {
  const getPostLink = () => {
    if (isDetails) {
      return RouterConfig.FORUM;
    }
    const slug = CommonUtils.toSlug(post?.title);
    return `${RouterConfig.FORUM}/${slug}-${post?.id}`;
  };
  return (
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={getPostLink()}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post?.title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {post?.body}
      </p>
      <div className="text-end text-sm pb-2">{post?.views} Views</div>
      <div className="inline-flex rounded-md shadow-sm w-full" role="group">
        <button
          type="button"
          className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          {post?.reactions?.likes} Likes
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          {post?.reactions?.dislikes} Dislikes
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Comments
        </button>
      </div>
      {children}
    </div>
  );
}
