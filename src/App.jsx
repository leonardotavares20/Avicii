import Header from "./components/Header/Header";
import BannerMain from "./components/BannerMain/BannerMain";
import InMemory from "./components/InMemory/InMemory";
import ShareMemories from "./components/ShareMemories/ShareMemories";

function App() {
  return (
    <>
      <Header />
      <main>
        <BannerMain />
        <InMemory />
        <ShareMemories />
      </main>
    </>
  );
}

export default App;
