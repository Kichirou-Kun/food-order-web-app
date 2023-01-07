import { APP_NAME } from "@constant/app";
import React from "react";
import { NextSeo } from "next-seo";

interface BaseSeoType {
  title?: string;
  description?: string;
}
const BaseSeo = ({ title, description }: BaseSeoType) => {
  const seoTitle = title ? `${title} - ${APP_NAME}` : APP_NAME;
  const seoDescription = description || "";
  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      openGraph={{ title: seoTitle, description: seoDescription }}
    />
  );
};

export default BaseSeo;
