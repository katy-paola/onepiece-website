import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 max-w-3xl">
        <Outlet />
      </main>
    </>
  );
}
