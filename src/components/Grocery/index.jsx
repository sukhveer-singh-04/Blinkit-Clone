import React from 'react';
import './index.css';

const Grocery = ({ groceryData , mouthFreshenersData}) => {
    return (
        <>
            <div className="grocery-container">
                {
                    groceryData.map((item, index) => (
                        <div className="grocery-item" key={index}>
                            <img src={item.img} alt={`grocery-${index}`}></img>
                        </div>
                    ))
                }




                {/* 

                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div>  <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png'></img>
                </div>
                <div className="grocery-item">
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png'></img>
                </div> */}
            </div>



            <section className="grocery-container-2">
                <h2>Mouth fresheners</h2>

                <div className="arrows">
                        <img src='images/angle-left-solid.svg'></img>
                        <img src='images/angle-right-solid.svg'></img>
                </div>

                <div className="productRow">
                    {
                        mouthFreshenersData.map((item, index) => (
                            <div className="item" key={index}>
                                <div className="image-holder">
                                    <img src={item.img}></img>
                                </div>
                                <p className="time">{item.time}</p>
                                <h2 className="name">{item.name}</h2>
                                <p className="weight">{item.weight}</p>

                                <div className="price-add">
                                    <h3>{item.price}</h3>
                                    <button className="add" >ADD</button>
                                </div>
                            </div>
                        ))
                    }
                    {/*                     
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-holder">
                            <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897'></img>
                        </div>
                        <p className="time">30 MINS</p>
                        <h2 className="name">Trident Watermelon Twist Gum</h2>
                        <p className="weight">26.6 g (14 x 1.9 g)</p>

                        <div className="price-add">
                            <h3>₹160</h3>
                            <button className="add" >ADD</button>
                        </div>
                    </div> */}
                </div>


            </section>
        </>
    )
}

export default Grocery;