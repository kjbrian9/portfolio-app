import { ReactNode } from "react";
import "../css/global.css";
interface Props {
  children: ReactNode;
}

function Page({ children }: Props) {
  return <div className="page">{children}</div>;
}

export default Page;
