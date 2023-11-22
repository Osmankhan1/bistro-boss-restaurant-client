import { Parallax, Background } from 'react-parallax';

const MenuCover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="bg dog"
        strength={-200}
    >
          <div className="hero h-[700px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" w-[1096px] h-[335px] bg-black bg-opacity-50">
                    <h1 className="mb-5 text-5xl font-bold uppercase mt-[100px]">{title}</h1>
                    <p className="mb-5 w-[800px] m-auto text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    </Parallax>
       
    );
};

export default MenuCover;