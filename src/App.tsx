import "./App.css";
import TextInput from "./components/UI/TextInput";
import UICard from "./components/UICard";

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
      <section class="ui-tidbits flex border-t-4 p-5">
        <UICard className="aspect-[6/5]">
          <TextInput placeholder="Input" />
        </UICard>
      </section>
    </div>
  );
};

export default App;
