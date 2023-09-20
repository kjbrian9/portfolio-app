import { ReactNode } from "react";
import "../css/global.css";

interface Props {
  children: ReactNode;
  textColor: string;
  fontSize: string;
}

function Title({ children, textColor, fontSize }: Props) {
  return (
    <p className="title" style={{ color: textColor, fontSize: fontSize }}>
      {children}
    </p>
  );
}

export default Title;
