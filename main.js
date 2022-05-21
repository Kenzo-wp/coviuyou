function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.SpeechSynthesis;
}

function preload() {
    classifier = ml5.imageClassifier('Doodlenet');
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult() {
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label: ' + results[0].label;
}

function clearCanvas() {

    background("white");
}

