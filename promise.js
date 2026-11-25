function myPromise() {
  return new Promise(function (resolve, reject) {
    resolve("Hello Students");
  });
}

myPromise().then(function (result) {
  console.log("Q1:", result);
});

let x = 10;

let p = new Promise(function (resolve, reject) {
  if (x == 10) {
    resolve("Success");
  } else {
    reject("Something went wrong");
  }
});

p.then(function (result) {
  console.log("Q2:", result);
}).catch(function (error) {
  console.log("Q2:", error);
});
 
function checkAge(age) {
  return new Promise(function (resolve, reject) {
    if (age >= 18) {
      resolve("You can vote");
    } else {
      reject("You cannot vote");
    }
  });
}

checkAge(20)
  .then(function (result) { console.log("Q3:", result); })
  .catch(function (error) { console.log("Q3:", error); });

checkAge(15)
  .then(function (result) { console.log("Q3:", result); })
  .catch(function (error) { console.log("Q3:", error); });


// Q4
function addNumbers(a, b) {
  return new Promise(function (resolve, reject) {
    let sum = a + b;
    resolve(sum);
  });
}

addNumbers(5, 7).then(function (result) {
  console.log("Q4: Sum is", result);
});


// Q5
async function greet() {
  return "Welcome to JavaScript";
}

greet().then(function (result) {
  console.log("Q5:", result);
});


// Q6
function getData() {
  return new Promise(function (resolve, reject) {
    resolve("Data received successfully");
  });
}

async function showData() {
  let data = await getData();
  console.log("Q6:", data);
}

showData();


// Q7
function calculateSum(a, b) {
  return new Promise(function (resolve, reject) {
    resolve(a + b);
  });
}

async function showSum() {
  let sum = await calculateSum(10, 20);
  console.log("Q7: Sum is", sum);
}

showSum();


// Q8
function checkResult(marks) {
  return new Promise(function (resolve, reject) {
    if (marks >= 40) {
      resolve("Pass");
    } else {
      reject("Fail");
    }
  });
}

async function showResult(marks) {
  try {
    let result = await checkResult(marks);
    console.log("Q8:", result);
  } catch (error) {
    console.log("Q8:", error);
  }
}

showResult(75);
showResult(30);