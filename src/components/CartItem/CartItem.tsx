import { NEXT_IMAGE_QUALITY } from "@constant/app";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import React from "react";
import img from "../../../public/assets/meals/meal1.jpg";

const CartItem = () => {
  return (
    <article className="flex flex-row items-center justify-between rounded bg-PRIMARY_DARK p-4">
      <div className="flex flex-row space-x-2">
        <NextImage
          src={img}
          alt="cart item image"
          className="h-12 w-20 rounded object-cover"
          quality={NEXT_IMAGE_QUALITY}
          priority
        />
        <div className="flex flex-col">
          <Typography className="text-lg text-white">Blue Berries</Typography>
          <span className="lg:text-md text-sm text-white">$ 44</span>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-2">
        <IconButton>
          <PlusIcon className="h-6 w-6 text-white" />
        </IconButton>
        <input
          type={"number"}
          className="h-6 w-12 rounded-md p-1 px-2 outline-none"
        />
        <IconButton>
          <MinusIcon className="h-6 w-6 text-white" />
        </IconButton>
      </div>
    </article>
  );
};

export default CartItem;
