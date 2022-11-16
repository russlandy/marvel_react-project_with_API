import { Component } from 'react/cjs/react.development';
import MarvelService from '../services/MarvelService';

import './charList.scss'
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

class CharList extends Component {

    MarvelService = new MarvelService();
    state = {
        charList: [],
        loading: true,
        error: false
    }

    componentDidMount = () => {
        this.MarvelService.getAllCharacters()
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    onCharLoaded = (charList) => {
        this.setState({charList, loading: false})
    }

    onError = () => {
        this.setState({ 
            loading: false,
            error: true})
    }

    renderItem = (arr) => {
        const items = arr.map ((item) => {
                let imgStyle = {'objectFit': 'cover'};
                if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                    imgStyle = {'objectFit': 'contain'};
                }
                return (
                    <li className="char__item">
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
                )
        })
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )

    }
    

    render () {
        const {charList, error, loading} = this.state;
        const items = this.renderItem(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading && error) ? items : null;

        return (
            <div className="char__list">
                {content}
                {errorMessage}
                {spinner}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;