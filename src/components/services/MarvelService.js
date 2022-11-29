import {useHtpp} from '../../hooks/http.hook';


const useMarvelService = () => {
    const {loading, request, error, clearError} = useHtpp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=8bd01d288829c5783e8880267f0f7d64';
    const _baseOffet = 789;
    

    const getAllCharacters = async (offset = _baseOffet) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }


    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);

    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 200)}...` : 'There is no description yet',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
            }
        
    }

    return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useMarvelService;