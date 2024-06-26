// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiMiniWrenchScrewdriver,
  HiFingerPrint
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiMiniWrenchScrewdriver /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
  {
    name: "impress",
    path: "/impress",
    icon: <HiFingerPrint />,
  },
];

// next link
import Link from "next/link";
// next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed
   h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/* inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4
     md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathName ? 'text-accent' : 'text-white'} relative flex items-center group
           hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute hidden xl:flex pr-[50px] right-0 opacity-0 xl:group-hover:opacity-100 transition-all duration-300 animate-shake">
                <div className=" relative flex items-center px-[12px] py-[3px] rounded-[6px] backdrop-blur-[10px] bg-white/40">
                  <div className="text-[12px] leading-none font-semibold capitalize text-black">
                    {link.name}
                  </div>
                  {/* triangle */}
                  {/* <div
                    className="border-solid border-l-white/30 border-l-8 border-y-transparent border-y-[8px]
                border-r-0 absolute -right-[9px]"
                  >
                  </div> */}
                  <div
                    className="border-solid border-l-white/40 border-l-8 border-y-transparent border-y-[8px]
                border-r-0 absolute -right-[10px]"
                  >
                  </div>
                  <div
                    className="border-solid border-l-black/20 border-l-8 border-y-transparent border-y-[8px]
                border-r-0 absolute -right-[16px]"
                  >
                  </div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
