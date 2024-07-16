
import logo1 from"../../../assets/logo1.jpg"
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contauctus = () => {
    return (

           <div className="py-24">
      <div className="bg-[#2e0249] lg:max-w-full rounded-lg mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-8 sm:p-10 p-4 font-sans">
          <div>
            <img src={logo1} alt="Contact Us" className="w-[100px] rounded-lg h-auto"/>
            <h1 className="text-4xl font-extrabold text-white mt-4">Testy and Delicious Food </h1>
            <p className=" text-gray-400 mt-3 text-1xl">
             We Provide 24 Hours Services and 
             Our | Email| Location| Is Available. You Can Contact us For Any Problem Or Need! 
            </p>
            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                   
                    data-original="#000000"
                  />
                </svg>
                <a href="amit-35-1773@diu.edu.bd" className="text-white flex text-sm ml-3">
                  <MdOutlineMailOutline className="text-3xl text-white " ></MdOutlineMailOutline><strong className="text-2xl">amit-35-1773@diu.edu.bd</strong>
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 482.6 482.6"
                >
                     
                   
                      
                    
                  </svg>
                  <a href="tel:+0088 01797522144" className="text-white flex text-sm ml-3">
                  <FaPhone className="text-3xl text-white "></ FaPhone >  <strong className="text-2xl">+01797522144</strong> 
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 489.3 489.3"
                  >
                    <path
                     
                      data-original="#000000"
                    />
                    <path
                     
                      data-original="#000000"
                    />
                  </svg>
                  <a
                    href="https://www.google.com/maps/dir//123+Main+St,+City,+Country"
                   className="text-white flex text-sm ml-3"
                  >
                  <FaLocationDot className="text-3xl text-white "></FaLocationDot>  <strong className="text-2xl"> Country Bangladesh </strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
  <form>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="Name"
          className="block text-sm font-medium text-gray-700"
        >
          NAME*
        </label>
        <input
          type="text"
          name="Name"
          id="Name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="Location"
          className="block text-sm font-medium text-gray-700"
        >
          LOCATION*
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          EMAIL*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          PHONE*
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
    </div>
    <div className="mt-4">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
        Message*
      </label>
      <textarea
        id="message"
        name="text"
        rows="4"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
      ></textarea>
    </div>
    <div className="mt-6 text-right">
      <button
        type="submit"
        className="bg-[#2e0249] text-white py-2 px-4 rounded-md hover:bg-[#1e0133]"
      >
        Send Message
      </button>
    </div>
  </form>
</div>
          </div>
        </div>
        <div className="relative py-2 h-80 md:h-[350px]">
  <iframe
    src="https://maps.google.com/maps?q=Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
      </div>


    );
};

export default Contauctus; 