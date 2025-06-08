import { createSignal, Show, type JSX } from "solid-js";
import "./css/TextInput.css";
import { cn } from "../../utils/cn";
type TextInputProps = {
  placeholder?: string;
  background?: string;
  inputStyle?: JSX.CSSProperties;
  containerClassName?: string;
};

const TextInput = (props: TextInputProps) => {
  const [inputFocused, setInputFocused] = createSignal(false);

  let inputRef: HTMLInputElement | undefined;
  if (!props.background) props.background = "white";
  return (
    <div class={cn("custom-input-container", props.containerClassName)}>
      <Show when={typeof props.placeholder != undefined}>
        <label
          class={
            "custom-input-label " + (inputFocused() ? "focused" : "unfocused")
          }
          style={{
            background: props.background,
            color: props.inputStyle?.color,
          }}
        >
          {props.placeholder}
        </label>
      </Show>
      <input
        class="custom-input-area"
        onFocus={() => setInputFocused(true)}
        onBlur={(e) => {
          if (e.target.value === "") setInputFocused(false);
        }}
        style={{ ...props.inputStyle, background: props.background }}
        ref={inputRef}
      />
    </div>
  );
};

export default TextInput;
