document.getElementById("generateBtn").addEventListener("click", () => {

  const text = document.getElementById("videoText").value;
  const style = document.getElementById("style").value;
  const video = document.getElementById("outputVideo");

  if (!text) {
    alert("Please type something first");
    return;
  }

  // Fake AI loading
  video.style.display = "none";

  let loading = document.createElement("div");
  loading.id = "aiLoader";
  loading.innerHTML = `
    <p>🧠 AI is generating your ${style.toUpperCase()} video...</p>
    <progress value="0" max="100" id="progressBar"></progress>
  `;
  document.body.appendChild(loading);

  let progress = 0;
  let bar = document.getElementById("progressBar");

  let interval = setInterval(() => {
    progress += 10;
    bar.value = progress;

    if (progress >= 100) {
      clearInterval(interval);
      loading.remove();

      video.src = "assets/sample.mp4";
      video.style.display = "block";
      video.play();
    }
  }, 400);

});
