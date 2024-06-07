import listApi from "@/shared/services/api/list.api";
import toast from "react-hot-toast";

export default function TableAction({ item, setList }: any) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this task");
    if (!confirmed) return;

    const response = await listApi.delete(item?.id);
    if (response.status === 200) {
      toast.success("Successfully deleted!");
      setList((list: any) => {
        return list.filter((_: any) => _?.id !== item?.id);
      });
    }
  };

  const handleMarkAsDone = async () => {
    const confirmed = confirm(
      "Are you sure you want to mark this task as done"
    );
    if (!confirmed) return;

    const response = await listApi.update(item?.id, { completed: true });
    if (response.status === 200) {
      toast.success("Successfully mark as done!");
      setList((list: any) => {
        return list.map((_: any) => {
          if (_?.id === item?.id) {
            return { ..._, completed: true };
          }
          return _;
        });
      });
    }
  };

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        onClick={handleMarkAsDone}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Done
      </button>
      <button
        onClick={handleDelete}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
      >
        Delete
      </button>
    </div>
  );
}
