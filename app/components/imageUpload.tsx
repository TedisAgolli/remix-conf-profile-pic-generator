import { useRef } from "react";

declare interface PropTypes {
  setSelectedImage: (img: File | null) => void;
  children: React.ReactNode;
}
export default function ImageUpload({ setSelectedImage, children }: PropTypes) {
  const hiddenFileInput = useRef(null);
  return (
    <div className="relative flex flex-col items-center pt-10">
      <button
        type="button"
        className="block h-[400px] w-[400px] rounded-full border-2 border-dashed border-gray-300 p-12 text-center shadow-lg shadow-[#477e46]/50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => hiddenFileInput.current.click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-shadow-pink mt-2 block text-sm font-medium text-fuchsia-200">
          Upload your image
        </span>
      </button>
      {children}
      <input
        type="file"
        ref={hiddenFileInput}
        name="myImage"
        className="hidden"
        onChange={(event) => {
          if (event.target.files) {
            setSelectedImage(event.target.files[0]);
          }
        }}
      />
    </div>
  );
}
