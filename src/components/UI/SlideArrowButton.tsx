import "./css/SlideArrowButton.css";

type SlideArrowButtonProps = {
  background?: string;
  color?: string;
  imageURL?: string;
};

const SlideArrowButton = (props: SlideArrowButtonProps) => {
  return (
    <button
      class="slide-out-arrow-button"
      style={{
        "border-radius": "0.5rem",
        color: props.color || "white",
        background: props.background || "black",
      }}
    >
      <div
        class="outside"
        style={{
          "mask-image": `url(${props.imageURL})`,
          // "mask-repeat": "no-repeat",
          background: props.color || "white",
        }}
      />
      <p>Click</p>
      <div
        class="inside"
        style={{
          "mask-image": `url(${props.imageURL})`,
          // "mask-repeat": "no-repeat",
          background: props.color || "white",
        }}
      />
    </button>
  );
};

export default SlideArrowButton;
