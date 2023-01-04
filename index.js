window.addEventListener('keydown', function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return;      //stop the function here.
        audio.currentTime = 0;  //rewind to
        audio.play();
        key.classList.add('playing');

        function removeTransition(e) {
            if (e.propertyName !== 'transform') return;
            this.classList.remove('playing');
        }


        

        const keys = this.document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));


        });
    





