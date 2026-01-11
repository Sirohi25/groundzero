document.getElementById("generateBtn").addEventListener("click", () => {

  const text = document.getElementById("videoText").value;
  const style = document.getElementById("style").value;
  const musicFile = document.getElementById("musicFile").files[0];

  if (!text) {
    alert("Text likho pehle!");
    return;
  }

  alert(`Generating ${style.toUpperCase()} style video...\n(API baad me connect hoga)`);

  // Placeholder video
  const video = document.getElementById("outputVideo");
  video.src = "assets/sample.mp4";
  video.load();
  video.play();

  // FUTURE READY
  if (musicFile) {
    console.log("Music selected:", musicFile.name);
    // future: merge music with video
  }
});
