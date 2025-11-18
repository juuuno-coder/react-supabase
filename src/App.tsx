import { Funnel, Search } from "lucide-react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import {
  Monitor,
  Pen,
  MousePointerClick,
  PenTool,
  Camera,
  Sparkles,
} from "lucide-react";

function App() {
  const categories = [
    {
      icon: Pen,
      label: "전체",
      isActive: true, // 라벨 색상 통제를 위한 속성
    },
    {
      icon: Monitor,
      label: "IT/프로그래밍",
      isActive: false,
    },
    {
      icon: Pen,
      label: "디자인ㆍ일러스트",
      isActive: false,
    },
    {
      icon: Pen,
      label: "인문학",
      isActive: false,
    },
    {
      icon: MousePointerClick,
      label: "마케팅",
      isActive: false,
    },
    {
      icon: PenTool,
      label: "서비스ㆍ전략 기획",
      isActive: false,
    },
    {
      icon: Camera,
      label: "자기계발",
      isActive: false,
    },
    {
      icon: Sparkles,
      label: "스타트업",
      isActive: false,
    },
    {
      icon: Pen,
      label: "데이터 사이언스",
      isActive: false,
    },
  ];

  return (
    <div className="text-white">
      <main className=" min-h-[1000px] h-full w-full flex flex-col items-center gap-4 ">
        <div className="flex flex-col items-center text-2xl py-8">
          <p>나의 학습 여정이,</p>
          <p>나만의 창작으로 이어지는 플랫폼</p>
        </div>
        <div className="flex border w-full max-w-128 justify-between p-2 items-center rounded-full gap-2">
          <div className="flex items-center justify-between gap-4">
            <Search size={18} />
            <Input
              className="border-0 min-w-80 bg-transparent "
              placeholder="관심 있는 클래스, 토픽 주제를 검색하세요."
            />
          </div>
          <div className="text-smn">
            <Funnel className="flex md:hidden" />
            <Button className="hidden md:flex rounded-full ">검색</Button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-centrer justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;

              return (
                <div className="w-33 h-20 bg-gray-900/50 rounded-lg flex flex-col justify-center items-center gap-2 text-gray-400">
                  <IconComponent className="text-neutral-700" />
                  <p className="text-sm whitespace-nowrap">{category.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div>핫토픽</div>
          <div>
            지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
            얻어보세요.
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
