import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import React from "react";
import bg from "../../../public/assets/hero/hero_image.png";
import { PlayIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { NEXT_IMAGE_QUALITY } from "@constant/app";

const HeroBanner = () => {
  return (
    <section className="py-36">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center lg:gap-4">
          <div className="w-full lg:w-[55%]">
            <Typography className="inline-block items-center rounded-full bg-YELLOW py-2 px-3 text-DARK_BLUE">
              More than Faster{" "}
              <RocketLaunchIcon className="inline-block h-5 w-5" />
            </Typography>

            <Typography
              variant="h1"
              className="my-10 capitalize text-DARK_BLUE"
            >
              Be the Fastest in delivering your{" "}
              <span className="text-MAIN_COLOR"> food</span>
            </Typography>
            <Typography className="text-TEXT_GRAY">
              Our job is to filling your tummy with delicious food and with fast
              and free delivery.
            </Typography>
            <div className="mt-10 flex flex-row space-x-6">
              <Button className="bg-MAIN_COLOR font-semibold text-white duration-150 ease-linear hover:opacity-90">
                Get Started
              </Button>
              <Button className="flex flex-row items-center space-x-2 duration-150 ease-linear hover:opacity-90">
                <div className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-white shadow">
                  <PlayIcon className="h-6 w-6 text-MAIN_COLOR" />
                </div>
                <span className="font-semibold text-DARK_BLUE">
                  Watch Video
                </span>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <NextImage
              src={bg}
              alt="Hero Banner Image"
              className="h-auto w-full object-cover lg:w-5/6"
              priority
              quality={NEXT_IMAGE_QUALITY}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
