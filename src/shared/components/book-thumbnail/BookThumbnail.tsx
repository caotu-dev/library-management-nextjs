import Link from "next/link";
import RatingComponent from "../rating/Rating";

const BookThumbnailComponent: React.FC<any> = ({ item }) => {
  return (
    <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link className="text-center" href="/">
        <img
          className="p-2 rounded-t-lg h-72 w-full object-contain bg-white"
          src={item?.thumbnail}
          alt="book cover"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href="/">
          <h5 className="text-xl h-14 line-clamp-2 font-semibold tracking-tight text-gray-900 dark:text-white">
            {item?.title}
          </h5>
        </Link>
        <p className="text-sm line-clamp-2 font-bold text-gray-900 dark:text-white">
          by {item?.author}
        </p>
        <div className="flex items-center mt-2">
          <RatingComponent rating={item?.rating} />
        </div>
        <div className="flex items-center justify-between mt-2">
          <Link
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Borrow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookThumbnailComponent;
