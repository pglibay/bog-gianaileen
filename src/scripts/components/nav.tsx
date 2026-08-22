import { NAV_SECTIONS } from "../config/sections.config";
import { useNavigate } from "react-router";

interface NavProps {
  activeId: string;
}

const Nav = ({ activeId }: NavProps) => {
  const navigate = useNavigate();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 flex items-center justify-between p-5 lg:flex-row">
        <button
            onClick={() => navigate("/")}
            className="cursor-pointer"
        >
          <img src="./ga.svg" alt="G|A" className="h-10 w-auto" />
        </button>
        <nav className="flex items-center space-x-6">
          {NAV_SECTIONS.map(({ id, navItem }) => {
            const isActive = activeId === id;
            const { label, Icon } = navItem!;

            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`group transition hover:text-dusty-rose ${
                  isActive ? "text-dusty-rose font-semibold" : ""
                }`}
              >
                <Icon className="h-6 w-6 md:hidden" />
                <span className="hidden md:inline">{label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
