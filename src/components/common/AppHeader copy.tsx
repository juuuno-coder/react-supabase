import { Separator } from "@radix-ui/react-separator";
import { NavLink } from "react-router";

function AppHeader() {
  return (
    <header className="w-full h-12 bg-[#121212] flex justify-center items-center   px-4 text-white">
      <div className="w-full max-w-[1328px] h-ull flex items-center justify-between">
        <p>클래스</p>
        <Separator></Separator>
        <p>배움노트</p>
        <p>토픽인사이트</p>
        <p>밍랩</p>
      </div>
      <div className="flex">
        <NavLink to={"/sign-in"}>로그인</NavLink>
        <Separator orientation="vertical" className="h-3!" />
        <NavLink to={"/sign-in"}>우리가 하는 일</NavLink>
      </div>
      <img src="" className="" />
      <div className="flex"></div>
      <div></div>
    </header>
  );
}

export { AppHeader };
