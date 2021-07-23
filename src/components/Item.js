import DeleteBtn from "./DeleteBtn"
import ItemQuantity from "./ItemQuantity"
import ItemName from "./ItemName"


const Item = ({ item, handleQuantityDecrease, handleQuantityIncrease, eliminateItem, toggleComplete }) => {
    return (
        <div className='item-container' key={item.id}>
            <DeleteBtn onClick={() => eliminateItem(item.id)} />
            <div className='item-content'>
                <ItemName toggleComplete={toggleComplete} item={item} />
                <ItemQuantity item={item} handleQuantityDecrease={handleQuantityDecrease} handleQuantityIncrease={handleQuantityIncrease} />
            </div>
        </div>
    )
}

export default Item



