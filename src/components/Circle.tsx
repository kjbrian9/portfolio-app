interface Props {
  scale: string;
  strokeDash: number;
  animationClass: string;
}

function Circle({ scale, strokeDash, animationClass }: Props) {
  return (
    <div className="overlay-div" style={{ transform: `scale(${scale})` }}>
      <svg width="18vw" height="18vw" viewBox="0 0 60 60" className={animationClass}>
        <defs>
          <linearGradient id="myGradient">
            <stop offset="10%" stop-color="#5a1a58" />
            <stop offset="95%" stop-color="#c03131" />
          </linearGradient>
        </defs>

        <circle
          className="circle-small"
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
  );
}

export default Circle;
