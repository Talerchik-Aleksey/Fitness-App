import { Route, Routes } from "react-router-dom";
import "./App.css";
import TabBar from "./components/tabbar/Tabbar";
import TopBar from "./components/topbar/Topbar";
import { Certificate } from "./pages/Certificate";
import { Home } from "./pages/Home";
import { Message } from "./pages/Message";
import { New } from "./pages/New";
import { Stats } from "./pages/Stats";
import WorkPage from "./pages/workPage";

function App() {
  return (
    <>
      <TopBar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/new" element={<New />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/workpage/id=:id" element={<WorkPage />} />
        </Routes>
      </div>
      <TabBar />
    </>
  );
}

export default App;
