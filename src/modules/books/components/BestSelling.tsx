import bookApi from "@/shared/services/api/book.api";
import HorizontalList from "./HorizontalList";

async function getBestSelling() {
  const request = {
    limit: 5,
    offset: 0,
  };
  const response: any = await bookApi.getBySubjects('love', request);
  return response?.data ?? []
}

export default async function BestSelling() {
  const data = await getBestSelling();

  return <HorizontalList title={`Best selling`} list={data} />
}
