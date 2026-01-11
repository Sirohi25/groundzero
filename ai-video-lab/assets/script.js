document.getElementById("generateBtn").addEventListener("click", async () => {
    const text = document.getElementById("videoText").value;
    const musicFile = document.getElementById("musicFile").files[0];

    if(!text){
        alert("Please type some text first!");
        return;
    }

    alert("Video generation in progress... API integration pending.");

    // ============================
    // FUTURE: Call Text-to-Video API
    // const response = await fetch(API_CONFIG.TEXT_TO_VIDEO.endpoint, {
    //   method: "POST",
    //   headers: {
    //     "Authorization": `Bearer ${API_CONFIG.TEXT_TO_VIDEO.apiKey}`,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //       text: text,
    //       style: API_CONFIG.TEXT_TO_VIDEO.options.style,
    //       duration: API_CONFIG.TEXT_TO_VIDEO.options.duration
    //   })
    // });
    // const videoBlob = await response.blob();
    // ============================

    // TEMPORARY PLACEHOLDER VIDEO
    const outputVideo = document.getElementById("outputVideo");
    outputVideo.src = "assets/sample.mp4";  // Replace with API output
    outputVideo.load();
    outputVideo.play();

    // Show download button
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.style.display = "block";
    downloadBtn.onclick = () => {
        // Replace with API video download link when ready
        const a = document.createElement("a");
        a.href = "assets/sample.mp4";
        a.download = "anime_video.mp4";
        a.click();
    };

    // FUTURE: Merge uploaded music with video via FFmpeg API
});
