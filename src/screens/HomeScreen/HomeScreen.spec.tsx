import { render, screen } from "@testing-library/react";
import HomeScreen from ".";

it("renders learn react link", () => {
  render(<HomeScreen />);
  screen.getByText(/Sobre/i);
});
