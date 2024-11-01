import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProtectRoute from "./assets/components/ProtectRoute";
import LoginRegister from "./assets/components/LoginRegister/LoginRegister";
import Community from "./assets/components/Community/Community";
import Home from "./assets/components/Home/components/Home";
import Blog from "./assets/components/Blog/Blog";
import Test from "./assets/components/Test/Test";
import Result from "./assets/components/Test/Result/Result";
import "./App.css"
import AnxietyTest from "./assets/components/Test/AnxityTest";
import Solution from "./assets/components/Solutions/Solution";
import ChatComponent from "./assets/components/chat/ChatComponent";
import BipolarTest from "./assets/components/Test/BipolarTest";
import DepressionTest from "./assets/components/Test/DepressionTest";
import PtsdTest from "./assets/components/Test/PtsdTest";
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/community" element={<ProtectRoute>
            <Community /> </ProtectRoute>} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test/result" element={<Result/>}/>
          <Route path="/anxTest" element={<AnxietyTest/>}/>
          <Route path="/bipTest" element={<BipolarTest/>}/>
          <Route path="/depTest" element={<DepressionTest/>}/>
          <Route path="/ptsdTest" element={<PtsdTest/>}/>
          <Route path="/solutions" element={<Solution/>}/>
          <Route path="/logout" element={<Logout />} />
          <Route path="chat" element={<ChatComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
