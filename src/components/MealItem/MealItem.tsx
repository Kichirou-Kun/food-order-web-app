import { PlusIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name?: string;
  id?: string;
  image?: string | any;
  price?: string;
}
const MealItem = ({ name, id, image, price }: Props) => {
  return (
    <article className="cursor-pointer overflow-hidden rounded bg-YELLOW">
      <Link href={`meal/${id}`}>
        <NextImage
          src={image}
          alt={name || "The Meal Item"}
          className="h-[200px] w-full rounded object-cover lg:h-[180px] xl:h-[200px] "
        />
      </Link>
      <div className="p-4 lg:p-2">
        <h5 className="lg:text-md text-lg font-semibold capitalize text-DARK_BLUE">
          {name}
        </h5>

        <div className="mt-2 flex flex-row items-center justify-between">
          <Typography className=" text-md text-gray-600">{price}</Typography>
          <IconButton>
            <PlusIcon className="h-5 w-5" />
          </IconButton>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
