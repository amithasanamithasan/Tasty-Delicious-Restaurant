import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import feturedimg1 from"../../../assets/home/featured.jpg"

import '../Fetaured/Fetaured.css'
const Fetaured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-7 my-20">
            <SectionTitle subHeading="Check It Out"
            heading="Fetured Items "></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={feturedimg1} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>
                        JUNE,20,2029
                    </p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Porro accusamus eum quia error, illo enim voluptate excepturi, 
                    alias illum, laboriosam quo voluptates dolorem
                    inventore voluptatibus dolore ex cum aliquid. Provident.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fetaured;