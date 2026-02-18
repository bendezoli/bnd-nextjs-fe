import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";

function blockRenderer(block: Block, index: number) {
  //   console.log(block, "block in blockRenderer", index, "index");
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    //   return <pre>{JSON.stringify(block, null, 2)}</pre>;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer(props: { blocks: Block[] }) {
  console.log(props.blocks, "blocks in BlockRenderer");
  return props.blocks.map((block, index) => blockRenderer(block, index));
}
