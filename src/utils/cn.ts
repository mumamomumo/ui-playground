export function cn(...classes: (string | undefined)[]) {
  let className = "";

  classes.forEach((value, i, array) => {
    if (value === "") return
    className += value + ((i < array.length - 1) ? " " : "")
  })
  return className;
}
