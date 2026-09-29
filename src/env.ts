import { z } from "zod";

/**
 * Single source of truth for environment variables.
 *
 * - Add every variable here and in `.env.example`.
 * - Server-only variables must never be prefixed `NEXT_PUBLIC_`.
 * - Parsing fails fast at import time with a readable error instead of an
 *   `undefined` surfacing deep in the app.
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  // DATABASE_URL: z.string().url(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
});

export const schema = serverSchema.extend(clientSchema.shape);

export type Env = z.infer<typeof schema>;

export function parseEnv(source: Record<string, string | undefined>): Env {
  const result = schema.safeParse(source);
  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid environment variables:\n${issues}`);
  }
  return result.data;
}

// Next.js inlines `process.env.NEXT_PUBLIC_*` only when accessed literally,
// so client variables are listed explicitly instead of spreading `process.env`.
export const env: Env = parseEnv({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
