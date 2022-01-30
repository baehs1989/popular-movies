import { findByTestAttr } from "../../../test/testUtils";
import { mount } from "enzyme";
import BallLoader from "./bar";

describe('BarLoader Component', () => {
    test('render without error', () => {
        const wrapper = mount(<BallLoader/>)
        expect(findByTestAttr(wrapper, 'bar_loader').length).toBe(1)
    })
})