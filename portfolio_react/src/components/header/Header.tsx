import { data } from "../../data/data";
import "./Header.css";
import { useEffect, useState } from "react";

interface HeaderProps {
  toggleLangue: any;
  langue: string;
}

function Header({ langue }: HeaderProps) {
  const [location, setLocation] = useState("about-me");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [clickedState, setClickedState] = useState("notClicked");

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const handleClickHam = () => {
    setClickedState(clickedState === "notClicked" ? "clicked" : "notClicked");
  };

  return (
    <header>
      {windowWidth >= 1200 ? (
        <>
          <div id="header-bg" />
          <div id="header">
            <img
              src="../public/ms.svg"
              alt="MS Logo"
              id="header-logo-ms"
              className="header-disp"
            />
            <div>
              <div id="header-btns-div" className="header-disp">
                <button
                  className="header-btns-btn"
                  dangerouslySetInnerHTML={{__html : data.fr["header"][0]}}
                  onClick={() => setLocation("aboute")}
                >
                </button>
                <button
                  className="header-btns-btn"
                  dangerouslySetInnerHTML={{__html : data.fr["header"][1]}}
                  onClick={() => setLocation("feed")}
                >
                  Feed
                </button>
                <button
                  className="header-btns-btn"
                  dangerouslySetInnerHTML={{__html : data.fr["header"][2]}}
                  onClick={() => setLocation("contact")}
                >
                  Contact
                </button>
              </div>
              <div
                id="selected-btn-dot"
                className={
                  location === "about-me"
                    ? "about-me"
                    : location === "feed"
                    ? "feed"
                    : "contact"
                }
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hamMenu" onClick={handleClickHam}>
            {clickedState === "notClicked" ? (
              <>
                <div className="hamSlice" />
                <div className="hamSlice" />
                <div className="hamSlice" />
              </>
            ) : (
              <>
                <div className="hamSliceCross1" />
                <div className="hamSliceCross2" />
              </>
            )}
          </div>

          {clickedState === "clicked" ? (
            <div className="menu">
              <p>A propos</p>
              <p>Feed</p>
              <p>Contact</p>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
