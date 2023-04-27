
// import React, { useEffect,useState } from 'react';
// import axios from "axios"


// function Ladmin() {
//   const [initialQuestions, setInitialQuestions] = useState([]);
  
//   const addInitialQuestion = () => {
//     if (initialQuestions.length < 4) {
//       setInitialQuestions([...initialQuestions, {question: '', followUpQuestions:{follow:[],sub:[]}}]);
//     }
//   };
  
//   const updateInitialQuestion = (index, value) => {
//     const updatedQuestions = [...initialQuestions];
//     updatedQuestions[index].question = value;
//     setInitialQuestions(updatedQuestions);
//   };
  
//   const addFollowUpQuestion = (index) => {
//     const updatedQuestions = [...initialQuestions];
//     if (updatedQuestions[index].followUpQuestions.follow.length < 4) {
//       updatedQuestions[index].followUpQuestions.follow.push('');
//       setInitialQuestions(updatedQuestions);
//     }
//   };
  
//   const updateFollowUpQuestion = (initialIndex , followUpIndex, value) => {
//     const updatedQuestions = [...initialQuestions];
//       //  console.log("add sub ques",initialIndex,followUpIndex)
//     updatedQuestions[initialIndex].followUpQuestions.follow[followUpIndex]= value;
//     setInitialQuestions(updatedQuestions);
//   };
//   const addSubQues=(initialIndex)=>{
//     const updatedQuestions = [...initialQuestions];
//     // console.log("add sub ques",updatedQuestions[initialIndex].followUpQuestions.sub.length)
//       if( updatedQuestions[initialIndex].followUpQuestions.sub.length<4){
//         updatedQuestions[initialIndex].followUpQuestions.sub.push('')
//         // console.log("initial", initialIndex, followUpIndex)
//         setInitialQuestions(updatedQuestions);
//       }
//     }
//     const updateSubQues=(initialIndex , index,value)=>{
//       const updatedQuestions = [...initialQuestions];
//       // console.log("hyhygyugoopi",initialIndex,index)
//       updatedQuestions[initialIndex].followUpQuestions.sub[index]=value
//        setInitialQuestions(updatedQuestions)
//     }    
//   const rendersub=(initialIndex,followUpIndex)=>{
//       return(
//         initialQuestions[initialIndex].followUpQuestions.sub.map((sub,index)=>(
//           <div key={index}>
//            <label>Follow {index + 1}</label>
//             <input type="text" value={sub} onChange={(e) => updateSubQues(initialIndex, index, e.target.value)} />
//             {/* <button onClick={() => addSubQues(index)}>Add </button> */}
//                   {console.log("Add follow up",initialIndex,index)}

//           </div>
//         ))
//       )
//     }
  
//   const renderFollowUpQuestions = (initialIndex) => {
//     return (
//       initialQuestions[initialIndex].followUpQuestions.follow.map((follow, index) => (
//         <div key={index}>
//           <label>Follow-up Question {index + 1}</label>
//           <input type="text" value={follow} onChange={(e) => updateFollowUpQuestion(initialIndex, index, e.target.value)} />
//           <button onClick={() => addSubQues(initialIndex ,index)}>Add </button>
//           {
//             rendersub(initialIndex,index)
//           }
//           {/* {console.log("Add follow up",initialIndex,index)} */}
//         </div>
//       ))
//     );
//   };

  
//   const renderInitialQuestions = () => {
//     return (
//       initialQuestions.map((question, index) => (
//         <div key={index}>
//           <label>Initial Question {index + 1}</label>
//           <input type="text" value={question.question} onChange={(e) => updateInitialQuestion(index, e.target.value)} />
//           <button onClick={() => addFollowUpQuestion(index)}>Add Follow-up Question</button>
//           {renderFollowUpQuestions(index)}
//         </div>
//       ))
//     );
//   };
//   useEffect(()=>
//   {  axios.get('http://127.0.0.1:5000/protected-admin',
//    {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//       }
      
//     })
//     .then(response => {
//       console.log((response))
//     })
//     .catch(error => {
//       console.error(error);
//     })
      
//   }
//   ,[])
 
//   return (
//     <div>
//       <button onClick={addInitialQuestion}>Add Initial Question</button>
//       {renderInitialQuestions()}
//     </div>
//   );
// }

// export default Ladmin;
import React, { useEffect,useState } from 'react';
import axios from "axios"


function Ladmin() {
  const [initialQuestions, setInitialQuestions] = useState([]);
  
  const addInitialQuestion = () => {
    if (initialQuestions.length < 4) {
      setInitialQuestions([...initialQuestions, {question: '', followUpQuestions:{follow:[{sub:[]}]/*,  follow:[],sub:[]*/}}]);
    }
  };
  
  const updateInitialQuestion = (index, value) => {
    const updatedQuestions = [...initialQuestions];
    updatedQuestions[index].question = value;
    setInitialQuestions(updatedQuestions);
  };
  
  const addFollowUpQuestion = (index) => {
    const updatedQuestions = [...initialQuestions];
    if (updatedQuestions[index].followUpQuestions.follow.length < 4) {
      updatedQuestions[index].followUpQuestions.follow.push('');
      setInitialQuestions(updatedQuestions);
    }
  };
  
  const updateFollowUpQuestion = (initialIndex , followUpIndex, value) => {
    const updatedQuestions = [...initialQuestions];
      //  console.log("add sub ques",initialIndex,followUpIndex)
    updatedQuestions[initialIndex].followUpQuestions.follow[followUpIndex]= value;
    setInitialQuestions(updatedQuestions);
  };
  const addSubQues=(initialIndex)=>{
    const updatedQuestions = [...initialQuestions];
    // console.log("add sub ques",updatedQuestions[initialIndex].followUpQuestions.sub.length)
      if( updatedQuestions[initialIndex].followUpQuestions.sub.length<4){
        updatedQuestions[initialIndex].followUpQuestions.sub.push('')
        // console.log("initial", initialIndex, followUpIndex)
        setInitialQuestions(updatedQuestions);
      }
    }
    const updateSubQues=(initialIndex , index,value)=>{
      const updatedQuestions = [...initialQuestions];
      // console.log("hyhygyugoopi",initialIndex,index)
      updatedQuestions[initialIndex].followUpQuestions.sub[index]=value
       setInitialQuestions(updatedQuestions)
    }    
  const rendersub=(initialIndex,followUpIndex)=>{
      return(
        initialQuestions[initialIndex].followUpQuestions.sub.map((sub,index)=>(
          <div key={index}>
           <label>Follow {index + 1}</label>
            <input type="text" value={sub} onChange={(e) => updateSubQues(initialIndex, index, e.target.value)} />
            {/* <button onClick={() => addSubQues(index)}>Add </button> */}
                  {console.log("Add follow up",initialIndex,index,followUpIndex)}

          </div>
        ))
      )   
    }
  
  const renderFollowUpQuestions = (initialIndex) => {
    return (
      initialQuestions[initialIndex].followUpQuestions.follow.map((follow, index) => (
        <div key={index}>
          <label>Follow-up Question {index + 1}</label>
          <input type="text" value={follow} onChange={(e) => updateFollowUpQuestion(initialIndex, index, e.target.value)} />
          <button onClick={() => addSubQues(initialIndex ,index)}>Add </button>
          {
            rendersub(initialIndex,index)
          }
          {/* {console.log("Add follow up",initialIndex,index)} */}
        </div>
      ))
    );
  };

  
  const renderInitialQuestions = () => {
    return (
      initialQuestions.map((question, index) => (
        <div key={index}>
          <label>Initial Question {index + 1}</label>
          <input type="text" value={question.question} onChange={(e) => updateInitialQuestion(index, e.target.value)} />
          <button onClick={() => addFollowUpQuestion(index)}>Add Follow-up Question</button>
          {renderFollowUpQuestions(index)}
        </div>
      ))
    );
  };
  useEffect(()=>
  {  axios.get('http://127.0.0.1:5000/protected-admin',
   {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
      
    })
    .then(response => {
      console.log((response))
    })
    .catch(error => {
      console.error(error);
    })
      
  }
  ,[])
 
  return (
    <div>
      <button onClick={addInitialQuestion}>Add Initial Question</button>
      {renderInitialQuestions()}
    </div>
  );
}

export default Ladmin;