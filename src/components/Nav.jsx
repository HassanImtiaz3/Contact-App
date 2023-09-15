import React from "react";
import { SiFirebase } from "react-icons/si";

function Nav() {
  return (
    <>
      <div
        className="h-[60px] bg-white 
   my-4 rounded-lg flex justify-center
   items-center gap-2"
      >
        <div className="text-yellow-500">
          <SiFirebase />
        </div>
        <h1 className="font-bold">FireBase Contact App</h1>
      </div>
    </>
  );
}

export default Nav;
