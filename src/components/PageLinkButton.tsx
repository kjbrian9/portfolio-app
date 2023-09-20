interface Props {
  Text: string;
  Link?: string;
  Class?: string;
  onClickFunction?: () => void;
}

function PageLinkButton({ Text, Link, Class, onClickFunction }: Props) {
  return (
    <a href={Link} className={`headerText ${Class}`} onClick={onClickFunction}>
      {Text}
    </a>
  );
}

export default PageLinkButton;
