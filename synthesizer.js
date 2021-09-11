let osc,noise,ampEnv,filter,filterLFO;

function setup(){
    createCanvas(windowWidth,windowHeight);
    textFont("Arial");

    ampEnv = new Tone.AmplitudeEnvelope({
        attack: 0.1,
        decay: 0.1,
        sustain: 1,
        release: 3
    }).toDestination();

    filter = new Tone.Filter(300,"highpass").connect(ampEnv);
    filterLFO = new Tone.LFO(3,0,1000).connect(filter.frequency);

    noise = new Tone.Noise("pink").start();
    noise.volume.value = -25;
    noise.connect(filter);

    osc = new Tone.Oscillator(100, "triangle").start();
    osc.connect(filter);
}

function draw(){
    background("lightBlue");

    textSize(20);
    text("use number keys 1-5 to play sound",width/2-175,300);
}

function keyPressed(){
    if(keyCode == 49){
        osc.frequency.value = 100;
        ampEnv.triggerAttackRelease(1);
    }
    else if(keyCode == 50){
        osc.frequency.value = 150;
        ampEnv.triggerAttackRelease(1);
    }
    else if(keyCode == 51){
        osc.frequency.value = 200;
        ampEnv.triggerAttackRelease(1);
    }
    else if(keyCode == 52){
        osc.frequency.value = 250;
        ampEnv.triggerAttackRelease(1);
    }
    else if(keyCode == 53){
        osc.frequency.value = 300;
        ampEnv.triggerAttackRelease(1);
    }
}
