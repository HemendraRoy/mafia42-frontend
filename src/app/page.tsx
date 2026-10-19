import Link from "next/link";

const pages = [
  {
    name: "RP Ranking",
    href: "/rankings/rp",
  },
  {
    name: "Guild Ranking",
    href: "/rankings/guild",
  },
  {
    name: "Fame Ranking",
    href: "/rankings/fame",
  },
  {
    name: "Event Box Simulator",
    href: "/events",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <h1 className="mb-3 text-4xl font-bold">Mafia42</h1>

        <p className="mb-6 text-gray-500">
          Rankings and Event Box Simulator
        </p>

        <div className="mb-8 rounded-xl border border-red-300 bg-red-50 p-5 text-red-800">
          <p className="font-semibold">
            Mafia42 Rankings has been discontinued as of October 19, 2026.
          </p>
          <p className="mt-2">
            Interested in continuing the project? 
            DM{" "}
            <span className="font-semibold">@wangjinzhu</span>{" "}
            on Discord to request access to the codebase and carry the project forward.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-xl border border-gray-300 p-6 transition active:bg-gray-100 hover:border-gray-400 hover:bg-gray-50"
            >
              <h2 className="text-xl font-semibold">{page.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}