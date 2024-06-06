"use client";
import { RouterConfig } from "@/core/constants/router";
import authApi from "@/shared/services/api/auth.api";
import AuthUtils from "@/shared/utils/auth.util";

const LoginPage: React.FC<{}> = () => {
  const submit = async (e: any) => {
    e.preventDefault();
    const username = (document.getElementById("name") as HTMLInputElement)
      ?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;

    if (!username && !password) return;

    const body = { username, password };
    const response = await authApi.login(body);
    if (response.status === 200) {
      AuthUtils.setAuth(response.data);
      window.location.href = RouterConfig.HOME;
    }
  };

  return (
    <section className="p-4">
      <div className="flex pt-2">
        <form className="mx-auto w-full max-w-96" onSubmit={submit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
