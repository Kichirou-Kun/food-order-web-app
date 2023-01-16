import Typography from "@ui/Typography";
import NextImage from "next/image";
import React from "react";
import img from "../../../public/assets/hero/main_img.png";

const MenuItem = () => {
  return (
    <article className="">
      <div className="flex w-[50%] flex-row space-x-4">
        <NextImage
          src={img}
          alt="menu item image"
          className="h-20 w-32 object-contain"
        />
        <div className="flex flex-col gap-2">
          <Typography variant="h5" className="font-semibold text-DARK_BLUE ">
            This is Title
          </Typography>
          <span className="text-gray-500">$ 44</span>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
