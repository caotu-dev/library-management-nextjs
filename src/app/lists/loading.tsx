export default function Loading() {
  const loadingItems = Array.from(Array(10).keys());
  return (
    <section className="p-4 pt-2">
      <div className="flex items-center justify-between">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
      </div>

      <div className="relative overflow-x-auto pt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Todo
              </th>
              <th scope="col" className="px-6 py-3 w-20">
                Status
              </th>
              <th scope="col" className="px-6 py-3 w-40">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loadingItems?.map((_: any, key: number) => (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
                </th>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
