import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import React from "react";

interface Props {
  title: string;
  description: string;
}
const FaqItem = ({ title, description }: Props) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <article className="rounded bg-white p-3">
      <div className="flex flex-row items-center justify-between py-3">
        <Typography variant="h5" className="text-DARK_BLUE">
          {title}
        </Typography>

        <IconButton onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </IconButton>
      </div>
      {toggle && (
        <Typography className="border-t py-3 text-gray-600">
          {description}
        </Typography>
      )}
    </article>
  );
};

export default FaqItem;
