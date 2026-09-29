import { Button } from "@/components/Button";

const checks = [
  { name: "Lint", command: "pnpm lint" },
  { name: "Format", command: "pnpm format:check" },
  { name: "Typecheck", command: "pnpm typecheck" },
  { name: "Tests", command: "pnpm test" },
  { name: "Build", command: "pnpm build" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-8 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">WebMDT</p>
        <h1 className="text-3xl font-semibold tracking-tight">Web Starter</h1>
        <p className="text-zinc-600">
          Next.js, TypeScript, Tailwind, Vitest. Every pull request runs the checks below.
        </p>
      </header>

      <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200">
        {checks.map((check) => (
          <li key={check.name} className="flex items-center justify-between px-4 py-3">
            <span className="font-medium">{check.name}</span>
            <code className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-sm">
              {check.command}
            </code>
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  );
}
