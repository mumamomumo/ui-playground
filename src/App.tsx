import "./App.css";
import SlideOutArrowButtonCard from "./components/Cards/SlideOutArrowButtonCard";
import SlideOutInputCard from "./components/Cards/SlideOutInputCard";
import TextInputCard from "./components/Cards/TextInputCard";
import TypewriterCard from "./components/Cards/TypewriterCard";

const App = () => {
  return (
    <div class="contents">
      <section class="hero place-content-center min-h-72 bg-white text-black">
        <h1 class="text-4xl text-center page-title p-5">UI testing grounds</h1>
        <p class="text-center">
          Where I imagine <span class="text-xs">(or find)</span> UI tidbits and
          try to make them without any external libraries
        </p>
      </section>
      <section class="ui-tidbits flex border-t-4 p-5 gap-5 flex-wrap justify-baseline px-10 ">
        <TextInputCard />
        <SlideOutInputCard />
        <TypewriterCard />
        <SlideOutArrowButtonCard />
      </section>
      <section class="scrap-area border-t-4 h-screen bg-gray-400">
        <h1 class="text-4xl text-center page-title p-5">Failures</h1>
        <p class="text-center">The failed attempts of my work above</p>
      </section>
    </div>
  );
};

export default App;
