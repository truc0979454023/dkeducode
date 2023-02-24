export const loginUserEventURL = "kdeducode/login";
export const convertTokenUserEventURL = "kdeducode/convert-data";
export const sendAnswerURL = "kdeducode/examination/update-results";
export const getListExamSubjectURL = "kdeducode/examination/exam-subject-list";
export const getListCompetitionURL = "kdeducode/examination/list-exam";
export const getListExamTypeURL = (examID: number) =>
  `kdeducode/examination/list-ExamType?examID=${examID}`;
