import AuthUtils from "@/shared/utils/auth.util";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RouterConfig } from "../constants/router";

const AuthGuard = (WrappedComponent: any) => {
  return (props: any) => {

    const router = useRouter();
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        setAuth(AuthUtils.getAuth())
    }, [])

    useEffect(() => {
      if (!AuthUtils.getAuth()) {
        router.push(RouterConfig.LOGIN);
      }
    }, [AuthUtils.getAuth()]);

    if(!auth) return 'Checking ...';

    return <WrappedComponent {...props} />;
  };
};

export default AuthGuard;
