import App from "./Users";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

window.fetch = jest.fn(() => {
  const user = { name: "Jack", email: "jack@email.com" };

  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

xit("loading text is shown while API request is in progress", async () => {
  render(<App />);
  const loading = screen.getByText("Loading...");
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
});

it("user's name is rendered as Jack",async ()=>{
  render(<App/>);
  const userName = await screen.findByText('Jack');
  expect(userName).toBeInTheDocument();
})