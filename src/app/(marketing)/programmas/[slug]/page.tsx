export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Program: {slug}</h1>
      <p>Individual program page — coming soon</p>
    </main>
  );
}
