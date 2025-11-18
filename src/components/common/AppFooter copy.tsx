import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui";

function AppFooter() {
  return (
    <footer className="w-full flex items-center p-6 bg-[#121212]">
      <div className="w-full max-w-[1328px] flex flex-col items-start justify-between">
        <div className="flex flex-col text-white">
          <h3>나의 학습 여정이,</h3>
          <h3>나만의 창작으로 이어지는 플랫폼</h3>
        </div>
        <div className="flex items-center">
          <Button>유튜브</Button>
          <Button>스레드</Button>
        </div>
      </div>
      <div>
        <p>이용약관</p>
        <Separator orientation="vertical" className="h-3!" />
        <p>개인정보처리방침</p>
      </div>
    </footer>
  );
}

export { AppFooter };
