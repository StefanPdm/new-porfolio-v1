// next Link
import Link from "next/link";
// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-50 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto"> {/* container = max-width 1200px */}
        <div className="flex flex-col xl:flex-row justify-between items-center py-8">
          {/* logo */}
          <Link href="/">
            <svg width="213" height="50" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="32" fontFamily=" " fontSize="24" fontWeight='700' fill="white">stefan </text>
              <text x="80" y="32" fontFamily=" " fontSize="24" fill="white" fontWeight='200' letterSpacing='-0.8'>heinemann</text>
              <text x="208" y="32" fontFamily=" " fontSize="24" fill="#ff3225">.</text>
            </svg>
          </Link>
          {/* socials */}
          <Socials />
        </div>

      </div>
    </header>
  )
};

export default Header;
