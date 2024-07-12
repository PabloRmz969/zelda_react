import { useEffect, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useZeldaStore } from "../../../hooks";
import { Bullets, Fronts, Titles } from "../../components";
import { functionsJq } from "../../../helpers";
import { GameInfo } from "../../types";

export const GamesPage = () => {
  const { clearGamesA, startSearchGames, games } = useZeldaStore();
  const { next, prev, onPageLoad, chargingSlide, reset_bullet } = functionsJq();
  const [gamePerPage, setGamePerPage] = useState<GameInfo[]>([]);

  const [noPage, setNoPage] = useState(1);

  useEffect(() => {
    clearGamesA();
    startSearchGames();
    document.body.classList.add("games-scroll");
  }, []);

  useEffect(() => {
    if (games.length > 0) {
      if (document.readyState === "complete") {
        onPageLoad();
      } else {
        window.addEventListener("load", onPageLoad, false);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener("load", onPageLoad);
      }
    }
  }, [games]);

  useEffect(() => {
    document.body.classList.add("games-scroll");
  }, []);

  // useEffect(() => {
  //   console.log(gamePerPage);
  // }, [gamePerPage])
  const changePage = () => {
    const noPage_tmp = noPage - 1;
    if (games.length > 30) {
      let tmp_arr: GameInfo[] = [];
      const bg = noPage_tmp * 8;
      const end = noPage_tmp === 3 ? 31 : bg + 8;
      for (let i = bg; i < end; i++) {
        gamePerPage.push(games[i]);
        tmp_arr.push(games[i]);
      }
      setGamePerPage(tmp_arr);
    }
  };

  useEffect(() => {
    changePage();
  }, [games]);

  useEffect(() => {
    changePage();
  }, [noPage]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {

    chargingSlide();
    setTimeout(() => {
      setNoPage(newPage);
      reset_bullet(newPage);      
    }, 700);
  };

  return (
    <ReactScrollWheelHandler
      style={{ height: "100vh" }}
      upHandler={() => {
        prev();
      }}
      downHandler={() => {
        next();
      }}
    >
      <div className="shape-in animate__animated"></div>
      <div className="container">
        <div className="container-scroll">
          <Fronts gamePerPage={gamePerPage} noPage={noPage}/>
          <Titles gamePerPage={gamePerPage} />
          <Bullets gamePerPage={gamePerPage} noPage={noPage}/>
        </div>
        <Stack spacing={2} className="pagination">
          <Pagination page={noPage} count={4} onChange={handleChangePage} defaultPage={1}/>
        </Stack>
      </div>
    </ReactScrollWheelHandler>
  );
};
