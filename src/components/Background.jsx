import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed w-full h-screen bg-zinc-800 -z-10">
        <div className="py-10 flex items-center justify-center text-zinc-600 font-semibold w-full">
          <h2>Documents.</h2>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[13vw] font-semibold tracking-tighter leading-none text-zinc-900">
            Docs.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Background;
