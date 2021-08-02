function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`);
    
    // Stop the function from running all togeter if there is no audio 
    if (!audio) {
        return;
    }
    // Rewind audio to the start
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    // Skip it if it's not a transform
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);