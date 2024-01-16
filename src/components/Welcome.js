import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Signup from './Signup';


const Welcome = () => {
    const navigate = useNavigate();
    const data = false;
    const [apiData, setApiData] = useState([]);

    const getApiData = async() =>{
        const response = await axios.get("http://127.0.0.1:3002/");
        setApiData(response.data)
    }

    useEffect(() =>{
        getApiData()
    },[])

    const handleSignupclick = () =>{
        navigate('/signup');
    }


    const image_url = 'data:image/jpeg;base64,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'
    
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
                <br></br>
                <button className='button is-success' onClick={handleSignupclick}>Add User</button>
                <div className="hero-body">
                    <div className="container">
                        <div className="has-text-centered">
                            {apiData.map((item, index) =>{
                                return (
                                    <div className='container' key={item.id}>
                                        <h1 className='title'>{item.fullName}</h1>
                                        <p className='subtitle'>{item.email}</p>
                                        <h2>{item.id}</h2>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default Welcome;
