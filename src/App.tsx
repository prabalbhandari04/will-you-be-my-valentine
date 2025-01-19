"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a blueberry cheesecake on top",
      "What about a strawberry smoothie?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep, I'm dead",
      "Ok, you're talking to Prabal's ghost",
      "Please babe",
      ":((((",
      "PRETTY PLEASE",
      "Tusi Rabb de vaste ha boldeh kudi",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear kiss"
            className="w-full max-w-sm"
          />
          <div className="my-4 text-2xl font-bold sm:text-4xl">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute love bear"
            className="w-full max-w-xs sm:max-w-sm"
          />
          <h1 className="my-4 text-2xl sm:text-4xl">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
            <button
              className="mb-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 sm:mb-0"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
