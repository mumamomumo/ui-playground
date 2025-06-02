import { createSignal, Show, type JSX } from "solid-js";

type TextInputProps = {
  placeholder?: string;
  inputStyle?: JSX.CSSProperties;
  labelStyle?: JSX.CSSProperties;
};

const TextInput = (props: TextInputProps) => {
  const [inputFocused, setInputFocused] = createSignal(false);

  return (
    <div>
      <Show when={typeof props.placeholder != undefined}>
        <label
          class={
            "custom-input-label " + (inputFocused() ? "focused" : "unfocused")
          }
          style={{
            ...props.labelStyle,
          }}
        >
          {props.placeholder}
        </label>
      </Show>
      <input
        class="custom-input-area"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        style={{
          ...props.inputStyle,
        }}
      />
    </div>
  );
};

export default TextInput;
