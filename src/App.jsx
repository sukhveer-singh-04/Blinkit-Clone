import './App.css';
import NavBar from './components/Nav-Bar';
import Grocer from './components/Grocery';
import Footer from './components/Footer';

const groceryData = [
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png',
  }, {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png',
  }, {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png',
  }, {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png',
  }, {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png',
  }, {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-3_9.png',
  }, {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-12/paan-corner_web.png',
  },
  {
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-2_10.png',
  }
];

const mouthFreshenersData = [
  {
    id: 0,
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498',
    time: '30 MINS',
    name: 'Trident Watermelon Twist Gum',
    weight: '26.6 g (14 x 1.9 g)',
    price: '₹160'
  },
  {
    id: 1,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498",
    name: "Trident Watermelon Twist Gum",
    weight: "26.6 g (14 x 1.9 g)",
    time: '30 MINS',
    price: "₹160",
  },
  {
    id: 2,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Orbit Spearmint Chewing Gum",
    weight: "22.8 g (12 x 1.9 g)",
    price: "₹150",
  },
  {
    id: 3,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897",
    time: '30 MINS',
    name: "Center Fresh Mints",
    weight: "20 g (20 pieces)",
    price: "₹99",
  },
  {
    id: 4,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Mentos Pure Fresh",
    weight: "15 g (10 pieces)",
    price: "₹70",
  }, {
    id: 0,
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498',
    time: '30 MINS',
    name: 'Trident Watermelon Twist Gum',
    weight: '26.6 g (14 x 1.9 g)',
    price: '₹160'
  },
  {
    id: 1,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498",
    name: "Trident Watermelon Twist Gum",
    weight: "26.6 g (14 x 1.9 g)",
    time: '30 MINS',
    price: "₹160",
  },
  {
    id: 2,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Orbit Spearmint Chewing Gum",
    weight: "22.8 g (12 x 1.9 g)",
    price: "₹150",
  },
  {
    id: 3,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897",
    time: '30 MINS',
    name: "Center Fresh Mints",
    weight: "20 g (20 pieces)",
    price: "₹99",
  },
  {
    id: 4,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Mentos Pure Fresh",
    weight: "15 g (10 pieces)",
    price: "₹70",
  }, {
    id: 0,
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498',
    time: '30 MINS',
    name: 'Trident Watermelon Twist Gum',
    weight: '26.6 g (14 x 1.9 g)',
    price: '₹160'
  },
  {
    id: 1,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498",
    name: "Trident Watermelon Twist Gum",
    weight: "26.6 g (14 x 1.9 g)",
    time: '30 MINS',
    price: "₹160",
  },
  {
    id: 2,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Orbit Spearmint Chewing Gum",
    weight: "22.8 g (12 x 1.9 g)",
    price: "₹150",
  },
  {
    id: 3,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897",
    time: '30 MINS',
    name: "Center Fresh Mints",
    weight: "20 g (20 pieces)",
    price: "₹99",
  },
  {
    id: 4,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Mentos Pure Fresh",
    weight: "15 g (10 pieces)",
    price: "₹70",
  }, {
    id: 0,
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498',
    time: '30 MINS',
    name: 'Trident Watermelon Twist Gum',
    weight: '26.6 g (14 x 1.9 g)',
    price: '₹160'
  },
  {
    id: 1,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498",
    name: "Trident Watermelon Twist Gum",
    weight: "26.6 g (14 x 1.9 g)",
    time: '30 MINS',
    price: "₹160",
  },
  {
    id: 2,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Orbit Spearmint Chewing Gum",
    weight: "22.8 g (12 x 1.9 g)",
    price: "₹150",
  },
  {
    id: 3,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897",
    time: '30 MINS',
    name: "Center Fresh Mints",
    weight: "20 g (20 pieces)",
    price: "₹99",
  },
  {
    id: 4,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Mentos Pure Fresh",
    weight: "15 g (10 pieces)",
    price: "₹70",
  }, {
    id: 0,
    img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498',
    time: '30 MINS',
    name: 'Trident Watermelon Twist Gum',
    weight: '26.6 g (14 x 1.9 g)',
    price: '₹160'
  },
  {
    id: 1,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ddaa1d84-f4ba-41cb-9bf1-e1f840050c81.jpg?ts=1707557498",
    name: "Trident Watermelon Twist Gum",
    weight: "26.6 g (14 x 1.9 g)",
    time: '30 MINS',
    price: "₹160",
  },
  {
    id: 2,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Orbit Spearmint Chewing Gum",
    weight: "22.8 g (12 x 1.9 g)",
    price: "₹150",
  },
  {
    id: 3,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897",
    time: '30 MINS',
    name: "Center Fresh Mints",
    weight: "20 g (20 pieces)",
    price: "₹99",
  },
  {
    id: 4,
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
    time: '30 MINS',
    name: "Mentos Pure Fresh",
    weight: "15 g (10 pieces)",
    price: "₹70",
  },
];

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="main-content">
      <Grocer groceryData={groceryData} mouthFreshenersData={mouthFreshenersData} />
      <Grocer groceryData={[]} mouthFreshenersData={mouthFreshenersData} />
      <Grocer groceryData={[]} mouthFreshenersData={mouthFreshenersData} />
      <Grocer groceryData={[]} mouthFreshenersData={mouthFreshenersData} />
      </div>
      <Footer/>
    </>
  )
}

export default App
