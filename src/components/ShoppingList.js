import Item from "./Item"
import Total from "./Total"
import AddItemBox from "./AddItemBox"
import React, { useState, useEffect } from 'react';


var x = 0
const ShoppingList = () => {


    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(0);


    const handleAddButtonClick = () => {
        x += 1
        const newItem = {
            id: x,
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        }
        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
    }

    useEffect(() => {
        calculateTotal();
    });

    const handleQuantityIncrease = (id) => {
        const newItems = [...items]
        newItems.find(item => item.id === id).quantity++;
        setItems(newItems);


    }

    const handleQuantityDecrease = (id) => {
        const newItems = [...items]
        newItems.find(item => item.id === id).quantity--;
        setItems(newItems);

    }

    const toggleComplete = (id) => {
        const newItems = [...items]
        newItems.find(item => item.id === id).isSelected = !newItems.find(item => item.id === id).isSelected
        setItems(newItems);

    }

    const eliminateItem = (id) => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)

    }

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0)
        setTotalItemCount(totalItemCount);
    }

    console.log(items)

    return (
        <div className='main-container'>
            <div className='title'><h2> Groceries List </h2> </div>
            <div className='add-item-box'>
                <AddItemBox onAdd={handleAddButtonClick} inputValue={inputValue} setInputValue={setInputValue} />
            </div>
            <div className='item-list'>
                {items.map((item, index) => <Item key={item.id} item={item} handleQuantityDecrease={handleQuantityDecrease} handleQuantityIncrease={handleQuantityIncrease} eliminateItem={eliminateItem} toggleComplete={toggleComplete} />
                )}
            </div>
            <Total total={totalItemCount} />
        </div>
    )
}

export default ShoppingList
