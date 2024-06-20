
import categoryimg2 from"../../../assets/home/chef-service.jpg"
const Category2 = () => {
    return (
        <div className="mx-auto">
        <div className="relative w-[1076px] h-[400px] my-24">
            <img src={categoryimg2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-pink-500 bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold mb-4">TASTY DELICIOUS</h1>
                <p className="text-center max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                    libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni
                    aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    </div>
    );
};

export default Category2;