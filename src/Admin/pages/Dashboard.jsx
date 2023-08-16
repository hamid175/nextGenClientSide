import React, { useState } from 'react'
import DashboardStats from '../components/dashboard/DashboardStats'
import { Container } from 'reactstrap'
import Wrapper from '../components/common/Wrapper'
import TeamsTable from '../components/dashboard/TeamsTable'
import AddModal from '../components/common/AddModal'
import TeamListModal from '../components/common/TeamListModal'
import DateModal from '../components/common/DateModal'


const dummyData = [
  {
    teamCode: "qwerty123",
    totalMembers: 150,
    completedSurveys: 87,
    pendingSurvey: 63
  },
  {
    teamCode: "wq1234a",
    totalMembers: 110,
    completedSurveys: 17,
    pendingSurvey: 53
  },
  {
    teamCode: "ad43dqaw",
    totalMembers: 120,
    completedSurveys: 17,
    pendingSurvey: 61
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
  {
    teamCode: "adsfa11z",
    totalMembers: 122,
    completedSurveys: 23,
    pendingSurvey: 33
  },
]

const teamCode = "qwert1234a";


const Dashboard = () => {

  const [teamsList, setTeamsList] = useState(dummyData);

  const [teamModal, setTeamModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);
  const [teamListModal, setTeamListModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);

  const toggleTeamModal = () => setTeamModal(!teamModal);
  const toggleMemberModal = () => setMemberModal(!memberModal);
  const toggleTeamListModal = () => setTeamListModal(!teamListModal);
  const toggleDateModal = () => setDateModal(!dateModal);

  return (
    <>
    
      <DashboardStats toggleDateModal={toggleDateModal} />
      <TeamsTable data={teamsList} toggle={toggleTeamModal} toggleTeamListModal={toggleTeamListModal}  />
      <AddModal modal={teamModal} toggle={toggleTeamModal} />
      <AddModal modal={memberModal} toggle={toggleMemberModal} teamCode={teamCode} />
      <TeamListModal modal={teamListModal} toggle={toggleTeamListModal} openAddModal={toggleMemberModal} teamCode={teamCode} />
      <DateModal modal={dateModal} toggle={toggleDateModal} />
    </>
  )
}

export default Dashboard