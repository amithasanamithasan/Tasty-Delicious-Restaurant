import { useState } from 'react';
import orderimg from'../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';

import Ordertab from '../OrderTab/Ordertab';
import { useParams } from 'react-router-dom';
const Order = () => {
  const categories=['salad ', 'pizza', 'soup', 'dessert','drink'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu]=useMenu();

  console.log(category);

  const desserts= menu.filter(item=>item.category==='dessert');
  const pizzas= menu.filter(item=>item.category==='pizza');
  const salads= menu.filter(item=>item.category==='salad');
  const soups= menu.filter(item=>item.category==='soup');
  const drinks= menu.filter(item=>item.category==='drinks');
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
  <Ordertab items={pizzas}></Ordertab>
  </TabPanel>
  <TabPanel>
  <Ordertab items={soups}></Ordertab>

  </TabPanel>
  <TabPanel>
<Ordertab items={desserts}></Ordertab>
  </TabPanel>
  <TabPanel>
    <Ordertab items={drinks}></Ordertab>
  </TabPanel>
  
</Tabs>
           </div>
        </div>
    );
};

export default Order;