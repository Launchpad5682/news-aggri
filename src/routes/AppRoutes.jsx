import { Route, Routes } from "react-router-dom";
import { Layout } from "../common";
import { Article } from "./Article";
import { Home } from "./Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="article/:id" element={<Article />} />
      </Route>
    </Routes>
  );
};
