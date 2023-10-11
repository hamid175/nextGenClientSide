import React, { useState } from "react";
import { questions_list } from "../utils";
import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const [questions, setQuestions] = useState(questions_list);
  const {answers, setAnswers, calculateProgress, progress} = useContext(AppContext);
  
  // Method to handle answer input
  const handleInputChange = (questionId, event) =>{
    const ansValue = event.target.value;

    const arr = answers;
    arr[questionId - 1] = ansValue;
    calculateProgress(arr);
    
  }
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
              <p className="text-center table-title">{question.question}</p>
              <div className="d-flex gap-4 justify-content-between">
                <div className=" left-question">
                  <p className="title-400 text-start m-0 p-0">
                    {question.negative}
                  </p>
                </div>
                <div className=" d-flex ">
                  <div className=" d-flex align-items-center">
                    <input
                      className="custom-radio-1 opacity-3 danger"
                      type="radio"
                      name={`question${question?.id}`}
                      value={-3}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                  <div className="px-2 d-flex align-items-center ">
                    <input
                      className="custom-radio-2 opacity-2 danger"
                      type="radio"
                      name={`question${question?.id}`}
                      value={-2}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                  <div className="px-2 d-flex align-items-center ">
                    <input
                      className="custom-radio-3 opacity-1 danger"
                      type="radio"
                      name={`question${question?.id}`}
                      value={-1}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                  <div className="px-2 d-flex align-items-center  ">
                    <input
                      className="custom-radio-4 opacity"
                      type="radio"
                      name={`question${question?.id}`}
                      value={0}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                  <div className="px-2 d-flex align-items-center ">
                    <input
                      className="custom-radio-3 opacity-1"
                      type="radio"
                      name={`question${question?.id}`}
                      value={1}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                  <div className="px-2 d-flex align-items-center  ">
                    <input
                      className="custom-radio-2 opacity-2"
                      type="radio"
                      name={`question${question?.id}`}
                      value={2}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                  <div className="px-2 d-flex align-items-center ">
                    <input
                      className="custom-radio-1 radio-input opacity-3"
                      type="radio"
                      name={`question${question?.id}`}
                      value={3}
                      onChange={(event) => handleInputChange(question?.id, event)}
                    />
                  </div>
                </div>
                <div className="left-question">
                  {" "}
                  <p className="title-400">{question?.positive}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center py-4">
        <button className={`primary-btn ${progress < 100 && 'btn-fade'}`}
        disabled={progress < 100 ? true : false}
        >Submit Answers</button>
      </div>
    </div>
  );
};

export default Home;
