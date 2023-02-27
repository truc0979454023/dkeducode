import { information_lookupURL, registerUserEventURL,listexamURL } from "./eventURL";
import { getDataAPI, getDataAPIParam, postDataAPI } from "@/utils/fetchData";

export const registerUserEvent = async (data: any) => {
  return await postDataAPI(registerUserEventURL, data);
};

export const information_lookup = async (param: any) => {
  return await getDataAPIParam(information_lookupURL, param);
};

export const listEvent = async() =>{
  return await getDataAPIParam(listexamURL);
}

