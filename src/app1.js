
import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(0);

    useEffect(() => {
        calculateTotal();
    });

    const handleAddButtonClick = () => {
        let id = items.lenght + 1;
        const newItem = {
            id: id,
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        }
        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');

    }

    const handleQuantityIncrease = (index) => {
        const newItems = [...items]
        newItems[index].quantity++;
        setItems(newItems);


    }

    const handleQuantityDecrease = (index) => {
        const newItems = [...items]
        newItems[index].quantity--;
        setItems(newItems);

    }

    const toggleComplete = (index) => {
        const newItems = [...items]
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);

    }

    const eliminateItem = (index) => {
        console.log(index)
        const newItems = items.filter(item => item !== items[index])
        setItems(newItems)

    }

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0)
        setTotalItemCount(totalItemCount);
    }

    return (
        <div className='app-background'>
            <div className='main-container'>
                <div className='title'><h2> Groceries List </h2> </div>
                <div className='add-item-box'>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
                    <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
                </div>
                <div className='item-list'>
                    {items.map((item, index) =>
                        <div className='item-container' key={item.itemName}>
                            <FontAwesomeIcon icon={faTimes} onClick={() => eliminateItem(index)} />
                            <div className='item-content'>
                                <div className='item-name'>
                                    {/* replace false with a boolean indicating the item has been completed or not */}
                                    {item.isSelected ? (
                                        <>
                                            <FontAwesomeIcon icon={faCheckCircle} onClick={() => toggleComplete(index)} />
                                            <span className='completed'>{item.itemName}</span>
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faCircle} onClick={() => toggleComplete(index)} />
                                            <span>{item.itemName}</span>
                                        </>
                                    )}
                                </div>
                                <div className='quantity'>
                                    {item.quantity > 0 &&
                                        <button className='decrease'>
                                            <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                                        </button>
                                    }
                                    <span> {item.quantity} </span>
                                    <button>
                                        <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div className='total'> Total: {totalItemCount}</div>
            </div>
        </div>
    );
};



export default App;