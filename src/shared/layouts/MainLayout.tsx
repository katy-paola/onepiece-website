import { Outlet, useMatch } from "react-router-dom";
import Header from "../ui/Header";
import { cn } from "../lib/utils";

export default function MainLayout() {
  const fullWidth = useMatch("/episodes/:sagaId");
  return (
    <>
      <Header />
      <main
        className={cn(
          "flex flex-col gap-6 h-full",
          !fullWidth ? "max-w-3xl" : "max-w-300",
        )}
      >
        <Outlet />
      </main>
    </>
  );
}
