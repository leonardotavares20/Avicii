import ImageBanner from "../../../public/banner-tim2.jpg";
import TitleMemoryBoard from "../../../public/title-memory-board.svg";
import NameAvici from "../../../public/avicii.svg";

export default function BannerMain() {
  return (
    <>
      <section className="w-full h-bannerContainer">
        <img className="h-full w-banner object-cover" src={ImageBanner} alt="" />
        <div className="flex justify-center top-60 absolute w-full">
          <div className="flex flex-col items-center w-1/2">
            <img src={TitleMemoryBoard} alt="" />
            <p className="uppercase text-xl inLoving">In Loving Memory</p>
            <p className="text-min mt-1 tracking-wide dataMemory">
              1989.09.08 – 2018.04.20
            </p>
            <img className="mt-10" src={NameAvici} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
