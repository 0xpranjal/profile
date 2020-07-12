particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hey There!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('Welcome to my Github.')
    .pauseFor(1000)
    .deleteChars(21)
    .typeString('an aspiring ML Engineer.')
    .pauseFor(1000)
    .deleteChars(24)
    .typeString('currently learning Blockchain and Data Science.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at github.com/Bhard27')
    .pauseFor(1000)
    .deleteAll()
    .start();
