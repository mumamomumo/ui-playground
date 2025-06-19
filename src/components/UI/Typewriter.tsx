import { createEffect, createSignal, onMount, type JSX } from "solid-js";
type TypewriterTextProps = {
  className?: string;
  words: string[];
  typingSpeed: number;
  deleteSpeed?: number;
  type?: boolean;
  style?: JSX.CSSProperties;
  repeat?: boolean;
};

const TypewriterText = (props: TypewriterTextProps) => {
  const [currentWord, setCurrentWord] = createSignal(0);
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [displayWord, setDisplayWord] = createSignal("");
  const [deleting, setDeleting] = createSignal(false);

  let interval: number;
  let timeout: any;

  const TypeWord = () => {
    interval = setInterval(() => {
      console.log("Type word");

      if (currentIndex() === props.words[currentWord()].length) {
        setDeleting(true);
        clearInterval(interval);
        timeout = setTimeout(() => {
          console.log("Delete");

          DeleteWord();
        }, 1000);
        return;
      }

      setDeleting(false);
      setDisplayWord(
        (prev) => prev + props.words[currentWord()][currentIndex()]
      );
      setCurrentIndex((prev) => prev + 1);
    }, 1000 / props.typingSpeed);
  };
  const DeleteWord = () => {
    interval = setInterval(() => {
      if (!props.deleteSpeed || props.deleteSpeed <= 0) return;
      if (displayWord() === "") {
        setDeleting(false);
        setCurrentWord((prev) => (prev + 1) % props.words.length);
        setCurrentIndex(0);
        clearInterval(interval);
        timeout = setTimeout(() => TypeWord(), 1000);
        return;
      }
      setCurrentIndex((prev) => prev - 1);
      setDisplayWord((prev) => prev.slice(0, currentIndex()));
    }, 2000 / (props.deleteSpeed ? props.deleteSpeed : 1));
  };

  createEffect(() => console.log(currentIndex(), currentWord()));

  let typewriterRef: HTMLParagraphElement | undefined;

  const typewriterObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      clearInterval(interval);
      clearTimeout(timeout);
    } else {
      console.log(deleting());

      deleting() ? DeleteWord() : TypeWord();
    }
  });

  onMount(() => typewriterObserver.observe(typewriterRef!));

  return (
    <p class={props.className} ref={typewriterRef} style={props.style}>
      {displayWord()}
    </p>
  );
};

export default TypewriterText;
