import {shallow} from 'enzyme'
import CustomDialog from './dialog'

import {findByTestAttr} from '../../test/testUtils'

describe('Dialog Component', ()=>{
    let wrapper
    let props = {
        open:true,
        onClose:jest.fn()
    }
    beforeEach(()=>{
        wrapper = shallow(
           <CustomDialog {...props}><div className="children">inner</div></CustomDialog> 
        )
    });

    test('Rendered without error', () =>{
        const component = findByTestAttr(wrapper, 'dialog-content')
        expect(component.length).toBe(1)
    })

    test('Rendered Children', () =>{
        const component = wrapper.find('.children')
        expect(component.length).toBe(1)
    })

    test('onClose clicked', ()=> {
        let close_button = wrapper.find('.button')
        close_button.simulate('click')
        expect(props.onClose).toHaveBeenCalledTimes(1)
    })

})