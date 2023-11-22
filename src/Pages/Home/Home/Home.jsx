import { Helmet } from "react-helmet-async";
import Banner from "../../Bannar/Banner";
import Boss from "../../Boss/Boss";
import Menu from "../../Menu/Menu";
import Order from "../../Order/Order";
import CallUs from "../CallUs/CallUs";
import ChefRecoment from "../ChefRecoment/ChefRecoment";
import Feachared from "../Feachared/Feachared";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bristo Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Order></Order>
            <Boss></Boss>
            <Menu></Menu>
            <CallUs></CallUs>
            <ChefRecoment></ChefRecoment>
            <Feachared></Feachared>
            <Review></Review>
        </div>
    );
};

export default Home;