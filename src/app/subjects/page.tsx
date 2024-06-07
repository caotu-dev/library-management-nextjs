import SubjectModule from "@/modules/subjects/pages/Subject";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const subject = searchParams?.name?.toString() ?? "";
  return <SubjectModule subject={subject} />;
}
