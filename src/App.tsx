import "./App.css";
import SlideOutInputCard from "./components/Cards/SlideOutInputCard";
import TextInputCard from "./components/Cards/TextInputCard";

const App = () => {
  return (
    <div class="contents">
      <section class="hero place-content-center min-h-72 bg-white text-black">
        <h1 class="text-3xl text-center">UI testing grounds</h1>
        <p class="text-center">
          Where I imagine <span class="text-xs">(or find)</span> UI tidbits and
          try to make them
        </p>
      </section>
      <section class="ui-tidbits flex border-t-4 p-5 gap-5 flex-wrap justify-baseline px-10">
        <TextInputCard />
        <SlideOutInputCard />
      </section>
    </div>
  );
};

export default App;
