"use client";

import { RouterConfig } from "@/core/constants/router";
import PaginationComponent from "@/shared/components/pagination/Pagination";
import { useRouter } from "next/navigation";

interface IProps {
  total: number;
  currentPage: number;
  keyword: string;
}
export default function SearchPagination({ total, currentPage, keyword }: IProps) {
  const router = useRouter();
  const handlePageClick = (e: any) => {
    const pageIndex = e?.selected;
    const currentPage = pageIndex + 1;
    router.push(RouterConfig.SEARCH + "?q="+keyword + "&page="+currentPage);
  };
  return (
    <div className="mt-4 flex justify-center w-full">
      <PaginationComponent
        handlePageClick={handlePageClick}
        total={total}
        activePage={currentPage}
      />
    </div>
  );
}
