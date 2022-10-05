import React, {} from 'react';
import './Home.css';
import {useNavigate} from "react-router-dom";

function Home(){
    const navigateCreate = useNavigate();
    const navigateForm = useNavigate();
    
    const createClick = () => {
        navigateCreate("/create-form")
    }
    const formClick = () => {
        navigateForm("/form")
    }

    return(
        <div className='homePage'>
            <h1 id= "title">WHAT DO YOU WANT TO DO?</h1>
            <div className='container'>
                <div className='goCreatePage'>
                    <h1>CREATE A FORM</h1>
                    <button  onClick={createClick} type='button' id='btnCreate'>GO</button>
                </div>
                <div className='goCreatedForms'>
                    <h1>SEE CREATED FORMS</h1>
                    <button onClick={formClick} type='button' id='btnForms'>GO</button>
                </div>
            </div>

        </div>
    );
}
export {Home}