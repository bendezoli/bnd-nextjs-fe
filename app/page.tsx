import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

const loader = async () => {
  const data = await getHomePage();
  console.log("Raw API data:", data);
  if (!data) notFound();
  return data;
};

export default async function Home() {
  const data = await loader();

  console.log(data, "data");

  return (
    <div>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
