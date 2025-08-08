
const completedLessonsKey = 'completedLessons';

// Load completed lessons or start empty
let completedLessons = JSON.parse(localStorage.getItem(completedLessonsKey)) || {};

// Mark lesson as completed
function markCompleted(lessonId) {
  completedLessons[lessonId] = true;
  localStorage.setItem(completedLessonsKey, JSON.stringify(completedLessons));
}

// Check if lesson is completed
function isCompleted(lessonId) {
  return !!completedLessons[lessonId];
}

// Example usage: after quiz success
function onQuizPassed(lessonId) {
  markCompleted(lessonId);
  alert(`Congrats! You completed ${lessonId}.`);
  updateUI();
}

// Update UI to show completed lessons
function updateUI() {
  Object.keys(completedLessons).forEach(id => {
    const el = document.getElementById('lesson-' + id);
    if(el) el.style.opacity = '0.6'; // or add a checkmark, etc.
  });
}

// Call this on page load
updateUI();

How to use:

Give each lesson element an ID like lesson-excel or lesson-js.

Call onQuizPassed('excel') when a user passes the Excel quiz.
