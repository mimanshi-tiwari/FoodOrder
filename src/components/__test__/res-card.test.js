import { render, screen } from "@testing-library/react";
import ResCard, { withDiscountLabel } from "../res-card";
import RES_CARD_MOCK from "../mocks/res-card-mock.json";
import "@testing-library/jest-dom";

test("res card should render with props", () => {
  render(<ResCard resData={RES_CARD_MOCK} />);
  const resName = screen.getByText(/Daily Kitchen - Homely Meals/i);
  expect(resName).toBeInTheDocument();
});

test("res card should render with discount label - HOC", () => {
render(withDiscountLabel(ResCard)({ resData: RES_CARD_MOCK }));
  const discountLabel = screen.getByText(/ITEMS/i);
  expect(discountLabel).toBeInTheDocument();
  const discountTag = screen.getByText(/AT ₹100/i);
  expect(discountTag).toBeInTheDocument();
  const discountHeader = screen.getByText(/ITEMS/i);
  expect(discountHeader).toBeInTheDocument();
  const discountSubHeader = screen.getByText(/AT ₹100/i);
  expect(discountSubHeader).toBeInTheDocument();
})