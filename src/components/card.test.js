import {mount} from 'enzyme'
import Card from './card'
import {Provider} from 'react-redux'

import {findByTestAttr, storeFactory} from '../../test/testUtils'

let MOVIE = {
    adult: false,
    backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
    genre_ids: ["Action", "Adventure"],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 13195.451,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8.5,
    vote_count: 6054,
}

describe('Card Component', ()=>{
    let wrapper
    let store = storeFactory()
    beforeEach(()=>{
        wrapper = mount(
           <Provider store={store}><Card data={MOVIE} onSelectMovie={()=>{}}/></Provider> 
        )
    });

    test('Rendered without error', ()=>{
        const component = findByTestAttr(wrapper, 'card-component')
        expect(component.length).toBe(1)
    })

    test('Correct movie title', () => {
        const component = findByTestAttr(wrapper, 'title')
        expect(component.text()).toEqual(MOVIE.title)
    })

    test('Correct release data', () => {
        const component = findByTestAttr(wrapper, 'release_date')
        expect(component.text()).toEqual(MOVIE.release_date)

    })

    test('Correct genres', () => {
        const component = findByTestAttr(wrapper, 'genres')
        let correct_text = MOVIE.genre_ids.join(', ')
        expect(component.text()).toEqual(correct_text)

    })

    test('Correct popularity', () => {
        const component = findByTestAttr(wrapper, 'popularity')
        expect(component.text()).toEqual(MOVIE.popularity+" pts")
    })
})

describe('Card: Event Action', ()=> {
    let wrapper
    let store = storeFactory()
    let props = {
        data:MOVIE,
        onSelectMovie:jest.fn()
    }
    beforeEach(()=>{
        wrapper = mount(
           <Provider store={store}><Card {...props}/></Provider> 
        )
    });

    test('click to add a favorite button', () => {
        const component = findByTestAttr(wrapper, 'card-component')
        component.find('.favorite').simulate('click')
        let redux_state = store.getState()
        expect(redux_state.movies.list.length).toBe(1)
        expect(redux_state.movies.list.includes(MOVIE.id)).toBe(true)
        expect(MOVIE.id in redux_state.movies.data).toBe(true)
    })

    test('click to remove a favorite button', () => {
        const component = findByTestAttr(wrapper, 'card-component')
        component.find('.favorite').simulate('click')
        let redux_state = store.getState()
        expect(redux_state.movies.list.length).toBe(0)
        expect(redux_state.movies.list.includes(MOVIE.id)).toBe(false)
        expect(MOVIE.id in redux_state.movies.data).toBe(false)
    })
    

    test('onSelectMovie triggerd', () => {
        const component = findByTestAttr(wrapper, 'card-component')
        component.simulate('click')
        expect(props.onSelectMovie).toHaveBeenCalledTimes(1)
    })

    test('onSelectMovie triggerd', () => {
        const component = findByTestAttr(wrapper, 'card-component')
        component.simulate('click')
        expect(props.onSelectMovie).toHaveBeenCalledTimes(1)
    })

})