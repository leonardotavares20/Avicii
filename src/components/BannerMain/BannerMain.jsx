import ImageBanner from "/public/banner-tim2.jpg";
import TitleMemoryBoard from "/public/title-memory-board.svg";
import NameAvici from "/public/avicii.svg";

export default function BannerMain() {
  return (
    <>
      <section className="w-full relative bottom-8 h-bannerContainer">
        <div className="grid h-full justify-items-center w-full">
          <img
            className="h-full w-banner object-cover relative bottom-48"
            src={ImageBanner}
            alt=""
          />
          <div className="flex flex-col absolute top-2/4 items-center w-1/2">
            <img
              className="w-5/6"
              src={TitleMemoryBoard}
              alt="The Avicii memory board"
            />
            <p className="uppercase text-xl inLoving">In Loving Memory</p>
            <p className="text-min mt-1 tracking-wide dataMemory">
              1989.09.08 – 2018.04.20
            </p>
            <img className="mt-10" src={NameAvici} alt="Avicii" />
          </div>
        </div>
      </section>
    </>
  );
}
