// links
import Link from "next/link";
// icons
import { RiLinkedinLine, RiXingLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return <div className="xl:absolute xl:right-[2%] flex items-center gap-x-4 text-lg lg:text-2xl font-bold">
    <Link href={'https://github.com/StefanPdm'} className="hover:text-accent transition-all duration-300" target="_blank"><RiGithubLine /></Link>
    <Link href={'https://www.linkedin.com/in/stefan-h-317377267'} className="hover:text-accent transition-all duration-300" target="_blank"><RiLinkedinLine /></Link>
    <Link href={'https://www.xing.com/profile/Stefan_Heinemann36/cv'} className="hover:text-accent transition-all duration-300" target="_blank"><RiXingLine /></Link>
  </div>;
};

export default Socials;
