let queue = JSON.parse(sessionStorage.getItem('examQueue')) || [];
let idx = parseInt(sessionStorage.getItem('currentExamIndex')) || 0;

if (idx + 1 < queue.length) {
  sessionStorage.setItem('currentExamIndex', idx + 1);
  window.location.href = queue[idx + 1]; // next exam
} else {
  window.location.href = "success.html"; // final success page
}
