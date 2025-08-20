// exam.js

let selectedSubjects = [];   // store subjects chosen
let currentSubjectIndex = 0; // track which subject exam we are on

function startExams(subjects) {
    selectedSubjects = subjects; 
    currentSubjectIndex = 0;
    loadExam(selectedSubjects[currentSubjectIndex]);
}

function loadExam(subject) {
    // Load subject-specific exam file
    let examFile = "";

    if (subject === "Mathematics") {
        examFile = "maths test.html";
    } else if (subject === "Further Mathematics") {
        examFile = "further maths test.html";
    } else if (subject === "Physics") {
        examFile = "physics test.html";
    }

    if (examFile) {
        window.location.href = examFile + "?subject=" + subject;
    }
}

function submitExam() {
    alert("Exam submitted successfully for " + selectedSubjects[currentSubjectIndex]);

    currentSubjectIndex++;

    if (currentSubjectIndex < selectedSubjects.length) {
        // Load the next subject exam
        loadExam(selectedSubjects[currentSubjectIndex]);
    } else {
        alert("All exams completed! ✅");
        window.location.href = "thankyou.html"; // or final page
    }
}
