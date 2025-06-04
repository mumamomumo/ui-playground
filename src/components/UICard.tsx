type UICardProps = {
  children: any;
  className?: string;
  background?: string;
  onClick?: (e: any) => any;
};

const UICard = (props: UICardProps) => {
  return (
    <div
      class={
        props.className +
        " ui-card min-w-[100px] min-h-[100px] p-4 place-content-center cursor-pointer relative"
      }
      style={{
        "background-color": props.background,
      }}
      onClick={props.onClick}
    >
      <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
    </div>
  );
};

export default UICard;
