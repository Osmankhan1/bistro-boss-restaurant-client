import FoodCard from "../../../Component/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mb-10'>
        {
            items.map(item => <FoodCard key={item.key} item={item}></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;