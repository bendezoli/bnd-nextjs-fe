import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BASE_URL = getStrapiURL();

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              backgroundImage: {
                fields: ["url", "alternativeText"],
              },
              logo: {
                populate: {
                  logo: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              cta: true,
            },
          },
          //   "blocks.info-block": {
          //     populate: {
          //       image: {
          //         fields: ["url", "alternativeText"],
          //       },
          //     },
          //   },
        },
      },
    },
  },
  { arrayFormat: "comma" },
);
console.log("Constructed query string:", homePageQuery);

export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  console.log("Fetching from:", url.href);
  const response = await fetchAPI(url.href, { method: "GET" });
  console.log("API Response:", response);
  return response;
}
