 import { useContext } from "react";

// import { useNavigate } from "react-router-dom";
 import { AuthContext } from "../../provider/AuthProvider";


 const GoogleWithLogin = () => {

//     const navigate = useNavigate()
     const { user, googleLogin } = useContext(AuthContext);


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                // toast.success('User logged in successfully');
                // navigate('/')
                console.log(res.user);
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                

            </div>
        </>
     );
 };

 export default GoogleWithLogin;