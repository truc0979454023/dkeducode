import { downloadDataAPI, getDataAPI, postDataAPI } from "@/utils/fetchData";
import {
  convertTokenUserEventURL,
  getCompetitionDetailURL,
  getDownloadFileExamURL,
  getListCompetitionURL,
  getListExamSubjectURL,
  getListExamTypeURL,
  getListQuestionURL,
  loginUserEventURL,
  sendAnswerURL,
  startCompetitionURL,
} from "./competitionURL";

export const loginUserEvent = async (data: any) => {
  return await postDataAPI(loginUserEventURL, data);
};

export const convertTokenUserEvent = async (token?: string | undefined) => {
  return await getDataAPI(convertTokenUserEventURL, token);
};

export const sendAnswer = async (data: any, token?: string | undefined) => {
  return await postDataAPI(sendAnswerURL, data, token);
};

export const getListExamSubject = async (token?: string | undefined) => {
  return await getDataAPI(getListExamSubjectURL, token);
};

export const getListCompetition = async (token?: string | undefined) => {
  return await getDataAPI(getListCompetitionURL, token);
};

export const getListExamType = async (
  examID: number,
  token?: string | undefined
) => {
  return await getDataAPI(getListExamTypeURL(examID), token);
};

export const getDownloadFileExam = async (
  codeID: number,
  examID: number,
  token?: string | undefined
) => {
  return await downloadDataAPI(
    getDownloadFileExamURL(codeID, examID),
    null,
    token
  );
};

export const getListQuestion = async (
  codeID: number,
  examID: number,
  token?: string | undefined
) => {
  return await getDataAPI(getListQuestionURL(codeID, examID), token);
};

export const getCompetitionDetail = async (
  examID: number,
  token?: string | undefined
) => {
  return await getDataAPI(getCompetitionDetailURL(examID), token);
};

export const startCompetition = async (
  data: any,
  token?: string | undefined
) => {
  return await postDataAPI(startCompetitionURL, data, token);
};
