

const MenuItem = ({menuItem}) => {
    const {image, category, price, recipe} = menuItem;
    return (
        <div className='flex gap-8 mt-[76px]'>
            <div>
                <img className='rounded-e-[200px] rounded-bl-[200px] w-[118px] h-[104px]' src={image} alt="" />
            </div>
            <div>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-xl'>{category}</h1>
                        <p className='text-[#BB8506]'>{price}</p>
                    </div>
                    <p className='w-[443px]'>{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;