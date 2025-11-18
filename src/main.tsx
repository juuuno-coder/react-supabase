import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.tsx"; // 메인페이지
import SignUp from "./pages/auth/sign-up.tsx"; // 회원가입 페이지
import SignIn from "./pages/auth/sign-in.tsx"; // 회원가입 페이지
import CreateTopic from "./pages/topic/create-topic.tsx"; // 토픽 작성 페이지
import DetailTopic from "./pages/topic/detail-topic.tsx"; // 토픽 조회 페이지
import UpdateTopic from "./pages/topic/update-topic.tsx"; // 토픽 수정 페이지
import Rootlayout from "./pages/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route path="/" element={<App />} />
          {/* AUTH */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* TOPIC */}
          <Route path="/create-topic" element={<CreateTopic />} />
          <Route path="/topic/:id" element={<DetailTopic />} />
          <Route path="/topic/:id/edit" element={<UpdateTopic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
