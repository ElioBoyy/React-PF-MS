import { data } from "../../data/data";
import { ToggleLanguage } from "../ToggleLanguage/ToggleLanguage";
import "./Header.css";
import { useEffect, useState } from "react";

interface HeaderProps {
  toggleLangue: any;
  langue: string;
}

function Header({ toggleLangue, langue }: HeaderProps) {
  const [location, setLocation] = useState("about-me");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [clickedState, setClickedState] = useState(false);

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
    setClickedState(clickedState ? false : true);
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
              {langue === "fr" ? (
                <div id="header-btns-div" className="header-disp">
                  <a
                    href="/"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][0] }}
                    onClick={() => setLocation("about")}
                  ></a>

                  <a
                    href="/feed"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][1] }}
                    onClick={() => setLocation("feed")}
                  ></a>

                  <a
                    href="/contact"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][2] }}
                    onClick={() => setLocation("contact")}
                  ></a>
                  <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
                </div>
              ) : (
                <div id="header-btns-div" className="header-disp">
                  <a
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][0] }}
                    onClick={() => setLocation("about")}
                  ></a>

                  <a
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][1] }}
                    onClick={() => setLocation("feed")}
                  ></a>

                  <a
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][2] }}
                    onClick={() => setLocation("contact")}
                  ></a>
                  <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
                </div>
              )}
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
            {clickedState === false ? (
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

          {clickedState === true ? (
            <div className="menu">
              {langue === "fr" ? (
                <>
                  <a
                    href="/"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][0] }}
                    onClick={() => setLocation("about")}
                  ></a>
                  <a
                    href="/feed"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][1] }}
                    onClick={() => setLocation("feed")}
                  ></a>
                  <a
                    href="/contact"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.fr["header"][2] }}
                    onClick={() => setLocation("contact")}
                  ></a>
                  <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
                </>
              ) : (
                <>
                  <a
                    href="/"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][0] }}
                    onClick={() => setLocation("about")}
                  ></a>
                  <a
                    href="/feed"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][1] }}
                    onClick={() => setLocation("feed")}
                  ></a>
                  <a
                    href="/contact"
                    className="header-btns-btn underline-on-hover"
                    dangerouslySetInnerHTML={{ __html: data.en["header"][2] }}
                    onClick={() => setLocation("contact")}
                  ></a>
                  <ToggleLanguage toggleLangue={toggleLangue} langue={langue} />
                </>
              )}
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
