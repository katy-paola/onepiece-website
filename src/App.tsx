import { Route, Routes } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import HomepageMain from "./features/homepage/ui/HomepageMain";
import SagasMain from "./features/episodes/ui/SagasMain";
import EpisodesMain from "./features/episodes/ui/EpisodesMain";
import CrewMain from "./features/crew/ui/CrewMain";
import ZoroMain from "./features/crew/ui/ZoroMain";
import FruitsMain from "./features/fruits/ui/FruitsMain";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomepageMain />} />
          <Route path="/episodes" element={<SagasMain />} />
          <Route path="/episodes/:sagaId" element={<EpisodesMain />} />
          <Route path="/crew" element={<CrewMain />} />
          <Route path="/lost/zoro" element={<ZoroMain />} />
          <Route path="/fruits" element={<FruitsMain />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./shared/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
