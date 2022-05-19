export default function MadeBy() {
  return (
    <div className="absolute bottom-3 right-3 text-white">
      <span className="font-bold">Remix Conf Frames</span>{" "}
      <span> brought to you by </span>
      <a
        className="underline text-white"
        href="https://tedis.me"
        target="_blank"
      >
        Tedis
      </a>
      <span role="img" aria-label="wave">
        {" "}
        👋
      </span>
    </div>
  );
}
