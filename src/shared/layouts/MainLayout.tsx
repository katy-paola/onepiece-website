import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="mt-18">
        <Outlet />
      </main>
    </>
  );
}
