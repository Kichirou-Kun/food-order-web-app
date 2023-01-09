import Typography from "@ui/Typography";
import React from "react";

interface Props {
  title: string;
  text: string;
}

const SectionTitle = ({ title, text }: Props) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <Typography variant="h5" className="uppercase text-MAIN_COLOR">
        {title}
      </Typography>
      <Typography
        variant="h2"
        className="mt-4  text-center capitalize text-DARK_BLUE"
      >
        {text}
      </Typography>
    </div>
  );
};

export default SectionTitle;
