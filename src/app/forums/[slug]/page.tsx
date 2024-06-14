import QueryProviders from "@/app/provider";
import PostDetailPage from "@/modules/forums/pages/PostDetail";
// import type { Metadata } from "next";
// import { getPageMetadata } from "./metadata";

type IProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata({ params }: IProps): Promise<Metadata> {
//   const slug = params.slug;
//   return getPageMetadata(slug);
// }

export default function Page({ params }: IProps) {
  return (
    <QueryProviders>
      <PostDetailPage slug={params.slug} />
    </QueryProviders>
  );
}
