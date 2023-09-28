interface Props {
  scale: string;
  strokeDash: number;
  animationClass: string;
}

function Circle({ scale, strokeDash, animationClass }: Props) {
  const hoverFunction = () => {
    const overlayElement = document.querySelectorAll(".overlay-div").forEach((e) => e.classList.add("bigger"));
    const circleElement = document.querySelectorAll("#circle-id").forEach((e) => e.classList.add("circle-dash"));
  };
  const hoverFunctionLeave = () => {
    const overlayElement = document.querySelectorAll(".overlay-div").forEach((e) => e.classList.remove("bigger"));
    const circleElement = document.querySelectorAll("#circle-id").forEach((e) => e.classList.remove("circle-dash"));
  };

  return (
    <div style={{ transform: `scale(${scale})` }} className="hello">
      <div onMouseEnter={hoverFunction} onMouseLeave={hoverFunctionLeave} className="overlay-div">
        <svg width="18vw" height="18vw" viewBox="0 0 60 60" className={animationClass}>
          <defs>
            <linearGradient id="myGradient">
              <stop offset="10%" stop-color="#5a1a58" />
              <stop offset="95%" stop-color="#c03131" />
            </linearGradient>
          </defs>

          <circle
            id="circle-id"
            className="circle-transition"
            stroke="url('#myGradient')"
            strokeDasharray={strokeDash}
            strokeLinecap="round"
            fill="transparent"
            r={"29"}
            cx={"30"}
            cy={"30"}
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Circle;
