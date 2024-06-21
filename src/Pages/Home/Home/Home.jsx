import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Category2 from "../Category2/Category2";
import Fetaured from "../Fetaured/Fetaured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Testy_deliciouse|HOME</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <Category2></Category2>
           <PopulerMenu></PopulerMenu>
           <Fetaured></Fetaured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;