import SubjectModule from "@/modules/subjects/pages/Subject";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <SubjectModule />
    </Suspense>
  );
}
