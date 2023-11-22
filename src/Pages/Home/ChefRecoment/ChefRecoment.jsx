import ShareTitle from "../../../Share/ShareTitle/ShareTitle";
import salad from '../../../assets/menu/salad-bg.jpg'

const ChefRecoment = () => {
    return (
        <div className="mb-32">
            <ShareTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"---Should Try---"}
            ></ShareTitle>
            <div className="grid grid-cols-3">

                {/* cart 1 */}
                <div className="mt-12">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={salad} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-2xl text-center">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="btn  text-xl text-[#BB8506] font-medium hover:bg-black">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cart 1 */}
                <div className="mt-12">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={salad} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-2xl text-center">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="btn  text-xl text-[#BB8506] font-medium hover:bg-black">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cart 1 */}
                <div className="mt-12">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={salad} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-2xl text-center">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center">
                                <button className="btn  text-xl text-[#BB8506] font-medium hover:bg-black">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecoment;