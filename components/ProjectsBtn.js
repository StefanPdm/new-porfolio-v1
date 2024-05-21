//  next image
import Image from "next/image";
// next Link
import Link from "next/link";
// icons
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 ">
    <Link href={'/work'} className="relative w-[150px] md:w-[185px] h-[150px] md:h-[185px] flex justify-center items-center
    bg-circleStar bg-cover bg-center bg-no-repeat group">
      <Image src={'/rounded-text.png'} width={141} height={148} alt=""
        className="animate-spin-slow w-full h-full max-w-[121px] md:max-w-[141px] max-h-[128px] md:max-h-[148px]"
      ></Image>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2
      transition-all duration-300"></HiArrowRight>
    </Link>
  </div>;
};

export default ProjectsBtn;
