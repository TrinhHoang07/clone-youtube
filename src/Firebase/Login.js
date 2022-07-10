import { auth, googleProvider } from './Service';
import { useDispatch } from "react-redux";
import { getDataUser } from '../redux/actions';
import './Login.scss';
import { useNavigate } from "react-router-dom";


function Login() {
    console.log('Login render');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            const user = res.user;
            const { displayName, email, metadata } = user;
            dispatch(getDataUser({
                displayName,
                email,
                metadata,
            }))
            user && navigate('/');
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="login-box" style={{ height: '100vh', display: 'flex' }}>
            <button
                className="login-button"
                style={{ margin: 'auto', border: 'none', padding: '14px 24px', backgroundColor: 'red', color: 'white' }}
                onClick={handleLogin}
            >
                Login With Google
            </button>
        </div>
    );

}

export default Login;