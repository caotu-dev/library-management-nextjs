import { RouterConfig } from "@/core/constants/router";
import BookThumbnailComponent from "@/shared/components/book-thumbnail/BookThumbnail";
import PaginationComponent from "@/shared/components/pagination/Pagination";
import bookApi from "@/shared/services/api/book.api";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";

async function getBooksBySubject(subject: string) {
  const request = {
    limit: 20,
    offset: 0,
  };
  const response: any = await bookApi.getBySubjects(
    subject?.toLowerCase(),
    request
  );

  return response;
}

export default async function BookBySubjectPage({ slug }: { slug: string }) {
  const subject = slug.replaceAll("-", " ");
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

  const data = await getBooksBySubject(subject);

  return (
    <section className="p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap gap-4 pt-4">
        {data?.data?.map((book: any, key: number) => (
          <div key={key} className="md:w-64">
            <BookThumbnailComponent item={book} />
          </div>
        ))}
      </div>
      {/* {list?.length > 0 && (
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
