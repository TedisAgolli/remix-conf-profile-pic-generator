import { Outlet } from "@remix-run/react";
import * as htmlToImage from "html-to-image";
import { useState } from "react";
import Frames from "~/components/frames";
import ImageUpload from "~/components/imageUpload";

function saveAs(blob: string, fileName: string) {
  var elem = window.document.createElement("a");
  elem.href = blob;
  elem.download = fileName;
  elem.style = "display:none;";
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === "function") {
    elem.click();
  } else {
    elem.target = "_blank";
    elem.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  }
  URL.revokeObjectURL(elem.href);
  elem.remove();
}

function onCapture(id: string) {
  const el = document.getElementById(id);
  if (el) {
    htmlToImage.toPng(el).then(function (dataUrl) {
      saveAs(dataUrl, "remix-profile-pic.png");
    });
  }
}

export default function image() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <>
      <div className="mt-12 flex flex-col items-center space-y-5">
        <h1 className="text-5xl ">
          <span className="text-shadow-blue text-cyan-200 focus:outline-none">
            Remix
          </span>{" "}
          <span className="text-shadow-red text-red-200 focus:outline-none">
            Conf
          </span>{" "}
          <span className="text-shadow-yellow text-yellow-200 focus:outline-none">
            Frames
          </span>
        </h1>
        <Frames selectedImage={selectedImage} />
        {selectedImage ? (
          <>
            <div>
              <div
                id="img-to-export"
                className="relative flex basis-2/4 items-center justify-center bg-transparent"
              >
                <img
                  alt="not found"
                  className="h-[400px] w-[400px] justify-self-auto rounded-full"
                  src={selectedImage && URL.createObjectURL(selectedImage)}
                />
                <Outlet />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="rounded bg-teal-300 px-3 py-2 text-lg font-bold text-white"
                onClick={() => onCapture("img-to-export")}
              >
                Capture
              </button>
              <button
                onClick={() => {
                  setSelectedImage(null);
                }}
                className="rounded text-lg text-white underline"
              >
                Clear
              </button>
            </div>
          </>
        ) : (
          <>
            <ImageUpload setSelectedImage={setSelectedImage}>
              <Outlet />
            </ImageUpload>
          </>
        )}
      </div>
    </>
  );
}
