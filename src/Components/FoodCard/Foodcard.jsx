

const Foodcard = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className="rounded-lg" src={image}alt="Shoes" /></figure>
        <p className=" absolute right-0 bg-black text-white text-2xl top-4 mx-4  "> PRICE:${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
         
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default Foodcard;