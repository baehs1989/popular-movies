import {shallow, mount} from 'enzyme'
import CardList from './card-list'
import {Provider} from 'react-redux'

import {findByTestAttr, storeFactory} from '../../test/testUtils'

let MOVIES = [
    {
      adult: false,
      backdrop_path: "/9fzNf2QcsHVvdx5g5QUOgAWpADw.jpg",
      genre_ids: [18, 27, 9648],
      id: 516329,
      original_language: "en",
      original_title: "Antlers",
      overview:
        "A small-town Oregon teacher and her brother, the local sheriff, discover a young student is harbouring a dangerous secret that could have frightening consequences.",
      popularity: 1103.284,
      poster_path: "/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
      release_date: "2021-10-28",
      title: "Antlers",
      video: false,
      vote_average: 6.4,
      vote_count: 413,
    },
    {
      adult: false,
      backdrop_path: "/1BqX34aJS5J8PefVnQSfQIEPfkl.jpg",
      genre_ids: [80, 28, 53],
      id: 826749,
      original_language: "en",
      original_title: "Fortress",
      overview:
        "The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.",
      popularity: 1316.238,
      poster_path: "/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg",
      release_date: "2021-12-17",
      title: "Fortress",
      video: false,
      vote_average: 6.4,
      vote_count: 126,
    },
    {
      adult: false,
      backdrop_path: "/xGrTm3J0FTafmuQ85vF7ZCw94x6.jpg",
      genre_ids: [18, 36, 12],
      id: 589761,
      original_language: "ru",
      original_title: "Чернобыль",
      overview:
        "The aftermath of a shocking explosion at the Chernobyl nuclear power station made hundreds of people sacrifice their lives to clean up the site of the catastrophe and to successfully prevent an even bigger disaster that could have turned a large part of the European continent into an uninhabitable exclusion zone. This is their story.",
      popularity: 1143.14,
      poster_path: "/AmJLuHjxPdIJO6vmymeWADG6jK5.jpg",
      release_date: "2021-04-15",
      title: "Chernobyl: Abyss",
      video: false,
      vote_average: 6.2,
      vote_count: 282,
    },
    {
      adult: false,
      backdrop_path: "/7h5WAPAcUzOWpp2jrwHBB48790j.jpg",
      genre_ids: [16, 14],
      id: 843241,
      original_language: "ja",
      original_title: "劇場版 七つの大罪 光に呪われし者たち",
      overview:
        'With the help of the "Dragon Sin of Wrath" Meliodas and the worst rebels in history, the Seven Deadly Sins, the "Holy War", in which four races, including Humans, Goddesses, Fairies and Giants fought against the Demons, is finally over. At the cost of the "Lion Sin of Pride" Escanor\'s life, the Demon King was defeated and the world regained peace. After that, each of the Sins take their own path.',
      popularity: 1253.775,
      poster_path: "/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg",
      release_date: "2021-07-02",
      title: "The Seven Deadly Sins: Cursed by Light",
      video: false,
      vote_average: 8,
      vote_count: 287,
    },
    {
      adult: false,
      backdrop_path: "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
      genre_ids: [12, 28, 53],
      id: 370172,
      original_language: "en",
      original_title: "No Time to Die",
      overview:
        "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      popularity: 850.677,
      poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
      release_date: "2021-09-29",
      title: "No Time to Die",
      video: false,
      vote_average: 7.5,
      vote_count: 3277,
    },
    {
      adult: false,
      backdrop_path: "/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg",
      genre_ids: [28, 12, 14],
      id: 1930,
      original_language: "en",
      original_title: "The Amazing Spider-Man",
      overview:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
      popularity: 894.825,
      poster_path: "/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
      release_date: "2012-06-23",
      title: "The Amazing Spider-Man",
      video: false,
      vote_average: 6.6,
      vote_count: 14351,
    },
    {
      adult: false,
      backdrop_path: "/Aqp47Dbz8f1wnVU1qKvFFXQFROr.jpg",
      genre_ids: [53, 27],
      id: 811072,
      original_language: "es",
      original_title: "Dos",
      overview:
        "Two people, a man and a woman, wake up naked and with their abdomens attached to each other.",
      popularity: 940.718,
      poster_path: "/5P7QwmoYl70tsRZ8e0VnI9RI1MF.jpg",
      release_date: "2021-07-23",
      title: "Two",
      video: false,
      vote_average: 5.3,
      vote_count: 166,
    },
    {
      adult: false,
      backdrop_path: "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg",
      genre_ids: [28, 18, 36],
      id: 617653,
      original_language: "en",
      original_title: "The Last Duel",
      overview:
        "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
      popularity: 833.794,
      poster_path: "/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
      release_date: "2021-10-13",
      title: "The Last Duel",
      video: false,
      vote_average: 7.6,
      vote_count: 1566,
    },
    {
      adult: false,
      backdrop_path: "/mRZDHjArYNWpOv06kxRK1cduQKh.jpg",
      genre_ids: [27, 53],
      id: 754934,
      original_language: "en",
      original_title: "Son",
      overview:
        "When a young boy contracts a mysterious illness, his mother must decide how far she will go to protect him from terrifying forces in her past.",
      popularity: 1014.509,
      poster_path: "/4fl6EdtMp6p0RKJgESdFti1J3dC.jpg",
      release_date: "2021-08-06",
      title: "Son",
      video: false,
      vote_average: 6.2,
      vote_count: 70,
    },
    {
      adult: false,
      backdrop_path: "/pxOiKwRvNp3zFOiuwpYpzlbmEgC.jpg",
      genre_ids: [16, 35, 12, 10751],
      id: 459151,
      original_language: "en",
      original_title: "The Boss Baby: Family Business",
      overview:
        "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
      popularity: 874.796,
      poster_path: "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
      release_date: "2021-07-01",
      title: "The Boss Baby: Family Business",
      video: false,
      vote_average: 7.6,
      vote_count: 1719,
    },
    {
      adult: false,
      backdrop_path: "/zlj0zHo67xXoj7hvwGtaKRkSdBV.jpg",
      genre_ids: [12, 18],
      id: 728526,
      original_language: "en",
      original_title: "Encounter",
      overview:
        "A decorated Marine goes on a rescue mission to save his two young sons from an unhuman threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.",
      popularity: 983.192,
      poster_path: "/tUkY0WxffPZ9PoyC62PIyyUMGnt.jpg",
      release_date: "2021-12-03",
      title: "Encounter",
      video: false,
      vote_average: 6.4,
      vote_count: 209,
    },
    {
      adult: false,
      backdrop_path: "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      genre_ids: [35, 28, 12, 878],
      id: 550988,
      original_language: "en",
      original_title: "Free Guy",
      overview:
        "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
      popularity: 818.018,
      poster_path: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
      release_date: "2021-08-11",
      title: "Free Guy",
      video: false,
      vote_average: 7.7,
      vote_count: 4709,
    },
    {
      adult: false,
      backdrop_path: "/wYMbnrdRCREjNLwFlG5SLWzBjui.jpg",
      genre_ids: [878, 12],
      id: 438631,
      original_language: "en",
      original_title: "Dune",
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 824.127,
      poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      release_date: "2021-09-15",
      title: "Dune",
      video: false,
      vote_average: 7.9,
      vote_count: 5664,
    },
    {
      adult: false,
      backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
      genre_ids: [28, 12, 14],
      id: 436969,
      original_language: "en",
      original_title: "The Suicide Squad",
      overview:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      popularity: 742.164,
      poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
      release_date: "2021-07-28",
      title: "The Suicide Squad",
      video: false,
      vote_average: 7.7,
      vote_count: 5379,
    },
    {
      adult: false,
      backdrop_path: "/mPyiNWS0upEG1mGKOKyCQSoZpnp.jpg",
      genre_ids: [28, 12, 14],
      id: 102382,
      original_language: "en",
      original_title: "The Amazing Spider-Man 2",
      overview:
        "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
      popularity: 710.001,
      poster_path: "/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
      release_date: "2014-04-16",
      title: "The Amazing Spider-Man 2",
      video: false,
      vote_average: 6.5,
      vote_count: 10555,
    },
    {
      adult: false,
      backdrop_path: "/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg",
      genre_ids: [27, 9648, 53],
      id: 646385,
      original_language: "en",
      original_title: "Scream",
      overview:
        "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
      popularity: 624.46,
      poster_path: "/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
      release_date: "2022-01-12",
      title: "Scream",
      video: false,
      vote_average: 7.3,
      vote_count: 327,
    },
    {
      adult: false,
      backdrop_path: "/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg",
      genre_ids: [878, 18, 12],
      id: 522402,
      original_language: "en",
      original_title: "Finch",
      overview:
        "On a post-apocalyptic Earth, a robot, built to protect the life of his dying creator's beloved dog, learns about life, love, friendship, and what it means to be human.",
      popularity: 796.447,
      poster_path: "/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg",
      release_date: "2021-11-04",
      title: "Finch",
      video: false,
      vote_average: 8.1,
      vote_count: 1856,
    },
    {
      adult: false,
      backdrop_path: "/x78cvxbmpBNcHON7x3Iv8vih5Sj.jpg",
      genre_ids: [16, 35, 10751],
      id: 774741,
      original_language: "en",
      original_title: "Diary of a Wimpy Kid",
      overview:
        "Greg Heffley is a scrawny but ambitious kid with an active imagination and big plans to be rich and famous – he just has to survive middle school first.",
      popularity: 776.328,
      poster_path: "/obg6lWuNaZkoSlwrVG4VVk4SmT.jpg",
      release_date: "2021-12-03",
      title: "Diary of a Wimpy Kid",
      video: false,
      vote_average: 6.8,
      vote_count: 147,
    },
    {
      adult: false,
      backdrop_path: "/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg",
      genre_ids: [28, 12, 878, 18],
      id: 315635,
      original_language: "en",
      original_title: "Spider-Man: Homecoming",
      overview:
        "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
      popularity: 709.637,
      poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      release_date: "2017-07-05",
      title: "Spider-Man: Homecoming",
      video: false,
      vote_average: 7.4,
      vote_count: 17912,
    },
    {
      adult: false,
      backdrop_path: "/8rft8A9nH43IReybFtYt21ezfMK.jpg",
      genre_ids: [99],
      id: 899082,
      original_language: "en",
      original_title: "Harry Potter 20th Anniversary: Return to Hogwarts",
      overview:
        "An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time.",
      popularity: 638.684,
      poster_path: "/jntLBq0MLR3hrwKaTQswxACRPMs.jpg",
      release_date: "2022-01-01",
      title: "Harry Potter 20th Anniversary: Return to Hogwarts",
      video: false,
      vote_average: 8.3,
      vote_count: 824,
    },
]

describe('Rendering CardList Component', () => {
    let wrapper
    let store = storeFactory()
    let props = {
        onSelectItem:jest.fn(),
        onLoadData:jest.fn(),
        data: MOVIES
    }
    let deep_wrapper

    beforeEach(()=>{
        wrapper = shallow(
           <CardList {...props}/>
        )
        deep_wrapper = mount(
            <Provider store={store}><CardList {...props}/></Provider>
        )
    });

    test("Rendered without error",()=>{
        let comp = findByTestAttr(wrapper, 'card-list-component')
        expect(comp.length).toBe(1)
    })

    test("Showing Cards", () => {
        // console.log(deep_wrapper.debug())
        // console.log(findByTestAttr(deep_wrapper, 'card-component').length)
        expect(findByTestAttr(deep_wrapper, 'card-component').length).toBe(MOVIES.length)
    })

    test("Showing no cards when movie prop is empty", () => {
        let wrapper_t = mount(
            <CardList {...{...props, data:[]}}/>
         )
        expect(findByTestAttr(wrapper_t, 'card-component').length).toBe(0)
    })
})

describe("Prop functions", ()=>{
    let wrapper
    let store = storeFactory()
    let props = {
        onSelectItem:jest.fn(),
        onLoadData:jest.fn(),
        data: MOVIES
    }
    let deep_wrapper

    beforeEach(()=>{
        wrapper = shallow(
           <CardList {...props}/>
        )
        deep_wrapper = mount(
            <Provider store={store}><CardList {...props}/></Provider>
        )
    });

    test('onSelectItem triggered', () => {
        let cards = findByTestAttr(deep_wrapper, 'card-component')
        cards.at(0).simulate('click')
        expect(props.onSelectItem).toHaveBeenCalledTimes(1)
    })
})