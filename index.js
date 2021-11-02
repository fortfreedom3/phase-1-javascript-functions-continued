// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun('go to a museum');

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

mondayWork("work from home");

function wrapAdjective(string = "*") {
    return function (parameter = "special") {
        return `You are ${string}${parameter}${string}!`
    }
  };
  
  wrapAdjective("%")("a dedicated programmer"); 