import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

const ItemName = ({ item, toggleComplete }) => {
    return (
        <div className='item-name'>
            {/* replace false with a boolean indicating the item has been completed or not */}
            {item.isSelected ? (
                <>
                    <FontAwesomeIcon icon={faCheckCircle} onClick={() => toggleComplete(item.id)} />
                    <span className='completed'>{item.itemName}</span>
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={faCircle} onClick={() => toggleComplete(item.id)} />
                    <span>{item.itemName}</span>
                </>
            )}
        </div>
    )
}

export default ItemName
