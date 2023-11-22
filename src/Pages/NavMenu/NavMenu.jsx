import { Helmet } from 'react-helmet-async';
import MenuCover from '../../Share/MenuCover/MenuCover';
import menuImage from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import Menu from '../Menu/Menu';
import useMenu from '../../Hooks/useMenu';
import ShareTitle from '../../Share/ShareTitle/ShareTitle';
import MenuItem from '../Menu/MenuItem';
import Catagory from '../Menu/Catagory/Catagory';

const NavMenu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bristo Boss || Menu</title>
            </Helmet>
            <MenuCover img={menuImage} title='our menu'></MenuCover>
            {/* main cover */}
            <ShareTitle heading="TODAY'S OFFER" subHeading="---Don't miss---">
            </ShareTitle>
            {/* offered menu item */}
            <Catagory items={offered}></Catagory>
           
           
            {/* dessert menu items */}
            <Catagory items={dessert} title="Dessert" img={dessertImage}></Catagory>
          
           
           
            {/* pizza menu items */}
            <Catagory items={pizza} title="Pizza" img={pizzaImage}></Catagory>
          
           
            {/* salad menu items */}
            <Catagory items={salad} title="Salad" img={saladImage}></Catagory>
            
           
            {/* soup menu items */}
            <Catagory items={soup} title="Soup" img={soupImage}></Catagory>
           
           

        </div>
    );
};

export default NavMenu;