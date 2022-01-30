/* istanbul ignore file */
import localForage from 'localforage';

const movieCache = localForage.createInstance({
    name: 'moviecache'
});

export const setItem = (state:any) => {
    movieCache.setItem('file-cache', state)
}

export const getItem = async() => {
    return await movieCache.getItem('file-cache')
}