import { describe, expect, it } from "vitest";

import { cn, slugify } from "./utils";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", false, "b", null, undefined, "c")).toBe("a b c");
  });
});

describe("slugify", () => {
  it("lowercases, strips accents and collapses separators", () => {
    expect(slugify("  Héllo,   Wörld! ")).toBe("hello-world");
  });

  it("returns an empty string for symbol-only input", () => {
    expect(slugify("!!!")).toBe("");
  });
});
