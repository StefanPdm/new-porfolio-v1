// next image
import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-24 bottom-14 xl:-left-32 xl:-bottom-10 rotate-12
  mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] h-[300px] xl:h-[400px]">
    <Image
      src={'/bulb.png'}
      sizes="260px 200px"
      className="w-full h-full"
      alt="bulb"
      fill
    />
  </div>;
};

export default Bulb;
