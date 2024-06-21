import { useState } from 'react';
import orderimg from'../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import Foodcard from '../../../Components/FoodCard/Foodcard';
import Ordertab from '../OrderTab/Ordertab';
const Order = () => {
  const[tabIndex ,setTabIndex]=useState()
  const [menu]=useMenu()
  const desserts= menu.filter(item=>item.category==='dessert');
  const pizzas= menu.filter(item=>item.category==='pizza');
  const salads= menu.filter(item=>item.category==='salad');
  const soups= menu.filter(item=>item.category==='soup');
  const offereds= menu.filter(item=>item.category==='offered');
    return (
      
        <div>
           <Cover img={orderimg} title='Order Food'></Cover>
           <div>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
   
  </TabList>
  <TabPanel>
 <Ordertab items={salads}></Ordertab>
  </TabPanel>
  <TabPanel>
<div  className='grid md:grid-cols-3 gap-10 p-4'>
{
      pizzas.map(item=> <Foodcard key={item._id} item={item}></Foodcard>)
    }
</div>
  </TabPanel>
  <TabPanel>
 <div  className='grid md:grid-cols-3 gap-10 p-4'>
 {
      soups.map(item=> <Foodcard key={item._id} item={item}></Foodcard>)
    }
 </div>
  </TabPanel>
  <TabPanel>
<div  className='grid md:grid-cols-3 gap-10 p-4'>
{
     desserts.map(item=> <Foodcard key={item._id} item={item}></Foodcard>)
    }
</div>
  </TabPanel>
  <TabPanel></TabPanel>
  
</Tabs>
           </div>
        </div>
    );
};

export default Order;