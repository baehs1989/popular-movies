import { findByTestAttr } from "../../test/testUtils";
import { mount } from "enzyme";
import ErrorPage from "./error-page";

describe('ErrorPage Component', () => {
    test('render without error', () => {
        const wrapper = mount(<ErrorPage/>)
        expect(findByTestAttr(wrapper, 'error_page').length).toBe(1)
    })
})