import listApi from "@/shared/services/api/list.api";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Iprops {
  item: any;
  page: number;
}

export default function TableAction({ item, page }: Iprops) {
  const queryClient = useQueryClient();

  const mutationDeletion = useMutation({
    mutationFn: () => listApi.delete(item?.id),
    onSuccess: () => {
      toast.success("Successfully deleted!");
      queryClient.setQueryData(['todos', page], (old: any) => {
        return {
          ...old,
          data: {
            ...old.data,
            todos: old?.data?.todos?.filter((todo: any) => todo?.id !== item?.id)
          }
        }
      });

      // Mark that new todo state has been updated and need to be refeched
      // queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  });

  const mutationUpdate = useMutation({
    mutationFn: () => listApi.update(item?.id, { completed: true }),
    onSuccess: () => {
      toast.success("Successfully mark as done!");

      queryClient.setQueryData(['todos', page], (old: any) => {
        return {
          ...old,
          data: {
            ...old.data,
            todos: old?.data?.todos?.map((todo: any) => {
              if (todo?.id === item?.id) {
                return { ...todo, completed: true };
              }
              return todo;
            })
          }
        }
      });

      // Mark that new todo state has been updated and need to be refeched
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this task");
    if (!confirmed) return;
    mutationDeletion.mutate();
  };

  const handleMarkAsDone = async () => {
    const confirmed = confirm(
      "Are you sure you want to mark this task as done"
    );
    if (!confirmed) return;

    mutationUpdate.mutate();
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
