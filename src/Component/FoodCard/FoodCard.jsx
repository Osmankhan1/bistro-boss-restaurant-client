import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UseAxoisSecure from "../../Hooks/UseAxoisSecure";
import UseCart from "../../Hooks/UseCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxoisSecure();
    const [,refetch] = UseCart();


    const handleAddToCart = () => {
        if(user && user.email){
            // to do: send cart item to the database
          
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price 

            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: `${name} added succesfully in your cart`,
                        icon: "success"
                      });
                    //   refresh to update cart
                    refetch();
                }

            })

        }
        else{
            Swal.fire({
                title: "You no login now",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please login"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state: {from: location}})
                }
              });  
        }
        
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="hover:scale-125 duration-200" src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white font-medium absolute right-0 mr-5 mt-5 px-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={ handleAddToCart} className="btn font-xl btn-outline bg-slate-200 text-[#BB8506] border-0 border-b-4 ">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;