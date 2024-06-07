"use client";

import AuthUtils from "@/shared/utils/auth.util";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RouterConfig } from "../constants/router";
interface IProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<IProps> = ({ children }) => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(AuthUtils.getAuth());
  }, []);

  useEffect(() => {
    if (!AuthUtils.getAuth()) {
      router.push(RouterConfig.LOGIN);
    }
  }, [AuthUtils.getAuth()]);

  if (!auth) return;

  return children;
};

export default AuthGuard;
