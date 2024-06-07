import SearchBookPage from "@/modules/books/pages/Search";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const keyword = searchParams?.q?.toString() ?? "";
  return <SearchBookPage keyword={keyword} />;
}
