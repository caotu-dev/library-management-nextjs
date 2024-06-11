import BookDetailPage from "@/modules/books/pages/BookDetails";
import type { Metadata } from "next";
import { getPageMetadata } from "./metadata";

type IProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const slug = params.slug;
  return getPageMetadata(slug);
}

export default function Page({ params }: IProps) {
  return <BookDetailPage slug={params.slug} />;
}
