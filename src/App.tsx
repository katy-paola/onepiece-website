import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import SagasPage from "./pages/episodes/sagasPage";
import EpisodesPerSagaPage from "./pages/episodes/episodesPerSagaPage";
import FruitsPage from "./pages/fruitsPage";
import MainLayout from "./layouts/mainLayout";
import CrewPage from "./pages/CrewPage";
import ZoroPage from "./pages/ZoroPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/episodes" element={<SagasPage />} />
        <Route path="/episodes/:sagaId" element={<EpisodesPerSagaPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/lost/zoro" element={<ZoroPage />} />
        <Route path="/fruits" element={<FruitsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
