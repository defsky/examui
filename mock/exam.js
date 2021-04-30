import db from './questions/1-1-1-4531.json'

const subject1 = {
  name:"初级会计实务",
  type1:{
    title: "单选题",
    description: "每小题备选答案中，只有一个符合题意的正确答案",
    questions:[]
  },
  'type2':{
    "title": "多项选择题",
    "description": "每小题备选答案中，有两个或两个以上符合题意的正确答案。多选、错选、不选均不得分，少选得一半的分",
    "questions":[]
  },
  'type3':{
    "title": "判断题",
    "description": "判断每小题的表述是否正确，每小题答题正确的1分，答题错误倒扣0.5分，不答题不得分也不扣分",
    "questions":[]
  },
  'type4':{
    "title": "不定项选择",
    "description": "每小题备选答案中，有一个个或多个符合题意的正确答案。多选、错选、不选均不得分，少选得一半的分",
    "questions":[]
  }
};
const subject2 = {
  'name':"初级会计经济法基础",
  'type1':{
    "title": "单选题",
    "description": "每小题备选答案中，只有一个符合题意的正确答案",
    questions:[]
  },
  'type2':{
    "title": "多项选择题",
    "description": "每小题备选答案中，有两个或两个以上符合题意的正确答案。多选、错选、不选均不得分，少选得一半的分",
    "questions":[]
  },
  'type3':{
    "title": "判断题",
    "description": "判断每小题的表述是否正确，每小题答题正确的1分，答题错误倒扣0.5分，不答题不得分也不扣分",
    "questions":[]
  },
  'type4':{
    "title": "不定项选择",
    "description": "每小题备选答案中，有一个个或多个符合题意的正确答案。多选、错选、不选均不得分，少选得一半的分",
    "questions":[]
  }
};

// 使用webpack的require.context()遍历所有json文件
const Sub1DbFiles = require.context('./questions/1', false, /\.json$/);
const Sub1Datas = Sub1DbFiles.keys().map(obj => {
  return Sub1DbFiles(obj)
}, {})

Sub1Datas.forEach(row => {
  row.data.parts.forEach((part,n)=>{
    switch(n){
      case 0:
        subject1.type1.questions = subject1.type1.questions.concat(part.questions)
      break;
      case 1:
        subject1.type2.questions = subject1.type2.questions.concat(part.questions)
      break;
      case 2:
        subject1.type3.questions = subject1.type3.questions.concat(part.questions)
      break;
      case 3:
        subject1.type4.questions = subject1.type4.questions.concat(part.questions)
      break;
    }
  })
});

const Sub2DbFiles = require.context('./questions/2', false, /\.json$/);
const Sub2Datas = Sub2DbFiles.keys().map(obj => {
  return Sub2DbFiles(obj)
}, {})

Sub2Datas.forEach(row => {
  row.data.parts.forEach((part,n)=>{
    switch(n){
      case 0:
        subject2.type1.questions = subject2.type1.questions.concat(part.questions)
      break;
      case 1:
        subject2.type2.questions = subject2.type2.questions.concat(part.questions)
      break;
      case 2:
        subject2.type3.questions = subject2.type3.questions.concat(part.questions)
      break;
      case 3:
        subject2.type4.questions = subject2.type4.questions.concat(part.questions)
      break;
    }
  })
});

export default {
    'get|/exam/1-1-1':  option => {
    let idx = Math.round(Math.random() * 8);
    return db.data.parts[0].questions[idx];
  },
  'get|/exam/1/1':  option => {
    let len = subject1.type1.questions.length
    let idx = Math.round(Math.random() * len);
    
    return subject1.type1.questions[idx];
  },
  'get|/exam/1/2':  option => {
    let len = subject1.type2.questions.length
    let idx = Math.round(Math.random() * len);
    
    return subject1.type2.questions[idx];
  },
  'get|/exam/1/3':  option => {
    let len = subject1.type3.questions.length
    let idx = Math.round(Math.random() * len);
    
    return subject1.type3.questions[idx];
  },
  'get|/exam/2/1':  option => {
    let len = subject2.type1.questions.length
    let idx = Math.round(Math.random() * len);
    
    return subject2.type1.questions[idx];
  },
  'get|/exam/2/2':  option => {
    let len = subject2.type2.questions.length
    let idx = Math.round(Math.random() * len);
    
    return subject2.type2.questions[idx];
  },
  'get|/exam/2/3':  option => {
    let len = subject2.type3.questions.length
    let idx = Math.round(Math.random() * len);
    
    return subject2.type3.questions[idx];
  },
}