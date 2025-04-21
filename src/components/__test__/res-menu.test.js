import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import ResMenu from "../res-menu";
import MOCK_RES_MENU from "../mocks/res-menu-mock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { Header } from "../header";
import Cart from "../cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_MENU),
  })
);

test("shouldload res menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ResMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const restImg = screen.getByTestId("res-img");
  expect(restImg).toBeInTheDocument();
});

test("should collapse accordion", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ResMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordion = screen.getByTestId('menu-categories');
  const accordionContent = screen.getAllByTestId('menu-item');
  expect(accordionContent.length).toBe(3);
  expect(accordion).toBeInTheDocument();
});

test('should have 3 menu items', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
        <Header />
          <ResMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordionContent = screen.getAllByTestId('menu-item');
  expect(accordionContent.length).toBe(3);
})

test('should have 3 add buttons', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
        <Header />
          <ResMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const addButtons = screen.getAllByRole('button', {name: 'Add'});
  expect(addButtons.length).toBe(3)
})

test("should add to cart should update header component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header />
            <ResMenu />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordion = screen.getByTestId('menu-categories');
    expect(accordion).toBeInTheDocument();
    const addButtons = screen.getAllByRole('button', {name: 'Add'});
    fireEvent.click(addButtons[0])
    const cartText = screen.getByText('Cart (1)')
    expect(cartText).toBeInTheDocument()
  });

  test("should add to cart 2 more items should update header component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header />
            <ResMenu />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordion = screen.getByTestId('menu-categories');
    const accordionContent = screen.getAllByTestId('menu-item');
    expect(accordionContent.length).toBe(3);
    expect(accordion).toBeInTheDocument();
    const addButtons = screen.getAllByRole('button', {name: 'Add'});
    fireEvent.click(addButtons[0])
    fireEvent.click(addButtons[1])
    //* one was added earlier in previous test case
    const cartText = screen.getByText('Cart (3)')
    expect(cartText).toBeInTheDocument()
  });

  test("should add to cart 2 more items should update cart compoenet", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header />
            <ResMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });
    const foodItemsInCart = screen.getAllByTestId('cart-food-items')
    expect(foodItemsInCart.length).toBe(3)
  });