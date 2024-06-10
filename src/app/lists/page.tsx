import AuthGuard from "@/core/guards/AuthGuard";
import ListPage from "@/modules/list/pages/List";
import QueryProviders from "../provider";

export default function Page() {
  return (
    <QueryProviders>
      <AuthGuard>
        <ListPage />
      </AuthGuard>
    </QueryProviders>
  );
}
