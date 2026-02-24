import { Card, type CardProps } from "@/components/Card";

export const BlogCards = (props: Readonly<CardProps>) => (
  <>
    {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    <Card {...props} basePath="blog" />
  </>
);
