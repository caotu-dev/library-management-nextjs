"use client";

import BookThumbnailComponent from "@/shared/components/book-thumbnail/BookThumbnail";
import PaginationComponent from "@/shared/components/pagination/Pagination";
import bookApi from "@/shared/services/api/book.api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookThumbnailSkeleton from "@components/book-thumbnail-skeleton/BookThumbnailSkeleton";

const SearchBookPage: React.FC<{}> = () => {
  const searchParams = useSearchParams();
  const loadingItems = Array.from(Array(10).keys());

  const [keyword, setKeyword] = useState<string>("");
  const [list, setList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const perpage = 20;

  const getList = async () => {
    if (!keyword) return;
    setIsLoading(true);
    const request = {
      limit: perpage,
      offset: 0,
      q: keyword,
    };
    const response: any = await bookApi.search(request);
    setList(response.data);
    setTotal(response.total);
    setIsLoading(false);
  };

  useEffect(() => {
    setKeyword(searchParams.get("q") ?? "");
    setList([])
  }, [searchParams.get("q")]);

  useEffect(() => {
    getList();
  }, [keyword]);

  return (
    <section className="p-4">
      <h4 className="text-2xl font-bold dark:text-white pb-6">
        {isLoading
          ? `Searching for "${keyword}"`
          : `Found ${total} result(s) for "${keyword}"`}
      </h4>
      <div className="flex flex-wrap gap-4 pt-4">
        {list?.map((book: any, key: number) => (
          <div key={key} className="md:w-64">
            <BookThumbnailComponent item={book} />
          </div>
        ))}
        {isLoading &&
          loadingItems.map((_, key) => (
            <div key={key}>
              <BookThumbnailSkeleton />
            </div>
          ))}
      </div>
      {list?.length > 0 && (
        <div className="mt-4 flex justify-center w-full">
          <PaginationComponent
            perPage={perpage}
            setPage={setCurrentPage}
            currentPage={currentPage}
            total={total}
          />
        </div>
      )}
    </section>
  );
};

export default SearchBookPage;
