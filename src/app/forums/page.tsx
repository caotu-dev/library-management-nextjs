import AuthGuard from "@/core/guards/AuthGuard";
import QueryProviders from "../provider";
import ForumPage from "@/modules/forums/pages/Forum";

export default function Page() {
  return (
    <QueryProviders>
      <AuthGuard>
        <ForumPage />
      </AuthGuard>
    </QueryProviders>
  );
}
