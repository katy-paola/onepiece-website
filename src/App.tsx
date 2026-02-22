import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SagasPage from "./pages/episodes/SagasPage";
import EpisodesPerSagaPage from "./pages/episodes/EpisodesPerSagaPage";
import FruitsPage from "./pages/FruitsPage";
import MainLayout from "./layouts/MainLayout";
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
