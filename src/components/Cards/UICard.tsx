import { createSignal, For, Show } from "solid-js";
import Tag from "./CardTags/Tag";
import { cn } from "../../utils/cn";

type TagType = Partial<
  Record<"script" | "css" | "html", "easy" | "medium" | "hard">
>;
type OptionType =
  | {
      name: string;
      type: "color" | "text" | "number" | "checkbox" | "area";
      value?: any;
      placeholder?: string;
      onChange: (newValue: any) => any;
    }
  | {
      name: string;
      type: "range";
      upperLimit: number;
      lowerLimit: number;
      step?: number;
      value?: number;
      onChange: (newValue: number) => any;
    };

type UICardProps = {
  children: any;
  className?: string;
  background?: string;
  tags?: TagType;
  options?: OptionType[];
  onClick?: (e: any) => any;
};

const UICard = (props: UICardProps) => {
  const [optionsOpen, setOptionsOpen] = createSignal(false);

  return (
    <div
      class={
        "ui-card min-w-[100px] min-h-[100px] p-4 place-content-center relative justify-items-center " +
        (props.className ? props.className : "")
      }
      style={{
        "background-color": props.background,
      }}
      onClick={props.onClick}
    >
      <div
        class="absolute right-5 bottom-5"
        onClick={() => setOptionsOpen((prev) => !prev)}
      >
        <div class="fancy-hover">
          <img
            width={25}
            src="/images/Settings.svg"
            class={cn(
              "card-settings transition-[rotate]",
              optionsOpen() ? "rotate-90" : "rotate-0"
            )}
          />
        </div>
        <Show when={optionsOpen()}>
          <div
            class="card-options cursor-default z-50 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <For each={props.options}>
              {(item) => (
                <div class="flex justify-between items-center">
                  <label for={item.name} class="text-nowrap">
                    {item.name}
                  </label>
                  {item.type == "range" ? (
                    <input
                      class="card-options-range"
                      name={item.name}
                      onChange={(e) =>
                        item.onChange(parseFloat(e.target.value))
                      }
                      value={item.value}
                      type={item.type}
                      min={item.lowerLimit}
                      max={item.upperLimit}
                      step={item.step}
                    />
                  ) : item.type === "checkbox" ? (
                    // When option type is a checkbox
                    <input
                      class="card-option-checkbox"
                      name={item.name}
                      onChange={(e) => item.onChange(e.target.checked)}
                      checked={item.value}
                      type={item.type}
                    />
                  ) : item.type === "area" ? (
                    <textarea
                      placeholder={item.placeholder}
                      value={item.value}
                      onChange={(e) => item.onChange(e.target.value)}
                      class="border-2 border-black m-2 p-2"
                    />
                  ) : (
                    <input
                      name={item.name}
                      class={`card-option-${item.type}`}
                      onChange={(e) => item.onChange(e.target.value)}
                      value={item.value}
                      type={item.type}
                      placeholder={item.placeholder}
                    />
                  )}
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
      <div class="ui-card-tags absolute top-5 left-5 flex flex-wrap max-w-full gap-2">
        <Show when={props.tags?.css != undefined}>
          <Tag width={25} level={props.tags?.css} type="css" />
        </Show>
        <Show when={props.tags?.script != undefined}>
          <Tag width={25} level={props.tags?.script} type="script" />
        </Show>
        <Show when={props.tags?.html != undefined}>
          <Tag width={25} level={props.tags?.html} type="html" />
        </Show>
      </div>
      {props.children}
    </div>
  );
};

export default UICard;
