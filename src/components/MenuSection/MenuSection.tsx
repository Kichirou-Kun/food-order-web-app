import MenuFilterButton from "@components/MenuFilterButton";
import MealItem from "@components/MealItem";
import SectionTitle from "@components/SectionTitle";
import { meals } from "@constant/dummyData";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import React from "react";

const MenuSection = () => {
  return (
    <section className="bg-BODY_BG pt-32 pb-4" id="menu">
      <Container>
        <SectionTitle
          title="Our Menu"
          text="Menu That Always Make You Fall In Love"
        />

        <Grid container className="gap-6">
          <Grid item className="col-span-12 lg:col-span-4">
            <div className="rounded bg-white p-4">
              <MenuFilterButton direction="column" />
            </div>
          </Grid>
          <Grid item className="col-span-12 lg:col-span-8">
            <Grid container className="gap-4">
              {meals.map((meal) => (
                <Grid
                  key={meal.id}
                  item
                  className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 "
                >
                  <MealItem
                    name={meal.name}
                    price={meal.price}
                    id={meal.id}
                    image={meal.image}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MenuSection;
