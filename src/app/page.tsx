import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">Welcome to the DnD library</h1>
        <Image
          src="/dnd-logo.png"
          alt="DnD logo"
          width={500}
          height={500}
        />
        <p className="text-center">This is a simple site that uses the Open5e API to display information about Dnd</p>
      </main>
    </div>
  );
}
