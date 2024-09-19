import { Route, Routes } from "react-router-dom";
import {
  BossesPage,
  CharactersPage,
  DungeonsPage,
  GamesPage,
  HomePage,
  MonstersPage,
  SingleBossPage,
  SingleCharacterPage,
  SingleDungeonPage,
  SingleGamePage,
} from "../zelda";
import { Navbar } from "../ui";
import { useEffect } from "react";
import { TestPage } from "../zelda/pages/single/TestPage";
import { SingleMonsterPage } from "../zelda/pages/single/SingleMonsterPage";



export const AppRouter = () => {
  useEffect(() => {
    const classExists = document.querySelector("body") !== null;
    if (!classExists) return;
    document.body.classList.add("green-home");
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/games" element={<GamesPage />} />
        <Route path="/game/:id" element={<SingleGamePage />} />
        <Route path="/bosses" element={<BossesPage />} />
        <Route path="/boss/:id" element={<SingleBossPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/character/:id" element={<SingleCharacterPage />} />
        <Route path="/dungeon/:id" element={<SingleDungeonPage />} />
        <Route path="/dungeons" element={<DungeonsPage />} />
        <Route path="/monster/:id" element={<SingleMonsterPage />} />
        <Route path="/monsters" element={<MonstersPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};
