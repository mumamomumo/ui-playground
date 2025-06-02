import { createSignal } from "solid-js";

type UICardProps = {
  children: any;
  className?: string;
};

const UICard = (props: UICardProps) => {
  const getNewColor = () => {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  };

  const [backgroundColor, setBackgroundColor] = createSignal(getNewColor());

  return (
    <div
      class={
        props.className +
        " ui-card min-w-[100px] min-h-[100px] p-4 place-content-center cursor-pointer relative"
      }
      style={{
        "background-color": backgroundColor(),
      }}
      onClick={() => setBackgroundColor(getNewColor())}
    >
      {/* <div class="absolute top-5 left-5"></div> - TODO*/}
      <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
    </div>
  );
};

export default UICard;
