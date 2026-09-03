import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const calculateTotalQuantity = () => {
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores and purifies air.", cost: "18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity and removes toxins.", cost: "14" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/plant-4850600_1280.jpg", description: "Easy to grow and cleans indoor air.", cost: "22" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/18/10/aloe-vera-3284620_1280.jpg", description: "Purifies air and offers medicinal gel.", cost: "10" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba", description: "Calming scent, used in aromatherapy.", cost: "20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729845339-786d52f56e0d", description: "Sweet fragrance, promotes relaxation.", cost: "18" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating aroma, great for cooking.", cost: "15" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/27/18/24/mint-1165008_1280.jpg", description: "Fresh scent, perfect for teas.", cost: "10" },
                { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2016/11/21/16/06/eucalyptus-1846162_1280.jpg", description: "Refreshing scent, clears sinuses.", cost: "25" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2017/07/28/14/29/lemon-balm-2548771_1280.jpg", description: "Citrusy aroma, relieves stress.", cost: "14" }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                { name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/17/marigold-7028061_1280.jpg", description: "Natural insect repellent, bright flowers.", cost: "8" },
                { name: "Geraniums", image: "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg", description: "Repels mosquitoes and adds color.", cost: "12" },
                { name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/catnip-829618_1280.jpg", description: "Repels mosquitoes and pleases cats.", cost: "11" },
                { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/22/19/21/basil-1535606_1280.jpg", description: "Repels flies and mosquitoes.", cost: "9" },
                { name: "Citronella", image: "https://cdn.pixabay.com/photo/2017/06/16/17/58/lemon-grass-2409986_1280.jpg", description: "Famous natural mosquito repellent.", cost: "16" },
                { name: "Lemongrass", image: "https://cdn.pixabay.com/photo/2020/05/20/06/00/lemongrass-5193498_1280.jpg", description: "Contains citronella oil, repels bugs.", cost: "13" }
            ]
        }
    ];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        if (e) e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                                </svg>
                                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>
                                <div>{category.category}</div>
                            </h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">${plant.cost}</div>
                                        <button
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;