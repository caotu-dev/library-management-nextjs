import QueryProviders from "@/app/provider";
import ListCreatePage from "@/modules/list/pages/Create";

export default function Page() {
  return (
    <QueryProviders>
      <ListCreatePage />
    </QueryProviders>
  );
}
