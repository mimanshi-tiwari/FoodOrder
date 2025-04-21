import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_RES_LIST from "../mocks/res-list-mock.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_LIST),
  });
});

test("body should render with props", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
});

test("should render 20 rest cards", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const resCard = screen.getAllByTestId("res-card");
  expect(resCard.length).toBe(20);
});

test("test search functionality", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("res-card");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  //* screen should load 2 cards
  const resCard = screen.getAllByTestId("res-card");
  expect(resCard.length).toBe(2);
  expect(searchInput).toBeInTheDocument();
});

test("test top rated functionality", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("res-card");
  expect(cardsBeforeSearch.length).toBe(20);
  const topRatedBtn = screen.getByTestId("top-res-btn");
  fireEvent.click(topRatedBtn);
  //* screen should load 2 cards
  const resCard = screen.getAllByTestId("res-card");
  expect(resCard.length).toBe(7);
});
