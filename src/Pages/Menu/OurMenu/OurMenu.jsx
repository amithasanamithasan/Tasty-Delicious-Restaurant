import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverimg from'../../../assets/menu/banner3.jpg'


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Testy_deliciouse|OUR_MENU</title>
            </Helmet>
          <Cover img={coverimg} title="OUR MENU"></Cover>
    
       
        </div>
    );
};

export default OurMenu;