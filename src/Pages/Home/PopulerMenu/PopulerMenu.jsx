import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";


const PopulerMenu = () => {
    const[menu ,setMenu] = useState([]);


useEffect(()=>{
fetch('menu.json')
.then(res=>res.json())
.then(data=> {
    const populerItems = data.filter(item=> item.category === 'popular');
    setMenu(populerItems)
})
},[])    
    return (
      <section className="mb-12">
        <SectionTitle
        heading="From Our Menu"
       subHeading="Populer Items"
        ></SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
                {menu.map(item => (
                    <Menuitem
                        key={item._id}
                        item={item}
                    />
                ))}
              
            </div>
            <div className="flex justify-center mt-4">
                <button className="btn btn-outline border-0 border-b-4">View All Menu</button>
            </div>
      </section>
    );
};

export default PopulerMenu;