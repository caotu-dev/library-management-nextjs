import { COVER_URL } from "@/core/constants/api";
import bookApi from "@/shared/services/api/book.api";
import CommonUtils from "@/shared/utils/common.util";
import Image from "next/image";

async function getBookDetails(id: string) {
  const response: any = await bookApi.getById(id);
  return response;
}

interface IProps {
  slug: string;
}

export default async function BookDetailPage({ slug }: IProps) {
  const id = CommonUtils.slugToID(slug);
  const data = await getBookDetails(id ?? "");

  return (
    <section className="p-4">
      <div className="flex gap-4 pt-4">
        <div className="w-1/4">
          <Image
            src={data?.thumbnail_large}
            width={500}
            height={700}
            alt={data?.title}
            className="object-contain"
          />
        </div>
        <div className="w-3/4">
          <h4 className="text-2xl font-bold dark:text-white pb-6">
            {data?.title}
          </h4>
          <p>Author: </p>
          <p>Publisher: {data?.publisher}</p>
          <p>Publish Date: {data?.publish_date}</p>
          <p>Description: {data?.description?.value}</p>
        </div>
      </div>
    </section>
  );
}
