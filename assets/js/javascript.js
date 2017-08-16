// change video

$(document).ready(function() {
  // console.log(moment().format("k"))
  let time = (moment().format("k"))

  var timeOfDay;

  // console.log(time)

function tellTime(time) {
  if (9 <= time && time <= 13) {
    timeOfDay = "midday"
  }
  if (2 <= time && time <= 8) {
    timeOfDay = "morning";
  }
  if (14 <= time && time <= 20) {
    timeOfDay = "afternoon";
  }
  if (20 <= time || time <= 1) {
    timeOfDay = "night";
  }
}


tellTime(time)
  // console.log(timeOfDay)
  var timeIndex = 1;


  var timeVideos = ["1.mp4", '2.mp4', '3.mp4']
  var timeIndex = 1;

  $("#landing-page-video").attr('src', "assets/videos/" + timeOfDay + "/" + timeVideos[0])
  document.getElementById('landing-page-video').addEventListener('ended', changeVideoTime, false);

  function changeVideoTime() {
    // console.log(time)
      $("#landing-page-video").fadeOut('slow', function() {
        $("#landing-page-video").attr('src', "assets/videos/" + timeOfDay + "/" + timeVideos[timeIndex]);
        $("#landing-page-video").fadeIn('slow');
        timeIndex++
        if (timeIndex > timeVideos.length - 1) {
          timeIndex = 0;
        }
      });
    };
});