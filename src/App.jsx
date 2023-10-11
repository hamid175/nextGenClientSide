import React, { createContext, useEffect, useState } from "react";
import Route from "./routes"
export const AppContext = createContext();


function App() {
  const [progress, setProgress] = useState(0);
  const [answersList, setAnswersList] = useState([]);

  useEffect(() => {
  const answers = answersList?.filter((item) => item != null);
  const percentage = (answers?.length/60) * 100;
    setProgress(percentage?.toFixed(0));
  }, [answersList])
  

  
  const handleSubmit = () => {
    // setAnswers(arr)
  }


  const calculateProgress = (data) => {
    setAnswersList([...data]);
  }

  
  return (
    <React.Fragment>
      <div className="w-100">
        <AppContext.Provider value={
          {
            progress: progress,
            answers: answersList,
            setAnswers: setAnswersList,
            calculateProgress: calculateProgress,
          }
            
        }>
          <Route/>
        </AppContext.Provider>
      </div>

    </React.Fragment>
  );
}

export default App;
