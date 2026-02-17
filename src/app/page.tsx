import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

const loader = async () => {
  const data = await getHomePage();

  if (!data) notFound();
  return { ...data.data };
};

export default async function Home() {
  const data = await loader();
  const blocks = data.blocks || [];

  return (
    <div>
      <main>
        {/* <pre>{JSON.stringify(blocks[0], null, 2)}</pre> */}

        <HeroSection {...blocks[0]} />
        <InfoBlock {...blocks[1]} />
      </main>
    </div>
  );
}
