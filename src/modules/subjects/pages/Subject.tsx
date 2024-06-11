import { RouterConfig } from "@/core/constants/router";
import { Subjects } from "@/core/constants/subject";
import CommonUtils from "@/shared/utils/common.util";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";
import Link from "next/link";

export default async function SubjectPage() {
  const breadcrumbs: any = [
    {
      title: "Subjects",
      url: RouterConfig.SUBJECT,
    },
  ];

  const chunkSubjects = CommonUtils.splitArrayIntoChunks(Subjects, 5);
  const subjectSlug = (subject: string) => {
    return CommonUtils.toSlug(subject);
  };

  return (
    <section className="p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <div className="flex flex-wrap gap-10 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
        {chunkSubjects.map((subjects, key) => (
          <ul
            key={key}
            className="space-y-4 sm:mb-4 md:mb-0"
            aria-labelledby="mega-menu-full-cta-button"
          >
            {subjects.map((subject, subKey) => (
              <li key={subKey}>
                <Link
                  href={`${RouterConfig.SUBJECT}/${subjectSlug(subject)}`}
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  {subject}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
