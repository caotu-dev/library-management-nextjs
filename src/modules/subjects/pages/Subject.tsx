"use client";

import { RouterConfig } from "@/core/constants/router";
import BookThumbnailComponent from "@/shared/components/book-thumbnail/BookThumbnail";
import PaginationComponent from "@/shared/components/pagination/Pagination";
import bookApi from "@/shared/services/api/book.api";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookThumbnailSkeleton from "@components/book-thumbnail-skeleton/BookThumbnailSkeleton";

const SubjectModule: React.FC<{}> = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get("name");

  const breadcrumbs: any = [
    {
      title: "Subjects",
      url: RouterConfig.SUBJECT,
    },
    {
      title: subject,
      url: "",
    },
  ];

  const loadingItems = Array.from(Array(10).keys());

  const [list, setList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const perpage = 10;

  const getList = async () => {
    if (!subject) return;
    setIsLoading(true);
    const request = {
      limit: perpage,
      offset: 0,
    };
    const response: any = await bookApi.getBySubjects(
      subject?.toLowerCase(),
      request
    );
    setList(response.data);
    setTotal(response.total);
    setIsLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
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

export default SubjectModule;
