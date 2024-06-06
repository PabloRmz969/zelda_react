import { useEffect, useState } from "react";
import { useZeldaStore } from "../../hooks";
import { Game } from "../components/Game";

import $ from "jquery";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const assignClass = (type_class: string) => {
  const active_img = $(".game-info.active .front-page-img");
  const active_txt = $(".game-info.active .title-front");
  $(active_img).removeClass(
    "animate__slideOutUp animate__slideInUp animate__slideInDown animate__slideOutDown"
  );
  $(active_txt).removeClass(
    "animate__slideOutUp animate__slideInUp animate__slideInDown animate__slideOutDown"
  );
  $(active_img).addClass(type_class);
  $(active_txt).addClass(type_class);
};

const before = () => {
  const active = $(".game-info.active");
  const before = $(active).prev();
  assignClass("animate__slideOutDown");
  setTimeout(() => {
    window.scrollTo({
      top: $(before).position().top,
      //behavior: "smooth",
    });
    $(active).removeClass("active");
    $(before).addClass("active");
    assignClass("animate__slideInDown");
  }, 300);
};

const next = () => {
  const active = $(".game-info.active");
  const nxt = $(active).next();
  assignClass("animate__slideOutUp");
  setTimeout(() => {
    $(active).removeClass("active");
    $(nxt).addClass("active");
    assignClass("animate__slideInUp");
    window.scrollTo({
      top: $(nxt).position().top,
      //behavior: "smooth",
    });
    console.log(
      $(".game-info.active .title-front"),
      $(".game-info.active .title-front").position().top,
      
    );
    $(".game-info.active .title-front").position().top < 40 && next();
  }, 500);
};

export const GamesPage = () => {
  const { startSearchGames, games } = useZeldaStore();

  const [crEleme, setCrEleme] = useState(0);

  useEffect(() => {
    startSearchGames();
    document.body.classList.add("games-scroll");
    $(window).scroll(function () {
      console.log($(window).scrollTop(), $(".game-info.active .title-front").position().top);
    });
  }, []);

  return (
    <>
      <ReactScrollWheelHandler
        className="scroll-wheel-container"
        style={{
          height: `calc(${games.length}*100vh)`
        }}
        upHandler={() => {
          //console.log("scroll up");
          crEleme > 0 && setCrEleme(crEleme - 1);
          before();
        }}
        downHandler={() => {
          //console.log("scroll down");
          setCrEleme(crEleme + 1);
          next();
        }}
      >
        <div className="shape-in animate__animated animate__slideOutLeft"></div>
        <div className="container">
          {games.length > 0 && (
            <div className="container-scroll">
              {games.map((game, index) => (
                <Game key={game.id} game={{ ...game }} ind={index} />
              ))}
            </div>
          )}
        </div>
      </ReactScrollWheelHandler>
    </>
  );
};
