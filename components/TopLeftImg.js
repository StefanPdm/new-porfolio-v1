// next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] h-[200px] xl:h-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        alt="top-left-image"
        className="w-auto h-auto"
        fill
        sizes="400px 400px"
        placeholder="blur"
        blurDataURL="/top-left-img.png"
      />
    </div>
  );
};

export default TopLeftImg;
