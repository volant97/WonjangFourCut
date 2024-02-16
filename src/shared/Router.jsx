import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hamin from "../pages/letter/Hamin";
import Changgeun from "../pages/letter/Changgeun";
import Sangwook from "../pages/letter/Sangwook";
import Eunbi from "../pages/letter/Eunbi";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamin" element={<Hamin />} />
        <Route path="/changgeun" element={<Changgeun />} />
        <Route path="/sangwook" element={<Sangwook />} />
        <Route path="/eunbi" element={<Eunbi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
