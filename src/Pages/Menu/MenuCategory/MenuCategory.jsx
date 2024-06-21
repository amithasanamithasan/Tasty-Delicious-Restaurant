import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/MenuItem/Menuitem";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-7">
               { title && <Cover img={img} title="OUR MENU"></Cover>}
               <div className="grid md:grid-cols-2 gap-10 my-16">
                {items.map(item => (
                    <Menuitem
                        key={item._id}
                        item={item}
                    />
                ))}
              
            </div>
        </div>
    );
};

export default MenuCategory;