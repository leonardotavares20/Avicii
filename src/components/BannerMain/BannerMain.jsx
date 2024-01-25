import ImageBanner from "../../../public/banner-tim2.jpg";

export default function BannerMain() {
  return (
    <>
      <section className="min-h-96">
        <img src={ImageBanner} alt="" />
      </section>
    </>
  );
}
