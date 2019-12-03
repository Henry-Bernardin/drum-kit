window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;// Stops the function from running
    audio.currentTime = 0; // rewind to the start
    audio.play(); 
    key.classList.add('playing');   
}); 

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it it's not a transform
    console.log(e.propertyName);  
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // select all the keys 
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 