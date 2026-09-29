import { describe, expect, it } from "vitest";

import { parseEnv } from "./env";

describe("parseEnv", () => {
  it("applies defaults when optional variables are missing", () => {
    const env = parseEnv({});
    expect(env.NODE_ENV).toBe("development");
    expect(env.NEXT_PUBLIC_SITE_URL).toBe("http://localhost:3000");
  });

  it("throws a readable error for invalid values", () => {
    expect(() => parseEnv({ NEXT_PUBLIC_SITE_URL: "not-a-url" })).toThrow(
      /Invalid environment variables:[\s\S]*NEXT_PUBLIC_SITE_URL/,
    );
  });
});
