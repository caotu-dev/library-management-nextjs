import bookApi from "@/shared/services/api/book.api";
import HorizontalList from "./HorizontalList";

async function getData() {
  const request = {
    limit: 5,
    offset: 0,
  };
  const response: any = await bookApi.getBySubjects('history', request);
  return response?.data ?? []
}

export default async function MostPopular() {
  const data = await getData();

  return <HorizontalList title={`Most Popular`} list={data} />
}
