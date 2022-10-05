import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function CreateForm(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [formList, setFormList] = useState([]);
    var id;
    
    useEffect(() => {
        fetch("/forms")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setFormList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error){
        return <div>Error!</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else{
        return(           
            <ul>                  
            {formList.map(form =>             
                 <li key={form.id}>
                 <Link to={`/form/${form.id}`}>
                  {form.id} {form.formName} {form.formDesc} {form.question} {form.question2} 
                  {form.question3} {form.question4} {form.question5}
                  </Link> 
                  </li>
                  )}                     
            </ul>
        )
    }
}
export {CreateForm};