import React from 'react';
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        // Show an alert message
        alert('Message saved successfully');
    }
    const goback = () =>{
        navigate("/")
    }

    return (
        <div className='mainSection'>
            <div className='contact-container'>
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
                <br />
                <div className='contact-info'>
                    <div className='contact-item'>
                        <h2>Email</h2>
                        <p>mindaiginite@gmail.com</p>
                    </div>
                    <div className='contact-item'>
                        <h2>Phone</h2>
                        <p>+91 (123) 456-7890</p>
                    </div>
                </div>

                <div className='contact-form'>
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message' rows='4' required></textarea>
                        </div>
                        <button type='submit' className='contact-button' onSubmit={handleSubmit}>Send</button>
                        <button  className='contact-button' style={{marginLeft:"15px"}} onClick={goback}>Back</button>        
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Main;
