import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const ItemQuantity = (item, handleQuantityDecrease, handleQuantityIncrease) => {
const ItemQuantity = ({ item, handleQuantityDecrease, handleQuantityIncrease }) => {
    console.log(item.quantity)
    return (
        <div className='quantity'>
            {item.quantity > 0 &&
                <button className='decrease'>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(item.id)} />
                </button>
            }
            <span> {item.quantity} </span>
            <button>
                <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(item.id)} />
            </button>
        </div>
    )
}


export default ItemQuantity
