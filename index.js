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
  if(video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
  }
}



// Update progress & timestamp
const updateProgress = () => {

}



 // Set video time to progress
const setVideoProgress = () => {
  return true
}


// Set stop
const stopVideo = () => {
  video.currentTime = 0;
  video.pause()
}



video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("click", updateProgress)

play.addEventListener("click", toggleVideoStatus)

stop.addEventListener("click", stopVideo)

progress.addEventListener("change", setVideoProgress)
