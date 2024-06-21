import { Link } from "react-router-dom";
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
              <div>
              <Link to={`/order/${title}`}>
               <button className="btn btn-outline border-0 border-b-4 mt-4 justify-center">Order Your Favourite Food</button>
               </Link>
              </div>
            </div>
        </div>
    );
};

export default MenuCategory;