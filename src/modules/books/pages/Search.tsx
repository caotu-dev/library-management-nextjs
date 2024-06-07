import BookThumbnailComponent from "@/shared/components/book-thumbnail/BookThumbnail";
import bookApi from "@/shared/services/api/book.api";

async function getSearchedBooks(keyword: string) {
  const request = {
    limit: 20,
    offset: 0,
    q: keyword,
  };
  const response: any = await bookApi.search(request);
  return response;
}

export default async function SearchPage({ keyword }: { keyword: string }) {
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
      {/* {data?.data?.length > 0 && (
        <div className="mt-4 flex justify-center w-full">
          <PaginationComponent
            perPage={perpage}
            setPage={setCurrentPage}
            currentPage={currentPage}
            total={total}
          />
        </div>
      )} */}
    </section>
  );
}
