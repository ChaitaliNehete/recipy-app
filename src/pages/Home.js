import React from 'react';
import { useGlobalContext } from '../context';

const Home = () => {
    const { categories, filterItems, menuItems } = useGlobalContext()
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <div className="btn-container">
                    {categories.map((category, index) => {
                        return (
                            <button
                                type="button"
                                className="filter-btn"
                                key={index}
                                onClick={() => filterItems(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
                <div className='section-center'>
                    {menuItems.map((menuItem) => {
                        const { id, title, img, desc, price } = menuItem;
                        return (
                            <article key={id} className='menu-item'>
                                <img src={img} alt={title} className='photo' />
                                <div className='item-info'>
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className='price'>${price}</h4>
                                    </header>
                                    <p className='item-text'>{desc}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Home;