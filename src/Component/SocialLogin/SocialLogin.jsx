import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate()
    // const location = useLocation()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
        axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
            })
            navigate('/', )
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn bg-slate-700 text-white hover:bg-slate-600">
                <FaGoogle></FaGoogle>
                <span>Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;