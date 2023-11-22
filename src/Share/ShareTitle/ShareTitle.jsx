

const ShareTitle = ({heading, subHeading}) => {
    return (
        <div className='mt-20  m-auto'>
                <p className="text-xl text-[#D99904] text-center ">{subHeading}</p>
                <h1 className="text-4xl text-center mt-9 border-y-4 w-[424px] py-4 m-auto">{heading}</h1>
            </div>
    );
};

export default ShareTitle;