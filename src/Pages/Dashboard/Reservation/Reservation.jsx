import useAxiosPublic from "../../../Hooks/useAxiosPublic";




const Reservation = () => {
    const axiosPublic = useAxiosPublic();
  
const handleReservation=async (event)=>{
 
      event.preventDefault();
    const form = event.target;
    const reserve = {
        date: form.date.value,
        time: form.time.value,
        guest: form.guest.value,
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
      };

      try {
        const res = await axiosPublic.post('/reservation', reserve);
        console.log(res);
      } catch (error) {
        console.error('Error making reservation:', error);
      }

}
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-lg w-full p-6 bg-white shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Book a Table</h2>
          <form onSubmit={handleReservation}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="date">Date*</label>
              <input type="date" name="date" id="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="time">Time*</label>
              <input type="time" name="time" id="time" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="guest">Guest*</label>
              <select id="guest" name="guest" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6 People</option>
                <option>7 People</option>
                <option>8 People</option>
                <option>9 People</option>
                <option>10 People</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name*</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="phone">Phone*</label>
              <input type="tel" name="phone" id="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Phone Number" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Email" />
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md">Book A Table</button>
            </div>
          </form>
        </div>
  
        <div className="max-w-lg w-full p-6 bg-white shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-gray-700 mb-2">Phone</div>
              <div className="text-yellow-500 font-semibold">+38 (012) 34 56 789</div>
            </div>
            <div>
              <div className="text-gray-700 mb-2">Address</div>
              <div className="text-yellow-500 font-semibold">123 Main Street, Anytown</div>
            </div>
            <div>
              <div className="text-gray-700 mb-2">Working Hours</div>
              <div className="text-yellow-500 font-semibold">Mon - Fri: 08:00 - 22:00</div>
              <div className="text-yellow-500 font-semibold">Sat - Sun: 10:00 - 23:00</div>
            </div>
          </div>
        </div>
      </div>
        
      );
    };

export default Reservation;