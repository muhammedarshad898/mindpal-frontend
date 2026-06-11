import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SimpleNav from '../Components/SimpleNav';

const questions=[
  {
    questionText:'What is your gender identity?',
    isgeneral:true,
    answerOptons:[
      {
        answerText:'Men'
      },
      {
        answerText:'women'
      },
      {
        answerText:'Other'
      }
    ]


  },
  {
    questionText:'What is your age?',
    isgeneral:true,
    answerOptons:[
      {
        answerText:'18-24'
      },
      {
        answerText:'25-34'
      },
      {
        answerText:'35-44'
      },
      {
        answerText:'45-54'
      },
      {
        answerText:'55-64'
      },
      {
        answerText:'Above 65'
      }
    ]


  },
  {
    questionText:'How do you identify identity?',
    isgeneral:true,
    answerOptons:[
      {
        answerText:'Straight'
      },
      {
        answerText:'Gay'
      },
      {
        answerText:'Lesbian'
      },
      {
        answerText:'Bi or Pan'
      },
      {
        answerText:'Prefer Not to say'
      }
    ]


  },
  {
    questionText:'what is your current realtionship status?',
    isgeneral:true,
    answerOptons:[
      {
        answerText:'Single'
      },
      {
        answerText:'In a Realtionship'
      },
      {
        answerText:'Married'
      },
      {
        answerText:'Divorced'
      },
      {
        answerText:'widowed'
      },
      {
        answerText:'Other'
      }

    ]


  },
  {
    questionText:'How important religion in your life?',
    isgeneral:true,
    answerOptons:[
      {
        answerText:'Very Importtant'
      },
      {
        answerText:'Important'
      },
      {
        answerText:'Somewhat Important'
      },
      {
        answerText:'Important not at all'
      }


    ]


  },
  {
    questionText:'Have you ever been in  therapy before?',
    isgeneral:false,
    answerOptons:[
      {
        answerText:'Yes', score:1
      },
      {
        answerText:'No', score:0
      }



    ]


  },
  {
    questionText:'How often do you feel sad or empty?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Rarely', score:1
      },
      {
        answerText:'Occasionaly', score:2
      },
      {
        answerText:'Most of the time', score:3
      },
      {
        answerText:'Almost always', score:4
      }


    ]


  },
  {
    questionText:'Do you enjoy activities that used to bring you pleasure?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Yes',score:0
      },
      {
        answerText:'sometimes', score:2
      },
      {
        answerText:'Rarely', score:3
      },
      {
        answerText:'Never', score:4
      }


    ]


  },
  {
    questionText:'How do you feel anxious or worried?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Rarely',score:1
      },
      {
        answerText:'Occasionaly',score:2
      },
      {
        answerText:'Most of the time', score:3
      },
      {
        answerText:'Almost always',score:4
      }


    ]


  },
  {
    questionText:'How many hours of sleep do you get?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'7-9 Hours',score:0
      },
      {
        answerText:'5-6 Hours',score:1
      },
      {
        answerText:'3-4 Hours',score:3
      },
      {
        answerText:'Less than 3 Hours', score:4
      },


    ]


  },
  {
    questionText:'How often do you socialize with friends or family?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Daily', score:0
      },
      {
        answerText:'Weekly', score:2
      },
      {
        answerText:'Monthly', score:3
      },
      {
        answerText:'Rearly', score:4
      },



    ]


  },
  {
    questionText:'Do you avoid social situations due to feelings of anxiety or discomport?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Rarely', score:1
      },
      {
        answerText:'Occasionaly', score:2
      },
      {
        answerText:'Most of the time', score:3
      },
      {
        answerText:'Almost always', score:4
      },


    ]


  },
  {
    questionText:'How often do you engage in physical activity?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Daily', score:0
      },
      {
        answerText:'Weekly', score:2
      },
      {
        answerText:'Monthly', score:3
      },
      {
        answerText:'Rearly',score:4
      },




    ]


  },
  {
    questionText:'Do you use substances(eg,alcohol,drugs) to cope with stress or emotions?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'Daily', score:4
      },
      {
        answerText:'Occasionally', score:3
      },
      {
        answerText:'Most of the time', score:2
      },
      {
        answerText:'Never', score:0
      },




    ]


  },
  {
    questionText:'Do you often experience negative thoughts about yourself or others?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'rarely',score:1
      },
      {
        answerText:'Occasionally', score:2
      },
      {
        answerText:'Most of the time', score:3
      },
      {
        answerText:'Almost always', score:4
      },




    ]


  },
  {
    questionText:'Do you have difficulty concentrating or making decisions?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'rarely', score:1
      },
      {
        answerText:'Occasionally', score:2
      },
      {
        answerText:'Most of the time', score:3
      },
      {
        answerText:'Almost always', score:4
      },




    ]


  },
  {
    questionText:'Do you experienced any traumatic events in your life?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'yes', score:4
      },
      {
        answerText:'No', score:1
      },





    ]


  },
  {
    questionText:'Are you Currently experiencing any physical health issues?',
    isgeneral:false,

    answerOptons:[
      {
        answerText:'yes',score:2
      },
      {
        answerText:'No', score:1
      },





    ]


  },






]


function Test() {
  const [currentquestion,setcurrentquestion]=useState(0)

  const [totalScore, setTotalScore] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleaquestion=()=>{
    setcurrentquestion(currentquestion-1)
  }
  const handleanswer=(option)=>{
    const currentq=questions[currentquestion]
    if(currentq.isgeneral){
      setUserDetails({...userDetails,[currentq.questionText]:option.answerText})

    }
    else{
      setTotalScore(totalScore+option.score)
    }
    if(currentquestion<questions.length-1){
      setcurrentquestion(currentquestion+1)
    }
    else{
      setIsSubmitted(true)
    }


  }

  return (
   <>

      <SimpleNav rightContent={<Link to={'/appointment'} className='btn btn-primary'>Take an Appointment</Link>} />

   <div className='mp-test-intro'>
    <h1>Help us match you to the right <span>therapist</span> </h1>
    <p>It's important to have a therapist who you can establish a personal connection with. The following questions are designed to help match you to a licensed therapist based on your needs and personal preferences.</p>
   </div>
   {
    isSubmitted?(



<div className="d-flex justify-content-center align-items-center mt-5">
<div className='mp-results-card'>
  <h2>Results</h2>
<h3 className='mt-3'>Total Score: {totalScore}</h3>
  <p className='mt-3'>
    {totalScore <= 10
      ? 'You seem to be in a good mental state.'
      : totalScore <= 20
      ? 'You might be experiencing some mild stress or issues.'
      : 'It is recommended to consult a therapist for a detailed evaluation.'}
  </p>
  <h3 className='mt-2'>General Information</h3>
  <ul className='mt-2 mb-5' style={{listStyle:'none', padding:0}}>
    {Object.keys(userDetails).map((key) => (
      <li key={key} className='mt-2'>
        <strong>{key}:</strong> {userDetails[key]}
      </li>
    ))}
  </ul>
</div>
</div>




    ):(
      <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='mp-quiz-card'>
        <div>
          <div className='mp-quiz-question'>{questions[currentquestion].questionText}
            <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>{questions[currentquestion].answerOptons.map((option,index)=>(
              <button className='mp-quiz-option' key={index} onClick={()=>handleanswer(option)}>{option.answerText}</button>))}
              <button className='btn btn-primary mt-3' onClick={handleaquestion}>Previous Question</button>
              <p className='mp-quiz-progress mt-3'>question {currentquestion+1} of {questions.length}</p>
              </div>
          </div>
        </div>


      </div>

     </div>

    )
   }





   </>
  )
}

export default Test