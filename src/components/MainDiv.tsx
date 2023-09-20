import "../css/MainPage.css";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function MainDiv({ children }: Props) {
  return <div className="main-div">{children}</div>;
}

export default MainDiv;
