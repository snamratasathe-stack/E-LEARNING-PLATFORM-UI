let progress = localStorage.getItem("progress") || 0;
document.getElementById("overall-progress") &&
  (document.getElementById("overall-progress").style.width = progress + "%");

function openCourse(course) {
  localStorage.setItem("currentCourse", course);
  window.location.href = "course.html";
}

const course = localStorage.getItem("currentCourse");
if (course) {
  const title = document.getElementById("course-title");
  const video = document.getElementById("video");

  if (course === "html") {
    title.innerText = "HTML & CSS Basics";
    video.src = "https://www.youtube.com/embed/UB1O30fR-EE";
  }

  if (course === "js") {
    title.innerText = "JavaScript Fundamentals";
    video.src = "https://www.youtube.com/embed/PkZNo7MFNFg";
  }
}

function completeLesson() {
  progress = Math.min(100, Number(progress) + 20);
  localStorage.setItem("progress", progress);
  alert("✅ Lesson Completed!");
}
