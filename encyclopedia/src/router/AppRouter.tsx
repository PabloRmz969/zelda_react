import { Route, Routes } from "react-router-dom";
import { GamesPage, HomePage, SingleGamePage } from "../zelda";
import { Navbar } from "../ui";
import { useEffect } from "react";

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
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};
