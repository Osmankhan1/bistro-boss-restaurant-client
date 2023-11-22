import ShareTitle from "../../../Share/ShareTitle/ShareTitle";
import img from '../../../assets/home/featured.jpg'
import '../Feachared/feachared.css'


const Feachared = () => {
    return (
        <div className="feachared bg-fixed text-[#FFF]">
            <div className="bg-black bg-opacity-50 pt-11">
                <ShareTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></ShareTitle>
                <div className="md:flex gap-16 mt-12 mb-32 py-32 px-16 ">
                    <div className="w-1/2">
                        <img className="w-[648px] h-[400px]" src={img} />
                    </div>
                    <div className="w-1/2 mt-28 ">
                        <p>March 20, 2023</p>
                        <p className="uppercase">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="uppercase mt-[14px] border-b-4 border-b-white btn btn-outline border-0 text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feachared;