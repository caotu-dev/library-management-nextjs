import BookThumbnailSkeleton from "@components/book-thumbnail-skeleton/BookThumbnailSkeleton";

function SkeletonLoading() {
    const loadingItems = Array.from(Array(5).keys());
    return (
      <>
        <section className="p-4">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
          <div className="flex gap-4">
            {loadingItems.map((_, key) => (
              <div key={key}>
                <BookThumbnailSkeleton />
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

export default function Loading() {
  return (
    <>
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
    </>
  );
}
