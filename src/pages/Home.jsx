import React, { useState } from "react";
import { questions_list } from "../utils";
import { useContext } from "react";
import { AppContext } from "../layout/AuthLayout";
import AddNewTeam from "../components/AddNewTeam";
import { ToastContainer } from "react-toastify";
import { Spinner } from "reactstrap";
import AlreadySubmitted from "../components/AlreadySubmitted";

const Home = () => {
  const [questions, setQuestions] = useState(questions_list);
  const [addLoading, setAddLoading] = useState(false);

  const {
    answers,
    setAnswers,
    calculateProgress,
    progress,
    handleSubmit,
    setAddModal,
    addModal,
    addToggle,
    setNewTeam,
    btnLoading,
    isSubmitted,
    loading,
  } = useContext(AppContext);

  // handle answer
  const handleInputChange = (questionId, question, event) => {
    const ansValue = event.target.value;

    const arr = answers;
    arr[questionId - 1] = {
      type: question.type,
      value: ansValue,
    };

    calculateProgress(arr);
  };

  const resetRadioInputs = () => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => {
      input.checked = false;
    });
  };

  return (
    <div className="container-xxl">
      <ToastContainer />
      <div className="progress-detail ">
        <p className="p-0 m-0 color-grey-900">Welcome🖐</p>
        <h1 className="color-grey-900 heading">To the Survey</h1>
      </div>

      {/* questoin sections */}

      {!loading ? (
        !isSubmitted ? (
          <>
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
                            className="custom-radio-1 opacity-3 danger"
                            type="radio"
                            name={`question${question?.id}`}
                            value={1}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
                          />
                        </div>
                        <div className="px-2 d-flex align-items-center ">
                          <input
                            className="custom-radio-2 opacity-2 danger"
                            type="radio"
                            name={`question${question?.id}`}
                            value={2}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
                          />
                        </div>
                        <div className="px-2 d-flex align-items-center ">
                          <input
                            className="custom-radio-3 opacity-1 danger"
                            type="radio"
                            name={`question${question?.id}`}
                            value={3}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
                          />
                        </div>
                        <div className="px-2 d-flex align-items-center  ">
                          <input
                            className="custom-radio-4 opacity"
                            type="radio"
                            name={`question${question?.id}`}
                            value={4}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
                          />
                        </div>
                        <div className="px-2 d-flex align-items-center ">
                          <input
                            className="custom-radio-3 opacity-1"
                            type="radio"
                            name={`question${question?.id}`}
                            value={5}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
                          />
                        </div>
                        <div className="px-2 d-flex align-items-center  ">
                          <input
                            className="custom-radio-2 opacity-2"
                            type="radio"
                            name={`question${question?.id}`}
                            value={6}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
                          />
                        </div>
                        <div className="px-2 d-flex align-items-center ">
                          <input
                            className="custom-radio-1 radio-input opacity-3"
                            type="radio"
                            name={`question${question?.id}`}
                            value={7}
                            onChange={(event) =>
                              handleInputChange(question?.id, question, event)
                            }
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
              {!btnLoading ? (
                <button
                  className={`primary-btn ${progress < 100 && "btn-fade"}`}
                  // disabled={progress < 100 ? true : false}
                  onClick={() => {
                    handleSubmit();
                    resetRadioInputs();
                  }}
                >
                  Submit Answers
                </button>
              ) : (
                <button
                  className={`primary-btn ${progress < 100 && "btn-fade"}`}
                  disabled={true}
                >
                  <Spinner size="sm" className="flex-shrink-0"></Spinner>
                </button>
              )}
            </div>
          </>
        ) : (
          <AlreadySubmitted />
        )
      ) : (
        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-center h-100">
            <Spinner color="primary" className="me-2" />
          </div>
        </div>
      )}

      <AddNewTeam
        toggle={addToggle}
        modal={addModal}
        loading={addLoading}
        setLoading={setAddLoading}
        setNewTeam={setNewTeam}
      />
    </div>
  );
};

export default Home;
