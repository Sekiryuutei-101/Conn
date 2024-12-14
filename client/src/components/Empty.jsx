import Image from "next/image";
import React from "react";

function Empty() {
  return <div className=" m-2  flex flex-col rounded-xl bg-cold-sky justify-center ">
    <Image src="/connLogo2.gif" alt="Conn" height={300} width={300} />
  </div>;
}

export default Empty;
