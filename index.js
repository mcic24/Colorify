console.log('Script loaded...');
function paint(color) {
    console.log('Painting circle ' + color );
    // const circle = document.getElementsByClassName('circle');
    const circle = document.getElementById("CircleID");
    circle.style = `background-color:${color}`;
}
function paintRandom() {
    console.log("It's random time");
    const colors = ['red','yellow','black','brown','pink'];
    const pickOne = Math.floor(Math.random() * 5);
    console.log(colors[pickOne]);
    paint(colors[pickOne]);
}
