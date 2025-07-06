import { useEffect, useState, Suspense } from "react";
import { type INoSSRProps } from "./View.types";

/**
 * 组件：NoSSR
 */
const NoSSR = (props: INoSSRProps) => {
  const children = props.children;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) {
    return null;
  }

  return <Suspense fallback={props.loading}>{children}</Suspense>;
};

export default NoSSR;
