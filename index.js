const video = document.getElementById("video")
const play = document.getElementById("play")
const stop = document.getElementById("stop")
const progress = document.getElementById("progress")
const timestamp = document.getElementById("timestamp")




// Play & pause video
const toggleVideoStatus = () => {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
}



// Update play/pause icon
const updatePlayIcon = () => {
  return true
}



// Update progress & timestamp
const updateProgress = () => {
  return true
}



 // Set video time to progress
const setVideoProgress = () => {
  return true
}


// Set stop
const stopVideo = () => {
  return true
}



video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", togglePlayIcon)
video.addEventListener("play", togglePlayIcon)
video.addEventListener("click", updateProgress)

play.addEventListener("click", toggleVideoStatus)

stop.addEventListener("click", stopVIdeo)

progress.addEventListener("change", setVideoProgress)
