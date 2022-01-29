import Fovorite from "./favorite";
import { storeFactory, findByTestAttr } from "../../../test/testUtils";
import { mount } from "enzyme";
import {Provider} from 'react-redux'

describe("Rendering Home Component", () => {
    let wrapper
    let store = storeFactory()
    
    beforeEach(()=>{
        wrapper = mount(
           <Provider store={store}><Fovorite/></Provider>
        )
    });

    test("Rendered without error", ()=>{
        let comp = findByTestAttr(wrapper, "favorite")
        expect(comp.length).toBe(1)
    })
})