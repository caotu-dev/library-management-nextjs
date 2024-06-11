import BookThumbnailComponent from "@/shared/components/book-thumbnail/BookThumbnail";
import PaginationComponent from "@/shared/components/pagination/Pagination";
import bookApi from "@/shared/services/api/book.api";
import SearchPagination from "../components/SearchPagination";

async function getSearchedBooks(keyword: string) {
  const request = {
    limit: 20,
    offset: 0,
    q: keyword,
  };
  const response: any = await bookApi.search(request);
  return response;
}

interface IProps {
  keyword: string;
  page: number;
}

export default async function SearchPage({
  keyword,
  page,
}: IProps) {
  const data = await getSearchedBooks(keyword ?? "");

  return (
    <section className="p-4">
      <h4 className="text-2xl font-bold dark:text-white pb-6">
        Found {data?.total} result(s) for "{keyword}"
      </h4>
      <div className="flex flex-wrap gap-4 pt-4">
        {data?.data?.map((book: any, key: number) => (
          <div key={key} className="md:w-64">
            <BookThumbnailComponent item={book} />
          </div>
        ))}
      </div>
      {data?.data?.length > 0 && (
        <SearchPagination total={data?.total} currentPage={page} keyword={keyword} />
      )}
    </section>
  );
}
