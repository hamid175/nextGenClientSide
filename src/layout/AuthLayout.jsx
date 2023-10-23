import { Navigate, useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getUserTeamsApi,
  submitSurvey,
  switchTeam,
} from "../api-services/services";
export const AppContext = createContext();

const AuthLayout = ({ path, children }) => {
  console.log("🚀 ~ file: AuthLayout.jsx:10 ~ AuthLayout ~ path:", path);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authUser"));

  const nav = useNavigate();
  const [userTeams, setUserTeams] = useState([]);
  const [progress, setProgress] = useState(0);
  const [answersList, setAnswersList] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [newTeam, setNewTeam] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToggle = () => setAddModal(!addModal);

  useEffect(() => {
    const answers = answersList?.filter((item) => item != null);
    const percentage = (answers?.length / 60) * 100;
    setProgress(percentage?.toFixed(0));
  }, [answersList]);

  useEffect(() => {
    getUserTeams();
  }, [newTeam]);

  useEffect(() => {
    if (selectedTeam) {
      console.log("🚀 ~ file: AuthLayout.jsx:42 ~ useEffect ~ selectedTeam:", selectedTeam)
      switchUserTeam(selectedTeam.code);
    }
  }, [selectedTeam]);

  const getUserTeams = async () => {
    try {
      const res = await getUserTeamsApi();
      setUserTeams(res.data.teams);
      setSelectedTeam(res.data.teams[0]);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauhtorized: Login again");
        nav("/login");
      }
    }
  };
  const switchUserTeam = async (teamCode) => {
    setIsSubmitted(false);

    setLoading(true);
    try {
      const res = await switchTeam(teamCode);

      if (res?.data?.isAnswered === true) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(false);
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauhtorized: Login again");
        nav("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setBtnLoading(true);
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

      setProgress(0);
      setAnswersList([]);
      if (res.status === 200) {
        switchUserTeam(selectedTeam.code);
        nav("/survey-submitted");
      } else {
        toast.info(res.message);
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauhtorized: Login again");
        nav("/login");
      }
    } finally {
      setBtnLoading(false);
    }
  };

  const calculateProgress = (data) => {
    setAnswersList([...data]);
  };

  if (!authToken) {
    return <Navigate to={"/login"} />;
  }

  return (
    <React.Fragment>
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
          selectedTeam: selectedTeam,
          setSelectedTeam: setSelectedTeam,
          btnLoading: btnLoading,
          isSubmitted: isSubmitted,
          loading: loading,
        }}
      >
        <div className="d-flex w-100">
          <div className="col-12 ">
            {path !== "/survey-submitted" && <Navbar />}
            {/* <Navbar /> */}
            <Wrapper path={path}>{children}</Wrapper>
          </div>
        </div>
      </AppContext.Provider>
    </React.Fragment>
  );
};

export default AuthLayout;
