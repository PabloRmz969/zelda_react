import { Route, Routes } from "react-router-dom";
import { GamesPage, HomePage } from "../zelda";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <div className="shape-in animate__animated animate__slideOutLeft"></div>
      <Navbar />
      <Routes>
        <Route path="/games" element={<GamesPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};
