
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";
import useMenu from "../../../Hooks/useMenu";


const PopulerMenu = () => {

const[menu]=useMenu();
const popular =menu.filter(item=>item.category==='popular')
   
    return (
      <section className="mb-12">
        <SectionTitle
        heading="From Our Menu"
       subHeading="Populer Items"
        ></SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
                {popular.map(item => (
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