import PageLinkButton from "./PageLinkButton";
import "../css/header.css";
const scrollToTarget = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    // Use scrollIntoView to scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <PageLinkButton Text="Home" onClickFunction={() => scrollToTarget("homePage")}></PageLinkButton>
          <PageLinkButton Text="About" onClickFunction={() => scrollToTarget("aboutMePage")}></PageLinkButton>
          <PageLinkButton Text="Projects" onClickFunction={() => scrollToTarget("projectsPage")}></PageLinkButton>
          <PageLinkButton
            Text="Contacts"
            onClickFunction={() => scrollToTarget("")}
            Class="contacts-button"
          ></PageLinkButton>
        </nav>
      </header>
    </>
  );
}

export default Header;
