export default function TableSkeleton() {
  const loadingItems = Array.from(Array(10).keys());
  return (
    <>
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
    </>
  );
}
