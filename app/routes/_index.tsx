import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New TWOP App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-dvh bg-gradient-30 dark:bg-gradient-8 flex place-content-center place-items-center">
      <div className="max-w-content-3 grid gap-5 bg-surface-2 shadow-5 rounded-2xl p-8 hover:translate-y-5 ease-spring-3">
        <header>
          <h1 className="text-5 text-ink-1">Remix | Tailwind | Open Props</h1>
          <p className="text-ink-2">TWOP</p>
        </header>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
              className="text-link"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
              className="text-link"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
              className="text-link"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
