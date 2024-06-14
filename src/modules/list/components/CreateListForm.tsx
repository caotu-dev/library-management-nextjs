"use client";

import { RouterConfig } from "@/core/constants/router";
import listApi from "@/shared/services/api/list.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface IProps {
  isComponent?: boolean;
  page?: number;
}

export default function CreateListForm({ isComponent = true, page }: IProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (body: any) => {
      return listApi.create(body);
    },
    retry: 3,
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["todos", page] });

      // Snapshot the previous value
      const previousTodos: any = queryClient.getQueryData(["todos", page]);

      // Optimistically update to the new value if page = 1
      if (page === 1) {
        const todos = previousTodos?.data?.todos;
        todos.unshift(newTodo);
        const newTodos = {
            ...previousTodos,
            data: {
                ...previousTodos?.data,
                todos: [...todos],
            }
        }
        queryClient.setQueryData(["todos", page], (_: any) => newTodos);
      }

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context: any) => {
      queryClient.setQueryData(["todos", page], context?.previousTodos);
    },
    onSuccess: (_) => {
      toast.success("Successfully created!");
      if (!isComponent) {
        router.push(RouterConfig.LIST);
      }else {
        // Refetch new data
        // queryClient.invalidateQueries({ queryKey: ['todos', page] })
      }
    },
  });

  const submit = async (e: any) => {
    e.preventDefault();
    const todo = (document.getElementById("name") as HTMLInputElement)?.value;
    if (!todo) return;
    mutation?.reset(); // Remove error message return from mutation if any
    const body = { todo, completed: false, userId: 5, id: 99999 };
    mutation.mutate(body);
    // Or use mutateAsync for asynchronous without callback func
    // const response = await mutation.mutateAsync(body);
  };

  return (
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
      {mutation?.isError && (
        <span className="text-red-500 text-sm">{mutation.error.message}</span>
      )}

      <button
        type="submit"
        disabled={mutation?.isPending}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save
      </button>
    </form>
  );
}
