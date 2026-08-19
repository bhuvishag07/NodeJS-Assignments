// 1. Coding Assessment

function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let total = 0;

            for (let mark of marks) {
                total += mark;
            }

            let average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }

        }, 2000);
    });
}


// Testing Question 1

codingScoreCheck([80, 85, 75, 88], 70)
    .then((average) => {
        console.log("Coding Assessment Cleared!");
        console.log("Coding Average:", average);
    })
    .catch((error) => {
        console.log(error);
    });


// 2. Technical Interview

function technicalInterviewCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let total = 0;

            for (let mark of marks) {
                total += mark;
            }

            let average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Technical Interview.");
            }

        }, 2000);
    });
}


// Testing Question 2

technicalInterviewCheck([88, 92, 90, 90], 70)
    .then((average) => {
        console.log("Technical Interview Cleared!");
        console.log("Technical Average:", average);
    })
    .catch((error) => {
        console.log(error);
    });


// 3. Final Selection Review

function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let finalAverage = (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }

        }, 2000);
    });
}


// Testing Question 3

finalSelectionCheck(82, 90, 70)
    .then((finalAverage) => {
        console.log("Final Selection Cleared!");
        console.log("Final Average:", finalAverage);
        console.log("Congratulations! You have been selected.");
    })
    .catch((error) => {
        console.log(error);
    });