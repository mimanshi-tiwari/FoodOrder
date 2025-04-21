import { render, screen } from "@testing-library/react";
import ContactUs from "../contact-us";
import "@testing-library/jest-dom";

//* we can group multiple test cases using describe
describe("Contcat us component render test cases", () => {
  beforeAll(() => {
    // console.log('Before all test cases');
  })
  beforeEach(() => {
    //* helpful for clean up tasks
    // console.log('Before each test case');
  })

  afterAll(() => {
    // console.log('After all test cases');
  })

  afterEach(() => {
    // console.log('After each test case');
  })

  test("Should render contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    //* Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<ContactUs />);
    //* if there al multiple buttons then use getAllByRole else it will throw error
    const button = screen.getByText("Submit");
    //* Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load name input inside contact us component", () => {
    render(<ContactUs />);
    const nameInput = screen.getByPlaceholderText("Name");
    //* Assertion
    expect(nameInput).toBeInTheDocument();
  });

  test("Should load email input inside contact us component", () => {
    render(<ContactUs />);
    const emailInput = screen.getByPlaceholderText("Email");
    //* Assertion
    expect(emailInput).toBeInTheDocument();
  });

  test("Should load message textare inside contact us component", () => {
    render(<ContactUs />);
    const messageTextarea = screen.getByPlaceholderText("Message");
    //* Assertion
    expect(messageTextarea).toBeInTheDocument();
  });
});

//* It can be outside describe as well, if we dont want to group.
//* There can be multiple describe and describe inside describe as well
//* We can use "it" instead of test, but test is more readable

it("Should load 3 input inside contact us component", () => {
    render(<ContactUs />);
    //* Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //* Assertion
    expect(inputBoxes.length).toBe(3);
  });