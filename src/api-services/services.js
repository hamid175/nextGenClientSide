import axios from "axios";
import { urls } from "./apiEndpoint";

const SERVER_URL = "http://localhost:5000";

// Write all API calls

export const userLogin = async (payload) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}${urls.userLogin}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userSignup = async (payload) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}${urls.userSignup}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const submitSurvey = async (payload) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}${urls.SUBMIT_SURVEY}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authUser")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserTeamsApi = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}${urls.GET_USER_TEAMS}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authUser")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addNewTeamApi = async (teamId) => {
  try {
    const response = await axios.get(`${SERVER_URL}${urls.ADD_NEW_TEAM_CODE}/${teamId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authUser")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
