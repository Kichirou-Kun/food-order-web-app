import SectionTitle from "@components/SectionTitle";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import React from "react";
import { services } from "@utils/services";
import { NEXT_IMAGE_QUALITY } from "@constant/app";

const ServiceSection = () => {
  return (
    <section>
      <Container>
        <SectionTitle
          title="What we serve"
          text="Your Favourite Food Delivery Partner"
        />
        <Grid container className="gap-4">
          {services.map((service) => (
            <Grid
              key={service.id}
              item
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="flex cursor-pointer flex-col items-center justify-center rounded bg-white p-10">
                <NextImage
                  src={service.image}
                  alt="east to pay"
                  className="h-[150px] w-[150px] object-cover"
                  priority
                  quality={NEXT_IMAGE_QUALITY}
                />
                <Typography
                  variant="h4"
                  className="my-5 text-center text-DARK_BLUE"
                >
                  {service.title}
                </Typography>
                <Typography className="text-md text-center">
                  {service.desc}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ServiceSection;
