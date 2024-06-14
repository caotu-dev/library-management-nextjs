import postApi from "@/shared/services/api/post.api";
import { TComment } from "../types/post.model";
import {
  useQuery,
} from "@tanstack/react-query";

export default function Comments({ id }: { id: string }) {
  const { data, isPending } = useQuery({
    queryKey: ["article-comments", id],
    queryFn: () => postApi.getCommentsById(Number(id)),
  });
  return (
    <ul
      id="comments"
      className="w-full mt-2 text-sm font-medium text-gray-900 rounded-lg dark:text-white"
    >
      {data?.data?.comments?.map((comment: TComment) => (
        <li key={comment?.id} className="w-full px-4 py-2 border-b border-gray-900 rounded-t-lg dark:border-gray-900">
          <span className="font-bold">{comment?.user?.fullName}</span>{" "}
          <span className="font-light">{comment?.body}</span>
        </li>
      ))}
    </ul>
  );
}
