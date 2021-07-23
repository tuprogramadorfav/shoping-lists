import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddItemBox = ({ onAdd, inputValue, setInputValue }) => {

    return (
        <div className='add-item-box'>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
            <FontAwesomeIcon icon={faPlus} onClick={onAdd} />
        </div>
    )
}



export default AddItemBox