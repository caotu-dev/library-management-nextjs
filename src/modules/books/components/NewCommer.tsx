import bookApi from "@/shared/services/api/book.api";
import HorizontalList from "./HorizontalList";

async function getData() {
  const request = {
    limit: 5,
    offset: 0,
  };
  const response: any = await bookApi.getBySubjects('fiction', request);
  return response?.data ?? []
}

export default async function NewCommer() {
  const data = await getData();

  return <HorizontalList title={`New Commer`} list={data} />
}
