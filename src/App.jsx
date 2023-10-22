import React, { createContext, useEffect, useState } from "react";
import Route from "./routes";
import { getUserTeamsApi, submitSurvey } from "./api-services/services";
import { toast } from "react-toastify";
export const AppContext = createContext();

function App() {
  const [userTeams, setUserTeams] = useState([]);
  const [progress, setProgress] = useState(0);
  const [answersList, setAnswersList] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [newTeam, setNewTeam] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  console.log("🚀 ~ file: App.jsx:13 ~ App ~ selectedTeam:", selectedTeam)

  const addToggle = () => setAddModal(!addModal);

  useEffect(() => {
    const answers = answersList?.filter((item) => item != null);
    const percentage = (answers?.length / 60) * 100;
    setProgress(percentage?.toFixed(0));
  }, [answersList]);

  useEffect(() => {
    getUserTeams();
  }, [newTeam]);

  const getUserTeams = async () => {
    try {
      const res = await getUserTeamsApi();
      setUserTeams(res.data.teams);
      setSelectedTeam(res.data.teams[0]);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const handleSubmit = async () => {

    setBtnLoading(true)
    const payload = {
      teamCode: selectedTeam.code,
      presentAnswer: [],
      futureAnswer: [],
    };

    const presentAns = answersList
      .filter((answer) => answer?.type === "Present")
      ?.map((answer) => Number(answer?.value));
    const futureAns = answersList
      .filter((answer) => answer?.type === "Future")
      ?.map((answer) => Number(answer?.value));

    payload.presentAnswer = presentAns;
    payload.futureAnswer = futureAns;

    try {
      
      const res = await submitSurvey(payload);
    
      toast.info(res.message);
      
    } catch (error) {
      console.log("ERROR", error)
    } finally {
      setBtnLoading(false)
    }
    
  };

  const calculateProgress = (data) => {
    setAnswersList([...data]);
  };

  return (
    <React.Fragment>
      <div className="w-100">
        <AppContext.Provider
          value={{
            progress: progress,
            answers: answersList,
            setAnswers: setAnswersList,
            calculateProgress: calculateProgress,
            handleSubmit: handleSubmit,
            userTeams: userTeams,
            addModal: addModal,
            setAddModal: setAddModal,
            addToggle: addToggle,
            setNewTeam: setNewTeam,
            selectedTeam:selectedTeam,
            setSelectedTeam: setSelectedTeam,
            btnLoading: btnLoading,
          }}
        >
          <Route />
        </AppContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
