// Lessons data
const lessons = {
    excel: { title: "Excel Basics", content: "Learn SUM, AVERAGE, formatting.", quiz: ["Which sums A1:A5?", ["=SUM(A1:A5)", "=ADD(A1:A5)"], 0] },
    js: { title: "JavaScript Intro", content: "Variables, DOM, events.", quiz: ["Keyword to declare variable?", ["var", "make"], 0] },
    resume: { title: "Resume Writing", content: "Be concise, show achievements.", quiz: ["Best to include?", ["Numbers", "Stories"], 0] }
};

let chosen = null, answer = null;

function loadLesson(key) {
    let l = lessons[key];
    document.getElementById("title").innerText = l.title;
    document.getElementById("content").innerText = l.content;
    answer = l.quiz[2];
    let optHTML = "";
    l.quiz[1].forEach((o, i) => optHTML += `<button onclick="chosen=${i}">${o}</button><br>`);
    document.getElementById("question").innerText = l.quiz[0];
    document.getElementById("options").innerHTML = optHTML;
    document.getElementById("quiz").style.display = "block";
}

function submitQuiz() {
    if (chosen === null) return alert("Select an option");
    document.getElementById("result").innerText = chosen === answer ? "✅ Correct! Certificate Earned" : "❌ Try Again";
      }
