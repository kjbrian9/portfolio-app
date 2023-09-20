import { useEffect, useState } from "react";
import WebPage from "../WebPage";
import WelcomePage from "./WelcomePage";

function AllPages() {
  const [welcomePageActive, setWelcomePageActive] = useState(true);
  const [webPageActive, setWebPageActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      console.log("Working 1");
      setWelcomePageActive(true);
    }, 3000);

    setTimeout(() => {
      setWelcomePageActive(false);
      setWebPageActive(true);
      console.log("Hello");
    }, 3000);
  }, []);
  return (
    <div>
      {welcomePageActive && <WelcomePage></WelcomePage>}
      {webPageActive && <WebPage></WebPage>}
    </div>
  );
}

export default AllPages;
