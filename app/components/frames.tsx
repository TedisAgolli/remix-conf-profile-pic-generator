import { Link, useMatches } from "@remix-run/react";

declare interface PropTypes {
  selectedImage: File | null;
}

export default function Frames({ selectedImage }: PropTypes) {
  const matches = useMatches();

  return (
    <div className="mb-8 flex basis-1/4 justify-center space-x-4 ">
      <Link
        className={`rounded px-2 py-1 text-lg font-bold text-white ${
          matches.some((route) => route.pathname.endsWith("square"))
            ? "bg-fuchsia-500"
            : "border border-gray-200"
        }`}
        to="square"
        state={{ image: selectedImage }}
      >
        Square
      </Link>
      <Link
        className={`rounded px-2 py-1 text-lg font-bold text-white ${
          matches.some((route) => route.pathname.endsWith("circle"))
            ? "border-2 border-white bg-fuchsia-500"
            : "border border-gray-200"
        }`}
        to="circle"
        state={{ image: selectedImage }}
      >
        Circle
      </Link>
      <Link
        className={`rounded px-2 py-1 text-lg font-bold text-white ${
          matches.some((route) => route.pathname.endsWith("circle_pink"))
            ? "border-2 border-white bg-fuchsia-500"
            : "border border-gray-200"
        }`}
        to="circle_pink"
        state={{ image: selectedImage }}
      >
        Circle Pink
      </Link>
    </div>
  );
}
