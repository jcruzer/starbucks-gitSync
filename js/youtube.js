      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // 함수 onYouTubeIframeAPIReady는 이름 바꾸지 말기
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div> id라서 #player라고 쓰면안됨 자동으로 찾아줌
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8',   // 최초 재생할 유튜브 영상 ID
          playerVars:{
            autoplay:true,  // 자동 재생 유무
            loop:true,    // 반복 재생 유무
            playlist:'An6LvWQuj_8'  // 반복 재생할 유튜브 영상 ID
          },
          events:{
            // 영상이 준비 되었을 때
            onReady:function(event){
              event.target.mute()   // 음소거
            }
          }

        });
      }