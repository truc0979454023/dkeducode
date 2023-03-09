export const loginUserEventURL = "kdeducode/login";
export const convertTokenUserEventURL = "kdeducode/convert-data";
export const sendAnswerURL = "kdeducode/examination/update-results";
export const getListExamSubjectURL = "kdeducode/examination/exam-subject-list";
export const getListCompetitionURL = "kdeducode/examination/list-exam";
export const getListExamTypeURL = (examID: number) =>
  `kdeducode/examination/list-ExamType?examID=${examID}`;
export const getDownloadFileExamURL = (codeID: number, examID: number) =>
  `kdeducode/examination/download-file-exam?codeID=${codeID}&examID=${examID}`;

export const getListQuestionURL = (codeID: number, examID: number) =>
  `kdeducode/examination/list-question?examID=${examID}&codeID=${codeID}`;

export const getCompetitionDetailURL = (examID: number) =>
  `kdeducode/examination/detail-exam?examID=${examID}`;
export const startCompetitionURL = "kdeducode/examination/start-the-exam";
export const nextQuestionURL = "kdeducode/examination/next-question";
