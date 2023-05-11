
// import React, { useEffect,useState } from 'react';
// import axios from "axios"


// function Ladmin() {
//   const [initialQuestions, setInitialQuestions] = useState([]);
//   // const[formValues,setFormValues]=useState(initialQuestions) 
//   // const handleChange=(e)=>
//   // {      
//   //   const {name,value}=e.target
//   //   setFormValues({...formValues, [name] :value})
//   //   console.log(formValues,"usestar")
//   // }
  
//   const addInitialQuestion = () => {
//     if (initialQuestions.length < 4) {
//       // setInitialQuestions([...initialQuestions, {question: '', followUpQuestions:{follow:[],sub:[]}}]);
//       setInitialQuestions([...initialQuestions, {question: '', followUpQuestions:[]}]);
//     }
//   };
  
//   const updateInitialQuestion = (index, value) => {
//     const updatedQuestions = [...initialQuestions];
//     updatedQuestions[index].question = value;
//     setInitialQuestions(updatedQuestions);
//   };
  
//   const addFollowUpQuestion = (index) => {
//     const updatedQuestions = [...initialQuestions];
//     // if (updatedQuestions[index].followUpQuestions.follow.length < 4) {
//     if (updatedQuestions[index].followUpQuestions.length < 4) {
//       updatedQuestions[index].followUpQuestions.push({name:'',sub:[]});

//       // updatedQuestions[index].followUpQuestions.follow.push('');
//       setInitialQuestions(updatedQuestions);
//     }
//   };
  
//   const updateFollowUpQuestion = (initialIndex , followUpIndex, value) => {
//     const updatedQuestions = [...initialQuestions];
//       //  console.log("add sub ques",initialIndex,followUpIndex)
//     updatedQuestions[initialIndex].followUpQuestions[followUpIndex].name= value;
//     setInitialQuestions(updatedQuestions);
//   };
//   const addSubQues=(initialIndex,index)=>{
//     const updatedQuestions = [...initialQuestions];
//     // console.log("add sub ques",updatedQuestions[initialIndex].sub.length)
//       if( updatedQuestions[initialIndex].followUpQuestions[index].sub.length<4){
//         updatedQuestions[initialIndex].followUpQuestions[index].sub.push('')
//         // console.log("initial", initialIndex, followUpIndex)
//         setInitialQuestions(updatedQuestions);
//       }
//     }
//     const updateSubQues=(initialIndex ,followUpIndex, index,value)=>{
//       const updatedQuestions = [...initialQuestions];
//       console.log(updatedQuestions,"hyhygyugoopi",initialIndex,index)
//       updatedQuestions[initialIndex].followUpQuestions[followUpIndex].sub[index]=value
//        setInitialQuestions(updatedQuestions)
//     }    
//   const rendersub=(initialIndex,followUpIndex)=>{
//       return(
//         initialQuestions[initialIndex].followUpQuestions[followUpIndex].sub.map((sub,index)=>(
//           <div key={index}>
//            <label>Follow {index + 1}</label>
//             <input type="text" value={sub} onChange={(e) => updateSubQues(initialIndex,followUpIndex, index, e.target.value)} />
//             {/* <button onClick={() => addSubQues(index)}>Add </button> */}
//                   {/* {console.log("Add follow up",initialIndex,index,sub)} */}
//                   {console.log("Add follow up",initialQuestions)}

//           </div>
//         ))
//       )
//     }
  
//   const renderFollowUpQuestions = (initialIndex) => {
//     return (

//       initialQuestions[initialIndex].followUpQuestions.map((follow, index) => (
//         <div key={index}>
//           <label>Follow-up Question {index + 1}</label>
//           <input type="text" value={follow.name} onChange={(e) => updateFollowUpQuestion(initialIndex, index, e.target.value)} />
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
//   // useEffect(()=>{
//   //   let data={hello:initialQuestions.question.question}
//   //   axios.post('http://127.0.0.1:5000/Adminstore',data)
//   //   .then(res=>{
//   //     console.log(res)
//   //   })
//   //   .catch(e=>{
//   //     console.log(e)
//   //   })
//   // },[])
//   let handleSubmit = (e) => {
//     e.preventDefault(); // prevent default form submission behavior
//     axios.post('http://127.0.0.1:5000/Adminstore', initialQuestions)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   return (
//     <div>
//       {/* <form className='form' method="post"> */}
//       <form className='form' method="post" onSubmit={handleSubmit}>
//       <button onClick={addInitialQuestion}>Add Initial Question</button>
//       {renderInitialQuestions()}
//       <input type='submit' value='Submit'  ></input>
//       </form>
      
//     </div>
//   );
// }

// export default Ladmin;
// import React, { useEffect, useState, useCallback } from 'react';
// import axios from "axios"

// function Ladmin() {
//   const [initialQuestions, setInitialQuestions] = useState([]);

//   const addInitialQuestion = useCallback(() => {
//     if (initialQuestions.length < 4) {
//       setInitialQuestions([...initialQuestions, {question: '', followUpQuestions:[]}]);
//     }
//   }, [initialQuestions]);

//   const updateInitialQuestion = useCallback((index, value) => {
//     const updatedQuestions = [...initialQuestions];
//     updatedQuestions[index].question = value;
//     setInitialQuestions(updatedQuestions);
//   }, [initialQuestions]);

//   const addFollowUpQuestion = useCallback((index) => {
//     const updatedQuestions = [...initialQuestions];
//     if (updatedQuestions[index].followUpQuestions.length < 4) {
//       updatedQuestions[index].followUpQuestions.push({name:'',sub:[]});
//       setInitialQuestions(updatedQuestions);
//     }
//   }, [initialQuestions]);

//   const updateFollowUpQuestion = useCallback((initialIndex , followUpIndex, value) => {
//     const updatedQuestions = [...initialQuestions];
//     updatedQuestions[initialIndex].followUpQuestions[followUpIndex].name= value;
//     setInitialQuestions(updatedQuestions);
//   }, [initialQuestions]);

//   const addSubQues = useCallback((initialIndex, index) => {
//     const updatedQuestions = [...initialQuestions];
//     if (updatedQuestions[initialIndex].followUpQuestions[index].sub.length<4){
//       updatedQuestions[initialIndex].followUpQuestions[index].sub.push('')
//       setInitialQuestions(updatedQuestions);
//     }
//   }, [initialQuestions]);

//   const updateSubQues = useCallback((initialIndex, followUpIndex, index, value) => {
//     const updatedQuestions = [...initialQuestions];
//     updatedQuestions[initialIndex].followUpQuestions[followUpIndex].sub[index] = value;
//     setInitialQuestions(updatedQuestions)
//   }, [initialQuestions]);

//   const rendersub = useCallback((initialIndex, followUpIndex) => {
//     return (
//       initialQuestions[initialIndex].followUpQuestions[followUpIndex].sub.map((sub, index) => (
//         <div key={index}>
//           <label>Follow {index + 1}</label>
//           <input type="text" value={sub} onChange={(e) => updateSubQues(initialIndex, followUpIndex, index, e.target.value)} />
//         </div>
//       ))
//     )
//   }, [initialQuestions, updateSubQues]);

//   const renderFollowUpQuestions = useCallback((initialIndex) => {
//     return (
//       initialQuestions[initialIndex].followUpQuestions.map((follow, index) => (
//         <div key={index}>
//           <label>Follow-up Question {index + 1}</label>
//           <input type="text" value={follow.name} onChange={(e) => updateFollowUpQuestion(initialIndex, index, e.target.value)} />
//           <button onClick={() => addSubQues(initialIndex ,index)}>Add </button>
//           {rendersub(initialIndex,index)}
//         </div>
//       ))
//     );
//   }, [initialQuestions, addSubQues, updateFollowUpQuestion, rendersub]);

//   const renderInitialQuestions = useCallback(() => {
//     return (
//       initialQuestions.map((initial, index) => (
//       <div key={index}>
//       <label>Initial Question {index + 1}</label>
//       <input type="text" value={initial.question} onChange={(e) => updateInitialQuestion(index, e.target.value)} />
//       <button onClick={() => addFollowUpQuestion(index)}>Add Follow-up Question</button>
//       {renderFollowUpQuestions(index)}
//       </div>
//       ))
//       );
//       }, [initialQuestions, addFollowUpQuestion, updateInitialQuestion, renderFollowUpQuestions]);
      
//       const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//       const response = await axios.post('/Adminstore', { questions: initialQuestions });
//       console.log(response.data);
//       } catch (error) {
//       console.error(error);
//       }
//       };
      
//       return (
//       <div>
//       <h1>Dynamic Form</h1>
//       <form onSubmit={handleSubmit}>
//       {renderInitialQuestions()}
//       <button onClick={addInitialQuestion}>Add Initial Question</button>
//       <button type="submit">Submit</button>
//       </form>
//       </div>
//       );
//       }
      
//       export default Ladmin;



//  it is sendinding the dta on every button click of adding text field . i dont want it . i want to send the dat onclick of submit
     
import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios"

function Ladmin() {
  const [initialQuestions, setInitialQuestions] = useState([]);

  const addInitialQuestion = useCallback(() => {
    if (initialQuestions.length < 4) {
      setInitialQuestions([...initialQuestions, {question: '', followUpQuestions:[]}]);
    }
  }, [initialQuestions]);

  const updateInitialQuestion = useCallback((index, value) => {
    const updatedQuestions = [...initialQuestions];
    updatedQuestions[index].question = value;
    setInitialQuestions(updatedQuestions);
  }, [initialQuestions]);

  const addFollowUpQuestion = useCallback((index) => {
    const updatedQuestions = [...initialQuestions];
    if (updatedQuestions[index].followUpQuestions.length < 4) {
      updatedQuestions[index].followUpQuestions.push({name:'',sub:[]});
      setInitialQuestions(updatedQuestions);
    }
  }, [initialQuestions]);

  const updateFollowUpQuestion = useCallback((initialIndex , followUpIndex, value) => {
    const updatedQuestions = [...initialQuestions];
    updatedQuestions[initialIndex].followUpQuestions[followUpIndex].name= value;
    setInitialQuestions(updatedQuestions);
  }, [initialQuestions]);

  const addSubQues = useCallback((initialIndex, index) => {
    const updatedQuestions = [...initialQuestions];
    if (updatedQuestions[initialIndex].followUpQuestions[index].sub.length<4){
      updatedQuestions[initialIndex].followUpQuestions[index].sub.push('')
      setInitialQuestions(updatedQuestions);
    }
  }, [initialQuestions]);

  const updateSubQues = useCallback((initialIndex, followUpIndex, index, value) => {
    const updatedQuestions = [...initialQuestions];
    updatedQuestions[initialIndex].followUpQuestions[followUpIndex].sub[index] = value;
    setInitialQuestions(updatedQuestions)
  }, [initialQuestions]);

  const rendersub = useCallback((initialIndex, followUpIndex) => {
    return (
      initialQuestions[initialIndex].followUpQuestions[followUpIndex].sub.map((sub, index) => (
        <div key={index}>
          <label>Follow {index + 1}</label>
          <input type="text" value={sub} onChange={(e) => updateSubQues(initialIndex, followUpIndex, index, e.target.value)} />
        </div>
      ))
    )
  }, [initialQuestions, updateSubQues]);

  const renderFollowUpQuestions = useCallback((initialIndex) => {
    return (
      initialQuestions[initialIndex].followUpQuestions.map((follow, index) => (
        <div key={index}>
          <label>Follow-up Question {index + 1}</label>
          <input type="text" value={follow.name} onChange={(e) => updateFollowUpQuestion(initialIndex, index, e.target.value)} />
          <button onClick={() => addSubQues(initialIndex ,index)}>Add </button>
          {rendersub(initialIndex,index)}
        </div>
      ))
    );
  }, [initialQuestions, addSubQues, updateFollowUpQuestion, rendersub]);

  const renderInitialQuestions = useCallback(() => {
    return (
      initialQuestions.map((initial, index) => (
        <div key={index}>
          <label>Initial Question {index+1}</label>
<input type="text" value={initial.question} onChange={(e) => updateInitialQuestion(index, e.target.value)} />
<button onClick={() => addFollowUpQuestion(index)}>Add</button>
{renderFollowUpQuestions(index)}
</div>
))
);
}, [initialQuestions, addFollowUpQuestion, updateInitialQuestion, renderFollowUpQuestions]);

const handleSave = () => {
axios.post("http://127.0.0.1:5000/Adminstore", initialQuestions)
.then((res) => console.log(res))
.catch((err) => console.log(err))
}

// useEffect(() => {
// axios.get("http://127.0.0.1:5000/Adminstore")
// .then((res) => setInitialQuestions(res.data))
// .catch((err) => console.log(err))
// }, []);

return (
<div>
<h2>Admin Page</h2>
{renderInitialQuestions()}
<button onClick={addInitialQuestion}>Add initial question</button>
<button onClick={handleSave}>Save</button>
</div>
);
}

export default Ladmin;
