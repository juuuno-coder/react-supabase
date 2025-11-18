import { AppFooter, AppHeader } from "@/components/common";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

function Rootlayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-screnn flex-1 ">
        <AppHeader />
        <main className="w-full flex-1 flex justify-center">
          <div className="w-full max-w-[1328px] h-full flex justify-center ">
            <Outlet />
          </div>
        </main>

        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default Rootlayout;
