const loader = async () => {
  const path = "/api/home-page";
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";
  const url = new URL(path, BASE_URL);
  console.log(url);
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return { ...data.data };
};

export default async function Home() {
  const data = await loader();

  return (
    <div>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
