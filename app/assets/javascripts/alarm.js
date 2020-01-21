var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var player;
function onYouTubeIframeAPIReady() {
if (document.getElementById('video1') === null){
} else{
  var  video_url1 = document.getElementById('video1').value;
}
if (document.getElementById('video2') === null){
} else{
  var  video_url2 = document.getElementById('video2').value;
}
if (document.getElementById('video3') === null){
} else{
  var  video_url3 = document.getElementById('video3').value;
}

if (document.getElementById('video4') === null){
} else{
  var  video_url4 = document.getElementById('video4').value;
}

if (document.getElementById('video5') === null){
} else{
  var  video_url5 = document.getElementById('video5').value;
}


player1 = new YT.Player('player1', {
    height: '360',
    width: '640',
    videoId: video_url1,
    playerVars: {
      rel: 0
    }
    });
  
player2 = new YT.Player('player2', {
    height: '360',
    width: '640',
    videoId: video_url2,
    playerVars: {
      rel: 0
    }
    });

player3 = new YT.Player('player3', {
  height: '360',
  width: '640',
  videoId: video_url3,
  playerVars: {
    rel: 0
  }
  });

player4 = new YT.Player('player4', {
  height: '360',
  width: '640',
  videoId: video_url4,
  playerVars: {
    rel: 0
  }
  });
player5 = new YT.Player('player5', {
  height: '360',
  width: '640',
  videoId: video_url5,
  playerVars: {
    rel: 0
  }
  });
}




function playVideo1(){
  var clock = document.getElementById('clock__time').textContent
  var alarmHour = document.getElementsByClassName('alarm-list__box__time__hour__text')
  var alarmMinute = document.getElementsByClassName('alarm-list__box__time__minute__text')
  var alarmHour = alarmHour[0].textContent
  var alarmMinute = alarmMinute[0].textContent
  var alarmTime = alarmHour + ":" + alarmMinute + ":00"
  var alarmTime = alarmTime.replace(/\r?\n/g,"");

  if(alarmTime == clock){
    player1.playVideo()};
}

function playVideo2(){
  var clock = document.getElementById('clock__time').textContent
  var alarmHour = document.getElementsByClassName('alarm-list__box__time__hour__text')
  var alarmMinute = document.getElementsByClassName('alarm-list__box__time__minute__text')
  var alarmHour = alarmHour[1].textContent
  var alarmMinute = alarmMinute[1].textContent
  var alarmTime = alarmHour + ":" + alarmMinute + ":00"
  var alarmTime = alarmTime.replace(/\r?\n/g,"");

  if(alarmTime == clock){
    player2.playVideo()};
}

function playVideo3(){
  var clock = document.getElementById('clock__time').textContent
  var alarmHour = document.getElementsByClassName('alarm-list__box__time__hour__text')
  var alarmMinute = document.getElementsByClassName('alarm-list__box__time__minute__text')
  var alarmHour = alarmHour[2].textContent
  var alarmMinute = alarmMinute[2].textContent
  var alarmTime = alarmHour + ":" + alarmMinute + ":00"
  var alarmTime = alarmTime.replace(/\r?\n/g,"");

  if(alarmTime == clock){
    player3.playVideo()};
}

function playVideo4(){
  var clock = document.getElementById('clock__time').textContent
  var alarmHour = document.getElementsByClassName('alarm-list__box__time__hour__text')
  var alarmMinute = document.getElementsByClassName('alarm-list__box__time__minute__text')
  var alarmHour = alarmHour[3].textContent
  var alarmMinute = alarmMinute[3].textContent
  var alarmTime = alarmHour + ":" + alarmMinute + ":00"
  var alarmTime = alarmTime.replace(/\r?\n/g,"");

  if(alarmTime == clock){
    player4.playVideo()};
}

function playVideo5(){
  var clock = document.getElementById('clock__time').textContent
  var alarmHour = document.getElementsByClassName('alarm-list__box__time__hour__text')
  var alarmMinute = document.getElementsByClassName('alarm-list__box__time__minute__text')
  var alarmHour = alarmHour[4].textContent
  var alarmMinute = alarmMinute[4].textContent
  var alarmTime = alarmHour + ":" + alarmMinute + ":00"
  var alarmTime = alarmTime.replace(/\r?\n/g,"");

  if(alarmTime == clock){
    player5.playVideo()};
}


setInterval(playVideo1, 1000);
setInterval(playVideo2, 1000);
setInterval(playVideo3, 1000);
setInterval(playVideo4, 1000);
setInterval(playVideo5, 1000);




