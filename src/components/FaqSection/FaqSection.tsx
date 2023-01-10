import FaqItem from "@components/FaqItem";
import SectionTitle from "@components/SectionTitle";
import { faqs } from "@constant/dummyData";
import Container from "@ui/Container";
import React from "react";

const FAQ = () => {
  return (
    <section className="pt-32" id="faq">
      <Container>
        <SectionTitle title="FAQ" text="How To Use Our Website" />

        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              title={faq.title}
              description={faq.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
