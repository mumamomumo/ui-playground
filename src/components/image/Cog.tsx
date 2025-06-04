import type { ImageProps } from "../../types/ImagePropType";

const Cog = (props: ImageProps) => {
  return (
    <div class={props.className}>
      <img
        src="/images/Settings.svg"
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default Cog;
