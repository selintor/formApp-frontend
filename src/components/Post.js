import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

function Post() {
  const [formList, setFormList] = useState([]);
    const[formName, setformName] = useState("");
    const formNameRef = useRef();
    const[formDesc, setformDesc] = useState("");
    const formDescRef = useRef();
    const[question, setQuestion] = useState("");
    const questionRef = useRef();
    const[question2, setQuestion2] = useState("");
    const question2Ref = useRef();
    const[question3, setQuestion3] = useState("");
    const question3Ref = useRef();
    const[question4, setQuestion4] = useState("");
    const question4Ref = useRef();
    const[question5, setQuestion5] = useState("");
    const question5Ref = useRef();
    var inputValues = {
      "formName": formName, 
      "formDesc": formDesc,
      "question": question,
      "question2": question2,
      "question3": question3,
      "question4": question4,
      "question5": question5
    }

    // const navigate = useNavigate();
    var { id } = useParams();
    const[postId, setPostId] = useState("null"); 

    const handleClick = () => {
      const inputData = axios.post('http://localhost:8080/forms', inputValues)
            .then(response => {             
                alert("Questions are saved to database! "+"Form ID is: " + response.data.id);
                id = response.data.id
                setFormList(response.data);
                return id;
            })
            const printId = () => {
              inputData.then((a) => {              
                console.log("inpudata",a);
              });
            };
            printId();
    }  
    useEffect(() => {
    }, []);

    return (
    <div className='main'>
        <form onSubmit={handleClick}>
          <div className='titles'>
              <input placeholder="Enter the topic..."ref={formNameRef} value={formName} onChange={e => setformName(e.target.value)} id='formName' type="text"></input>
              <input placeholder="Enter the description..."ref={formDescRef} value={formDesc} onChange={e => setformDesc(e.target.value)} id='formDesc' type="text"></input>
          </div>
          <div className='seperator'></div>
          <div className='formPanel'>
              <input placeholder="What do you want to ask?"ref={questionRef} value={question} onChange={e => setQuestion(e.target.value)} id='question' type="text"></input>
              <div id='answers'>
                <input id='yes' type="radio"></input>
                <label htmlFor="yes">YES</label>
                <input type="radio" id="no"></input>
                <label htmlFor="no">NO</label>
              </div>
          </div>
          <div className='formPanel'>
              <input placeholder="What do you want to ask?"ref={question2Ref} value={question2} onChange={e => setQuestion2(e.target.value)} id='question2' type="text"></input>
              <div id='answers'>
                <input id='yes' type="radio"></input>
                <label htmlFor="yes">YES</label>
                <input type="radio" id="no"></input>
                <label htmlFor="no">NO</label>
              </div>
          </div>
          <div className='formPanel'>
              <input placeholder="What do you want to ask?"ref={question3Ref} value={question3} onChange={e => setQuestion3(e.target.value)} id='question3' type="text"></input>
              <div id='answers'>
                <input id='yes' type="radio"></input>
                <label htmlFor="yes">YES</label>
                <input type="radio" id="no"></input>
                <label htmlFor="no">NO</label>
              </div>
          </div>
          <div className='formPanel'>
              <input placeholder="What do you want to ask?"ref={question4Ref} value={question4} onChange={e => setQuestion4(e.target.value)} id='question4' type="text"></input>
              <div id='answers'>
                <input id='yes' type="radio"></input>
                <label htmlFor="yes">YES</label>
                <input type="radio" id="no"></input>
                <label htmlFor="no">NO</label>
              </div>
          </div>
          <div className='formPanel'>
              <input placeholder="What do you want to ask?"ref={question5Ref} value={question5} onChange={e => setQuestion5(e.target.value)} id='question5' type="text"></input>
              <div id='answers'>
                <input id='yes' type="radio"></input>
                <label htmlFor="yes">YES</label>
                <input type="radio" id="no"></input>
                <label htmlFor="no">NO</label>
              </div>
          </div>
          <button id = "btnSubmit" type="submit">SUBMIT QUESTIONS</button>
          </form>
      </div>
    );
  }
  
  export { Post };