import AuthGuard from "@/core/guards/AuthGuard";
import ListPage from "@/modules/list/pages/List";

export default function Page() {
  return (
    <AuthGuard>
      <ListPage />
    </AuthGuard>
  );
}
