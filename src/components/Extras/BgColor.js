export default function BgColor(colors) {
  return (
    colors[Math.floor(Math.random() * colors.length)]
  );
}
