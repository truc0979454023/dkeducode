import { registerUserEventURL } from "./eventURL";
import { getDataAPI, postDataAPI } from "@/utils/fetchData";

export const registerUserEvent = async (data: any) => {
  return await postDataAPI(registerUserEventURL, data);
};
