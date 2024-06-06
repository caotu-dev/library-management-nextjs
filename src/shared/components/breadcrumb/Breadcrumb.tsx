import ChevRightIcon from "../icons/ChevRightIcon";
import HomeIcon from "./../icons/HomeIcon";
import { RouterConfig } from "@/core/constants/router";

interface IProps {
  breadcrumbs: {
    title: string;
    url: string;
  }[];
}

const BreadcrumbComponent: React.FC<IProps> = (props) => {
  const breadcrumbs = [...props.breadcrumbs];
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href={RouterConfig.HOME}
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HomeIcon />
            Home
          </a>
        </li>
        {breadcrumbs?.map((br, key) => {
          if(key === breadcrumbs.length - 1) return '';
          return (
            <li key={key}>
              <div className="flex items-center">
                <ChevRightIcon />
                <a
                  href={br?.url}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {br?.title}
                </a>
              </div>
            </li>
          );
        })}

        <li aria-current="page">
          <div className="flex items-center">
            <ChevRightIcon />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              {breadcrumbs[breadcrumbs.length - 1]?.title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbComponent;
