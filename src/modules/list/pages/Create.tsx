"use client";

import { RouterConfig } from "@/core/constants/router";
import listApi from "@/shared/services/api/list.api";
import BreadcrumbComponent from "@components/breadcrumb/Breadcrumb";

const ListCreatePage: React.FC<{}> = () => {
  const breadcrumbs: any = [
    {
      title: "Lists",
      url: RouterConfig.LIST,
    },
    {
      title: "Create",
      url: null,
    },
  ];

  const submit = async(e: any) => {
    e.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const description = (document.getElementById('description') as HTMLInputElement)?.value;
    if(!name) return;
    const body = {name, description}
    const response = await listApi.create(body);
    console.log(response)
  }

  return (
    <section className="p-4">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} />
      <div className="flex pt-2">
        <form className="mx-auto w-full max-w-96" onSubmit={submit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default ListCreatePage;
