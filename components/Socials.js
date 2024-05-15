// links
import Link from "next/link";
// icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiLinkedinLine, RiXingLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-4 text-lg lg:text-xl font-bold">
    <Link href={'https://github.com/StefanPdm'} className="hover:text-accent transition-all duration-300" target="_blank"><RiGithubLine /></Link>
    <Link href={''} className="hover:text-accent transition-all duration-300"><RiLinkedinLine /></Link>
    <Link href={''} className="hover:text-accent transition-all duration-300"><RiXingLine /></Link>
  </div>;
};

export default Socials;
