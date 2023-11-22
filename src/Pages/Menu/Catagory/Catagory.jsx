import { Link } from "react-router-dom";
import MenuCover from "../../../Share/MenuCover/MenuCover";
import MenuItem from "../MenuItem";


const Catagory = ({ items, title, img }) => {
    return (
        <div>
            {title && <MenuCover img={img} title={title}></MenuCover>}
            <div className='grid md:grid-cols-2'>

                {

                    items.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>)

                }

            </div >
            <Link to={`/orderFood/${title}`}>
                <div className='flex justify-center'>
                    <button>
                        <h1 className='text-xl font-medium text-center mt-16 mb-16 '>ORDER YOUR FAVOURITE FOOD</h1>
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Catagory;