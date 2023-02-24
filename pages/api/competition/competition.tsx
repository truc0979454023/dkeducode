import { getDataAPI, postDataAPI } from "@/utils/fetchData";
import {
  convertTokenUserEventURL,
  getListCompetitionURL,
  getListExamSubjectURL,
  loginUserEventURL,
  sendAnswerURL,
} from "./competitionURL";

export const loginUserEvent = async (data: any) => {
  return await postDataAPI(loginUserEventURL, data);
};

export const convertTokenUserEvent = async (token?: string | undefined) => {
  return await getDataAPI(convertTokenUserEventURL, token);
};

export const sendAnswer = async (data: any, token: string) => {
  return await postDataAPI(sendAnswerURL, data, token);
};

export const getListExamSubject = async (token?: string | undefined) => {
  return await getDataAPI(getListExamSubjectURL, token);
};

export const getListCompetition = async (token?: string | undefined) => {
  return await getDataAPI(getListCompetitionURL, token);
};
