import SearchBookPage from "@/modules/books/pages/Search";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const keyword = searchParams?.q?.toString() ?? "";
  const page = searchParams?.page ? Number(searchParams?.page) : 0;

  return <SearchBookPage keyword={keyword} page={page} />;
}
