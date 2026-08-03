import { BrowserRouter, Routes, Route } from "react-router";
import { SECTIONS, SECTION_IDS } from "./config/sections.config";
import { useActiveSection } from "./hooks/useActiveSection";
import Nav from "./components/nav";
import Footer from "./components/footer";

function Home() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      <Nav activeId={activeId} />
      <main className="bg-blush">
        {SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
