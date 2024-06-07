import BookThumbnailSkeleton from "@components/book-thumbnail-skeleton/BookThumbnailSkeleton";
import bookApi from "@/shared/services/api/book.api";
import BookThumbnailComponent from "@components/book-thumbnail/BookThumbnail";
import { useEffect, useState } from "react";

interface IProps {
  list: any;
  title: string;
}

const HorizontalList: React.FC<IProps> = (props) => {

  return (
    <div className="mb-6">
      <h4 className="text-2xl font-bold dark:text-white pb-6">
        {props?.title}
      </h4>
      <div className="flex gap-4">
        {props?.list?.map((book: any, key: any) => (
          <div key={key} className="w-72">
            <BookThumbnailComponent item={book} />
          </div>
        ))}
        {/* {isLoading &&
          loadingItems.map((_, key) => (
            <div key={key}>
              <BookThumbnailSkeleton />
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default HorizontalList;
