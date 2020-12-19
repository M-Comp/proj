import PropTypes from 'prop-types';
import {useContext} from 'react';
import {Theme} from './App';

function ListaGenerica(props){
    const theme = useContext(Theme);
    const {array, mapFunc, listClassName} = props;

    return(
        <ul style={theme} className={listClassName}>
            {array.map(mapFunc)}
        </ul>
    );
}

ListaGenerica.propTypes = {
    array: PropTypes.array,
    mapFunc: PropTypes.func,
    listClassName: PropTypes.string
}

export default ListaGenerica;