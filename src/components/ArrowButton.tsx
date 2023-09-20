import ArrowUp from "../assets/up-arrow-svgrepo-com.svg";
import ArrowDown from "../assets/down-arrow-svgrepo-com.svg";
import Card from "./card";

interface Props {
  direction: string;
  imageWidth: string;
  onClickArg: () => void;
}

function ArrowButton({ direction, imageWidth, onClickArg }: Props) {
  return (
    <Card onClick={onClickArg}>
      {direction === "up" && <img onClick={onClickArg} src={ArrowUp} style={{ width: imageWidth }}></img>}
      {direction === "down" && <img src={ArrowDown} style={{ width: imageWidth }}></img>}
    </Card>
  );
}

export default ArrowButton;
