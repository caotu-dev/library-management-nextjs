import BookBySubjectPage from "@/modules/subjects/pages/BooksBySubject";

type IProps = {
  params: { slug: string };
};

export default function Page({ params }: IProps) {
  return <BookBySubjectPage slug={params?.slug} />;
}
