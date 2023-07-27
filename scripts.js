function getId(id) {
  return (document.getElementById(id));
}
var numbers;
var nums;
var answers;
var text;
var answers2;

function solve() {
  document.getElementById("answersout").innerHTML = "Answers:";
  numbers = [getId("1").value, getId("2").value, getId("3").value, getId("4").value];
  nums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  answers = [];
  answers2 = [];
  while (nums[0] != 4) {
    if (check()) {
      answers.push(text);
      answers2.push([...nums]);
    }
    increment();
  }
  for (var i = 0; i < answers.length; i++) {
    document.getElementById("answersout").innerHTML += "<br>" + answers[i];
  }
}

function check() {
  text = "";
  if (nums[0] == nums[1]) {
    return (false);
  }
  if (nums[3] == nums[4]) {
    return (false);
  }
  if (nums[6] == nums[7]) {
    return (false);
  }
  var tempnums = [...numbers];
  text += "<br>" + tempnums[nums[0]] + " " + symbol(nums[2]) + " " + tempnums[nums[1]] + " = ";
  tempnums = operate(tempnums, [nums[0], nums[1], nums[2]]);
  text += tempnums[2] + "<br>";
  text += tempnums[nums[3]] + " " + symbol(nums[5]) + " " + tempnums[nums[4]] + " = ";
  tempnums = operate(tempnums, [nums[3], nums[4], nums[5]]);
  text += tempnums[1] + "<br>";
  text += tempnums[nums[6]] + " " + symbol(nums[8]) + " " + tempnums[nums[7]] + " = ";
  tempnums = operate(tempnums, [nums[6], nums[7], nums[8]]);
  text += tempnums[0] + "<br><br>";
  if (tempnums[0] != 24) {
    return (false);
  }
  return (true);
}

function increment() {
  nums[8]++;
  if (nums[8] == 4) {
    nums[8] = 0;
    nums[7]++;
    if (nums[7] == 2) {
      nums[7] = 0;
      nums[6]++;
      if (nums[6] == 2) {
        nums[6] = 0;
        nums[5]++;
        if (nums[5] == 4) {
          nums[5] = 0;
          nums[4]++;
          if (nums[4] == 3) {
            nums[4] = 0;
            nums[3]++;
            if (nums[3] == 3) {
              nums[3] = 0;
              nums[2]++;
              if (nums[2] == 4) {
                nums[2] = 0;
                nums[1]++;
                if (nums[1] == 4) {
                  nums[1] = 0;
                  nums[0]++;
                  if (nums[0] == 4) {
                    return (false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return (true);
}

function operate(numb, types) {
  var numbers = [];
  for (var i = 0; i < numb.length; i++) {
    numbers.push(Number(numb[i]));
  }
  var type = [];
  for (var i = 0; i < types.length; i++) {
    type.push(Number(types[i]));
  }
  var returnVal = numbers;
  switch (type[2]) {
    case 0:
      returnVal.push(numbers[type[0]] + numbers[type[1]]);
      break;
    case 1:
      returnVal.push(numbers[type[0]] - numbers[type[1]]);
      break;
    case 2:
      returnVal.push(numbers[type[0]] * numbers[type[1]]);
      break;
    case 3:
      returnVal.push(numbers[type[0]] / numbers[type[1]]);
      break
  }
  if (type[0] > type[1]) {
    returnVal.splice(type[0], 1);
    returnVal.splice(type[1], 1);
  } else {
    returnVal.splice(type[1], 1);
    returnVal.splice(type[0], 1);
  }
  return (returnVal);
}

function symbol(int) {
  switch (int) {
    case 0:
      return ("+");
    case 1:
      return ("-");
    case 2:
      return ("×");
    case 3:
      return ("÷");
  }
}

function checkrepeat(answer) {
  for (var i = 0; i < answers2.length; i++) {
    var temp1 = [...answers2[i]];
    var temp2 = [...answer];
  	if(!checkOp(temp1, temp2)) {
    	return(false);
    }
  }
  return (true);
}

function noDupeSolve() {
  document.getElementById("answersout").innerHTML = "Answers:";
  numbers = [getId("1").value, getId("2").value, getId("3").value, getId("4").value];
  nums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  answers = [];
  answers2 = [];
  while (nums[0] != 4) {
    if (check()) {
      if (checkrepeat(nums)) {
        answers.push(text);
        answers2.push([...nums]);
      }
    }
    increment();
  }
  for (var i = 0; i < answers.length; i++) {
    document.getElementById("answersout").innerHTML += "<br>" + answers[i];
  }
}

function getO(t) {
  try {
  rVal = [t[2], t[5], t[8]];
  rVal.sort();
  } catch(err) {
    alert(err.message);
  }
  return rVal;
}

function checkOp(l1, l2) {
  var d1 = [0, 0, 0, 0];
  var d2 = [0, 0, 0, 0];
  for(var i = 2; i < 10; i+=3) {
    d1[l1[i]]++;
    d2[l2[i]]++;
  }
  if(d1[0] == d2[0] && d1[1] == d2[1] && d1[2] == d2[2] && d1[3] == d2[3]) {
    return(false);
  }
  return(true);
}