import type { ImageProps } from "../../types/ImagePropType";

const Palette = (props: ImageProps) => {
  return (
    <img
      src="/images/palette.svg"
      width={props.width}
      height={props.height}
      class={props.className}
    />
  );
};

export default Palette;
