import { storeFactory, findByTestAttr } from "../test/testUtils";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import App from "./App";
import * as localStorage from './localstorage'
import { act } from "@testing-library/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

describe("Rendering Home Component", () => {
  let wrapper;
  let store = storeFactory();

  beforeEach(() => {
    jest.spyOn(localStorage, "getItem").mockReturnValue(
        {
            data:{},
            list:[]
        }
    );
  });

  test("Rendered without error", async () => {
    await act(async () => {
      wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<App />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      );
    });
  });
});
