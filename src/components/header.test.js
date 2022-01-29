import Header from "./header";
import { Provider } from "react-redux";
import { storeFactory, findByTestAttr } from "../../test/testUtils";
import { mount } from "enzyme";
import { Routes, Route, BrowserRouter } from "react-router-dom";


const mockNavigate = jest.fn()
jest.mock("react-router-dom", ()=>({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Rendering Header Component", () => {
  let store = storeFactory();
  let wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  test("render without error", () => {
    expect(findByTestAttr(wrapper, "header").length).toBe(1);
  });

  test("logo rendered", () => {
    expect(findByTestAttr(wrapper, "logo").length).toBe(1);
  });

  test("favorite button rendered", () => {
    expect(findByTestAttr(wrapper, "favorite-button").length).toBe(1);
  });
});

describe("favorite button badge update on redux change", () => {
  let store = storeFactory();
  let wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  test("add a favorite movie", () => {
    store.dispatch({
      type: "add_move",
      payload: {
        id: 123,
      },
    });
    store.dispatch({
      type: "add_move",
      payload: {
        id: 1234,
      },
    });
    wrapper.update();

    expect(findByTestAttr(wrapper, "favorite-button").text()).toBe("2");
  });

  test("remove a favorite movie", () => {
    store.dispatch({
      type: "add_move",
      payload: {
        id: 12345,
      },
    });
    store.dispatch({
      type: "add_move",
      payload: {
        id: 12346,
      },
    });
    store.dispatch({
      type: "delete_movie",
      payload: 123,
    });

    wrapper.update();

    expect(findByTestAttr(wrapper, "favorite-button").text()).toBe("3");
  });
});

describe("navigate events", () => {
  let store = storeFactory();
  let wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  test("navigate event on logo", () => {
    let logo = findByTestAttr(wrapper, 'logo')
    logo.simulate('click')
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  });

  test("navigate event on favorite button", () => {
    let logo = findByTestAttr(wrapper, 'favorite-button')
    logo.simulate('click')
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  });

});
