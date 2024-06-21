import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverimg from'../../../assets/menu/banner3.jpg'
import dessertimg from'../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from'../../../assets/menu/pizza-bg.jpg'
import saladimg from'../../../assets/menu/salad-bg.jpg'
import soupimg from'../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const OurMenu = () => {
    const [menu]=useMenu();
    const desserts= menu.filter(item=>item.category==='dessert');
    const pizzas= menu.filter(item=>item.category==='pizza');
    const salads= menu.filter(item=>item.category==='salad');
    const soups= menu.filter(item=>item.category==='soup');
    const offereds= menu.filter(item=>item.category==='offered');

    return (
        <div>
            <Helmet>
                <title>Testy_deliciouse|OUR_MENU</title>
            </Helmet>
          <Cover img={coverimg} title="OUR MENU"></Cover>
          {/* main cover page */}
          <SectionTitle 
          subHeading='Donot Miss'
          heading="TODAY'S OFFER"></SectionTitle>
          {/*  offered menu items*/}
          <MenuCategory items={offereds}></MenuCategory>
       {/* desserts items */}
    <MenuCategory items={desserts}  title="Desserts"  img={dessertimg}></MenuCategory>
    {/* Pizzas */}

    <MenuCategory  items={pizzas}  title="pizzas" img={pizzaimg} ></MenuCategory>
    {/* Salads */}
    <MenuCategory  items={salads} title='salads' img={saladimg }></MenuCategory>
    {/* soups */}

    <MenuCategory items={soups} title="soups"img={soupimg}></MenuCategory>
        </div>
    );
};

export default OurMenu;