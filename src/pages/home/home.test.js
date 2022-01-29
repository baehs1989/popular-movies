import Home from "./home";
import { storeFactory, findByTestAttr } from "../../../test/testUtils";
import { mount, shallow } from "enzyme";

describe("Redning Home Component", () => {
    let wrapper

    beforeEach(()=>{
        wrapper = shallow(
           <Home/>
        )
    });

    test("Rendered without error", ()=>{
        let comp = findByTestAttr(wrapper, "home")
        expect(comp.length).toBe(1)
    })
})