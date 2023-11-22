import { useEffect, useState } from 'react';
import ShareTitle from '../../Share/ShareTitle/ShareTitle';
import MenuItem from './MenuItem';
import { data } from 'autoprefixer';
import useMenu from '../../Hooks/useMenu';
const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menus, setMenus] = useState();
    const [dataLength, setDataLength] = useState(6);

  
    // useEffect(() => {
    //     fetch('Menu.json')
    //         .then(res => res.json())
    //         .then(data => setMenus(data))
    // }, [])
    return (
        <div className='mb-28'>
            <ShareTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></ShareTitle>
            <div className='grid md:grid-cols-2'>

                {
                    popular &&
                    popular.slice(0, dataLength).map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>)
                    
                }

            </div >
            <div className={dataLength === data.length ? 'hidden' : ''}>
                <div className='border-b-4 w-[238px] mt-16 mx-auto '>

                    <button onClick={() => setDataLength(menu.Length)} className='text-xl flex justify-center m-auto font-semibold mb-3 hover:text-slate-500'>View Full Menu</button>
                </div>

            </div>
        </div>
    );
};

export default Menu;