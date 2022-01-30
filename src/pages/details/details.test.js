import Details from "./details";
import * as apiProvider from "../../apiProvider/api";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { storeFactory, findByTestAttr } from "../../../test/testUtils";
import * as localStorage from "../../localstorage";

const MovieData = {
  adult: false,
  backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
  belongs_to_collection: null,
  budget: 50000000,
  genres: [
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
  ],
  homepage: "https://movies.disney.com/encanto",
  id: 568124,
  imdb_id: "tt2953050",
  original_language: "en",
  original_title: "Encanto",
  overview:
    "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
  popularity: 4275.762,
  poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  production_companies: [
    {
      id: 6125,
      logo_path: "/tVPmo07IHhBs4HuilrcV0yujsZ9.png",
      name: "Walt Disney Animation Studios",
      origin_country: "US",
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2021-11-24",
  revenue: 228000000,
  runtime: 102,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "Spanish", iso_639_1: "es", name: "Español" },
  ],
  status: "Released",
  tagline: "There's a little magic in all of us ...almost all of us.",
  title: "Encanto",
  video: false,
  vote_average: 7.8,
  vote_count: 3516,
  genre_ids: ["Animation", "Comedy", "Family", "Fantasy"],
};

describe("Rendering Detail Component", () => {
  let wrapper;
  let store = storeFactory();
  let props = {
    movieId: MovieData.id,
  };
  beforeEach(() => {
    jest.spyOn(apiProvider, "getMovieDetails").mockReturnValue(MovieData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("initial render with loading spinner", async () => {
    await act(async () => {
      wrapper = mount(
        <Provider store={store}>
          <Details {...props} />
        </Provider>
      );
    });

    expect(findByTestAttr(wrapper, "loading").length).toBe(1);
  });

  test("after useEffect with inital api call", async () => {
    await act(async () => {
      wrapper = mount(
        <Provider store={store}>
          <Details {...props} />
        </Provider>
      );
    });
    wrapper.update();
    expect(findByTestAttr(wrapper, "details").length).toBe(1);
  });

  describe("how popularity difference between a snapshot from localStorage", () => {
    test("0 difference", async () => {
      jest.spyOn(localStorage, "getItem").mockReturnValue({
        data: {
          [MovieData.id]: MovieData,
        },
        list: [MovieData.id],
      });
      await act(async () => {
        wrapper = mount(
          <Provider store={store}>
            <Details {...props} />
          </Provider>
        );
      });
      wrapper.update();
      expect(findByTestAttr(wrapper, "popularity").text()).toBe(
        `${MovieData.popularity}(-)pts`
      );
    });

    test("negative difference", async () => {
      jest.spyOn(localStorage, "getItem").mockReturnValue({
        data: {
          [MovieData.id]: {
            ...MovieData,
            popularity: MovieData.popularity + 23,
          },
        },
        list: [MovieData.id],
      });
      await act(async () => {
        wrapper = mount(
          <Provider store={store}>
            <Details {...props} />
          </Provider>
        );
      });
      wrapper.update();
      expect(
        findByTestAttr(wrapper, "popularity").text().endsWith(`(-23)pts`)
      ).toBe(true);
    });

    test("positive difference", async () => {
      jest.spyOn(localStorage, "getItem").mockReturnValue({
        data: {
          [MovieData.id]: {
            ...MovieData,
            popularity: MovieData.popularity - 24,
          },
        },
        list: [MovieData.id],
      });
      await act(async () => {
        wrapper = mount(
          <Provider store={store}>
            <Details {...props} />
          </Provider>
        );
      });
      wrapper.update();
      expect(
        findByTestAttr(wrapper, "popularity").text().endsWith(`(+24)pts`)
      ).toBe(true);
    });
  });

  describe("onClickLikeButton", () => {
    test("add a movie", async () => {
      await act(async () => {
        wrapper = mount(
          <Provider store={store}>
            <Details {...props} />
          </Provider>
        );
      });
      wrapper.update();
      let button = findByTestAttr(wrapper, "heart_icon");
      button.simulate("click");
      let redux_state = store.getState();
      expect(redux_state.movies.list.length).toBe(1);
      expect(redux_state.movies.list.includes(MovieData.id)).toBe(true);
    });

    test("delete a movie", async () => {
      await act(async () => {
        wrapper = mount(
          <Provider store={store}>
            <Details {...props} />
          </Provider>
        );
      });
      wrapper.update();
      let button = findByTestAttr(wrapper, "heart_icon");
      button.simulate("click");
      let redux_state = store.getState();
      expect(redux_state.movies.list.length).toBe(0);
      expect(redux_state.movies.list.includes(MovieData.id)).toBe(false);
    });
  });
});
