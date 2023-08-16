import React from "react";

const Home = () => {
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
        {dummyQuestions?.map((ques, idx) => {
       return (
          <div className="question">
            <p className="text-center table-title">
              People are interested in their work.
            </p>
            <div className="d-flex gap-4 justify-content-between">
              <div className=" left-question">
                <p className="title-400 text-end m-0 p-0">
                  {ques.positive} 
                </p>
              </div>
              <div className=" d-flex ">
                <div className=" d-flex align-items-center">
                  <input
                    className="custom-radio-1"
                    type="radio"
                    name={`question${idx}`}
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-2 "
                    type="radio"
                    name={`question${idx}`}

                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-3 "
                    type="radio"
                    name={`question${idx}`}
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center  ">
                  <input
                    className="custom-radio-4 "
                    type="radio"
                    name={`question${idx}`}
                    
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-3 "
                    type="radio"
                    name={`question${idx}`}
                    
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center  ">
                  <input
                    className="custom-radio-2 "
                    type="radio"
                    name={`question${idx}`}
                    
                  />
                </div>
                <div className="px-2 d-flex align-items-center ">
                  <input
                    className="custom-radio-1 radio-input"
                    type="radio"
                    name={`question${idx}`}
            
                  />
                </div>
              </div>
              <div className="left-question">
                {" "}
                <p className="title-400">
                  People are interested in their work and need it to flourish.
                  In good conditions, they enjoy it.
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
