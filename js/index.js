      const $video = document.querySelector('#video')
      const $play = document.querySelector('#play')
      const $pause = document.querySelector('#pause')
      const $backward = document.querySelector('#backward')
      const $forward = document.querySelector('#forward')

      

      $play.addEventListener('click', handlePlay)
      $pause.addEventListener('click', handlePause)
      
      function handlePlay() {
        $video.play()
        $play.hidden = true
        $pause.hidden = false 
        console.log('Le diste click al boton de play')
      }

      function handlePause() {
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
        console.log('Le diste click al boton de pause')
      }

      $backward.addEventListener('click', handlebackward)

      function handlebackward(){
        $video.currentTime = $video.currentTime -10
        console.log('Para atras 10 segundos', $video.currentTime)
      }

      $forward.addEventListener('click', handleForward)

      function handleForward(){
        $video.currentTime = $video.currentTime + 10
        console.log('Para adelante 10 segundos', $video.currentTime)
      }

      const $progress = document.querySelector('#progress')
      $video.addEventListener('loadedmetadata', handeleLoaded)
      $video.addEventListener('timeupdate', handeleTimeUpdate)

      function handeleLoaded () {
        progress.max = $video.duration
        console.log('ah cargado mi video', $video.duration)
      }

      function handeleTimeUpdate () {
        $progress.value = $video.currentTime
        //console.log('actual time', $video.currentTime)
      }

      $progress.addEventListener('input', handleInput)

      function handleInput () {
         $video.currentTime = $progress.value
        console.log($progress.value)

      }