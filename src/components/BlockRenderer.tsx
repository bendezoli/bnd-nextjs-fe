import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { FeaturedArticle } from "@/components/blocks/FeaturedArticle";

function blockRenderer(block: Block, index: number) {
  // console.log(block, "block in blockRenderer", index, "index");
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} darken />;
    //   return <pre>{JSON.stringify(block, null, 2)}</pre>;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    case "blocks.featured-article":
      return <FeaturedArticle {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer(props: { blocks: Block[] }) {
  return props.blocks.map((block, index) => blockRenderer(block, index));
}
