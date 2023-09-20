interface Props {
  logoClass: string;
  logoImage: string;
}
function Logo({ logoClass, logoImage }: Props) {
  return <img className={logoClass} src={logoImage}></img>;
}

export default Logo;
