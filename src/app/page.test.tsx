import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home page", () => {
  it("renders the heading and the CI checks", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "Web Starter" })).toBeInTheDocument();
    expect(screen.getByText("pnpm typecheck")).toBeInTheDocument();
  });
});
