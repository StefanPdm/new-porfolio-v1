// next image
import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl: max-w-none">
    <Image src={'/avatar-5.png'} width={737} height={737} alt="portrait"
      className="translate-z-0 w-full h-full"
    />
  </div>;
};

export default Avatar;
