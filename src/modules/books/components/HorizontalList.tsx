import BookThumbnailSkeleton from "@components/book-thumbnail-skeleton/BookThumbnailSkeleton";
import bookApi from "@/shared/services/api/book.api";
import BookThumbnailComponent from "@components/book-thumbnail/BookThumbnail";
import { useEffect, useState } from "react";

interface IProps {
  title: string;
  subject: string;
}

const HorizontalList: React.FC<IProps> = (props) => {
  const limit = 5;
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadingItems = Array.from(Array(limit).keys());

  const getList = async () => {
    setIsLoading(true);
    const request = {
      limit: limit,
      offset: 0,
    };
    const response: any = await bookApi.getBySubjects(props?.subject, request);
    setList(response?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="mb-6">
      <h4 className="text-2xl font-bold dark:text-white pb-6">
        {props?.title}
      </h4>
      <div className="flex gap-4">
        {list?.map((book, key) => (
          <div key={key} className="w-72">
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
    </div>
  );
};

export default HorizontalList;
