import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../header";

test("Should theme input to render in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const themeInput = screen.getByRole("checkbox");
  expect(themeInput).toBeInTheDocument();
});

test("Should Home to render in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const Home = screen.getByText("Home");
    expect(Home).toBeInTheDocument();
  });

  test("Should About to render in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const About = screen.getByText("About");
    expect(About).toBeInTheDocument();
  });

  test("Should Contact Us to render in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const ContactUs = screen.getByText("Contact Us");
    expect(ContactUs).toBeInTheDocument();
  });


  test("Should Cart (0) to render in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const Cart = screen.getByText(/Cart/);
    expect(Cart).toBeInTheDocument();
  });
