import React, { useState } from "react";
import { questions_list } from "../utils";

const Home = () => {

  const [questions, setQuestions] = useState(questions_list);


  const dummyQuestions = [
    {
      positive: "People do not like work and avoid it as much as possible.",
      negative:
        "People are interested in their work and need it to flourish. In good conditions, they enjoy it.",
    },
    {
      positive: "People do not like work and avoid it as much as possible.",
      negative:
        "People are interested in their work and need it to flourish. In good conditions, they enjoy it.",
    },
    {
      positive: "People do not like work and avoid it as much as possible.",
      negative:
        "People are interested in their work and need it to flourish. In good conditions, they enjoy it.",
    },
    {
      positive: "People do not like work and avoid it as much as possible.",
      negative:
        "People are interested in their work and need it to flourish. In good conditions, they enjoy it.",
    },
    {
      positive: "People do not like work and avoid it as much as possible.",
      negative:
        "People are interested in their work and need it to flourish. In good conditions, they enjoy it.",
    },
  ];

  return (
    <div className="container-xxl">  
      <div className="progress-detail ">
        <p className="p-0 m-0 color-grey-900">Welcome🖐</p>
        <h1 className="color-grey-900 heading">To the Survey</h1>
      </div>

      {/* questoin sections */}
      <div className="questions-container">
        {questions?.map((question, idx) => {
       return (
          <div className="question">
            <p className="text-center table-title">
              {question.question}
            </p>
            <div className="d-flex gap-4 justify-content-between">
              <div className=" left-question">
                <p className="title-400 text-start m-0 p-0">
                  {question.negative} 
                </p>
              </div>
              <div className=" d-flex ">
                <div className=" d-flex align-items-center">
                  <input
                    className="custom-radio-1"
                    type="radio"
                    name={`question${question?.id}`}
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-2 "
                    type="radio"
                    name={`question${question?.id}`}

                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-3 "
                    type="radio"
                    name={`question${question?.id}`}
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center  ">
                  <input
                    className="custom-radio-4 "
                    type="radio"
                    name={`question${question?.id}`}
                    
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-3 "
                    type="radio"
                    name={`question${question?.id}`}
                    
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center  ">
                  <input
                    className="custom-radio-2 "
                    type="radio"
                    name={`question${question?.id}`}
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-1 radio-input"
                    type="radio"
                    name={`question${question?.id}`}
            
                  />
                </div>
              </div>
              <div className="left-question">
                {" "}
                <p className="title-400">
                  {
                    question?.positive
                  }
                </p>
              </div>
            </div>
          </div>
       )
        })}
      </div>

      <div className="d-flex justify-content-center py-4">
        <button className="primary-btn">Submit Answers</button>
      </div>
    </div>
  );
};

export default Home;
