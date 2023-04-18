import React, { useState } from 'react';
function Ladmin() {
  // const [showForm, setShowForm] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const[question,setQuestion]=useState([Array(4).fill(''),])
  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...question];
    updatedQuestions[currentStep][index] = event.target.value;
    setQuestion(updatedQuestions);
  }; 
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  }
  return (
    <div>
      <button onClick={toggleForm}>
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </button>     
     {isFormVisible  &&
       <form>
          <label>Client Name</label>
          <input type='text' placeholder="Client Name"  name="email" ></input>
          <div key={index}>
          <label>{`Sub-question ${selectedSubQuestion + 1}.${index + 1}:`}</label>
          <input type="text" value={question} onChange={(e) => handleQuestionChange(e, index)} />
        </div>
       </form>
      }
    </div>
  )
}

export default Ladmin