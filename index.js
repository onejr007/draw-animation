const headCanvas = document.querySelector( '.js-paint' );
const context = headCanvas.getContext( '2d' );
const saveCanvas = document.querySelector( '.canvasimg' );
const context1 = saveCanvas.getContext( '2d' );
const showCanvas = document.querySelector( '.show' );
const context2 = showCanvas.getContext( '2d' );
const handCanvas = document.querySelector( '.js-paint1' );
const context3 = handCanvas.getContext( '2d' );
const tempCanvas = document.querySelector( '.temp' );
const tempCtx = tempCanvas.getContext( '2d' );
var bg = document.getElementById("show");
var label = document.getElementById("track");

var head= new Image();
head.src = "./head.png";
head.crossOrigin = "Anonymous";
var hand = new Image();
hand.src = "./hand.png";
hand.crossOrigin = "Anonymous";
var start = null;
var imageObj1 = {
    img:null, 
    x:0, 
    y:0, 
    width:120, 
    height:181, 
    currentframe:0, 
    totalframes:7
}
imageObj1.img = new Image();
imageObj1.img.src = "./animation.png";
imageObj1.img.crossOrigin = "Anonymous";
var character = {
    img:null, 
    x:0, 
    y:0, 
    width:120, 
    height:181, 
    currentframe:0, 
    totalframes:7
}
character.img = new Image();
character.img.src = "./animation.png";
character.crossOrigin = "Anonymous";


context.lineCap = 'round';
context3.lineCap = 'round';

const colorPicker = document.querySelector( '.js-color-picker');

colorPicker.addEventListener( 'change', event => {
    context.strokeStyle = event.target.value; 
} );

colorPicker.addEventListener( 'change', event => {
    context3.strokeStyle = event.target.value; 
} );
const lineWidthRange = document.querySelector( '.js-line-range' );
const lineWidthLabel = document.querySelector( '.js-range-value' );

lineWidthRange.addEventListener( 'input', event => {
    const width = event.target.value;
    const width1 = event.target.value;
    lineWidthLabel.innerHTML = width;
    context.lineWidth = width;
    context3.lineWidth = width1;
} );

let x = 0, y = 0;
let isMouseDown = false;
let isTouchStart = false;
let w = saveCanvas.width;
let h = saveCanvas.height;

imageObj1.img.onload = function() {
    context.drawImage(head, 0, 0);
    context1.drawImage(this, 0, 0);
    context3.drawImage(hand, 0, 0);
    start = setInterval(animateimageObj1, 120);
};
const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;   
    [x, y] = [event.offsetX || event.touches[0].offsetX, event.offsetY || event.touches[0].offsetY];  
}
const drawLine = event => {
    if ( isMouseDown ) {
        const newX = event.offsetX || event.touches[0].offsetX;
        const newY = event.offsetY || event.touches[0].offsetY;
        context.beginPath();
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        //[x, y] = [newX, newY];
        x = newX;
        y = newY;
    }
}
const drawLine1 = event => {
    if ( isMouseDown ) {
        const newX = event.offsetX || event.touches[0].offsetX;
        const newY = event.offsetY || event.touches[0].offsetY;
        context3.beginPath();
        context3.moveTo( x, y );
        context3.lineTo( newX, newY );
        context3.stroke();
        //[x, y] = [newX, newY];
        x = newX;
        y = newY;
    }
}
headCanvas.addEventListener( 'mousedown', startDrawing );
headCanvas.addEventListener( 'mousemove', drawLine );
headCanvas.addEventListener( 'mouseup', stopDrawing );
headCanvas.addEventListener( 'mouseout', stopDrawing );
handCanvas.addEventListener( 'mousedown', startDrawing );
handCanvas.addEventListener( 'mousemove', drawLine1 );
handCanvas.addEventListener( 'mouseup', stopDrawing );
handCanvas.addEventListener( 'mouseout', stopDrawing );

headCanvas.addEventListener( 'touchstart', startDrawing );
headCanvas.addEventListener( 'touchmove', drawLine );
headCanvas.addEventListener( 'touchend', stopDrawing );
handCanvas.addEventListener( 'touchstart', startDrawing );
handCanvas.addEventListener( 'touchmove', drawLine1 );
handCanvas.addEventListener( 'touchend', stopDrawing );


function bg1() {
    if($('#ply').hasClass('active')){ 
        bg.style="background-image:url('./bg1.png');animation-play-state: paused;";
    }
    else if($('#stp').hasClass('active')){ 
        if($('#bwd').hasClass('active')){ 
            bg.style="background-image:url('./bg1.png');animation: movement 15s linear infinite;";
        }
        else if($('#fwd').hasClass('active')){ 
            bg.style="background-image:url('./bg1.png');animation: movement 5s linear infinite;";
        }
        else{
            bg.style="background-image:url('./bg1.png');animation: movement 10s linear infinite;";
        }
    }
    $("#bg1").addClass('active');
    $("#bg2").removeClass('active');
    $("#bg3").removeClass('active');
}

function bg2() {
    if($('#ply').hasClass('active')){ 
        bg.style="background-image:url('./bg2.png');animation-play-state: paused;";
    }
    else if($('#stp').hasClass('active')){ 
        if($('#bwd').hasClass('active')){ 
            bg.style="background-image:url('./bg2.png');animation: movement 15s linear infinite;";
        }
        else if($('#fwd').hasClass('active')){ 
            bg.style="background-image:url('./bg2.png');animation: movement 5s linear infinite;";
        }
        else{
            bg.style="background-image:url('./bg2.png');animation: movement 10s linear infinite;";
        }
    }
    $("#bg1").removeClass('active');
    $("#bg2").addClass('active');
    $("#bg3").removeClass('active');
}

function bg3() {
    if($('#ply').hasClass('active')){ 
        bg.style="background-image:url('./bg3.png');animation-play-state: paused;";
    }
    else if($('#stp').hasClass('active')){ 
        if($('#bwd').hasClass('active')){ 
            bg.style="background-image:url('./bg3.png');animation: movement 15s linear infinite;";
        }
        else if($('#fwd').hasClass('active')){ 
            bg.style="background-image:url('./bg3.png');animation: movement 5s linear infinite;";
        }
        else{
            bg.style="background-image:url('./bg3.png');animation: movement 10s linear infinite;";
        }
    }
    $("#bg1").removeClass('active');
    $("#bg2").removeClass('active');
    $("#bg3").addClass('active');
}

function stop(){
    $("#track").text("S");
    label.style="animation: blinker 1s linear infinite;";
    $("#stp").removeClass('active');
    $("#ply").addClass('active');
    $("#bwd").removeClass('active');
    $("#fwd").removeClass('active');
    $("#bwd").attr('disabled', true);
    $("#fwd").attr('disabled', true);
    if($('#bg1').hasClass('active')){ 
        bg.style="background-image:url('./bg1.png');animation-play-state: paused;";
    }
    else if($('#bg2').hasClass('active')){ 
        bg.style="background-image:url('./bg2.png');animation-play-state: paused;";
    }
    else if($('#bg3').hasClass('active')){ 
        bg.style="background-image:url('./bg3.png');animation-play-state: paused;";
    }
    $("#stp").hide('slow');
    $("#ply").show('slow');
    clearInterval(start);
}

function play(){
    $("#track").text("P");
    label.style="animation: none;";
    $("#stp").addClass('active');
    $("#ply").removeClass('active');
    $("#bwd").prop('disabled', false);
    $("#fwd").prop('disabled', false);
    if($('#bg1').hasClass('active')){ 
        bg.style="background-image:url('./bg1.png');animation-play-state: play;";
    }
    else if($('#bg2').hasClass('active')){ 
        bg.style="background-image:url('./bg2.png');animation-play-state: play;";
    }
    else if($('#bg3').hasClass('active')){ 
        bg.style="background-image:url('./bg3.png');animation-play-state: play;";
    }
    $("#ply").hide('slow');
    $("#stp").show('slow');
    clearInterval(start);
    start = setInterval(animateimageObj2, 120);
}

function forward(){
    $("#track").text("F x2");
    label.style="animation: blinker 1s linear infinite;";
    $("#fwd").addClass('active');
    $("#bwd").removeClass('active');
    $("#fwd").prop('disabled', true);
    $("#bwd").prop('disabled', false);
    if($('#bg1').hasClass('active')){ 
        bg.style="background-image:url('./bg1.png');animation: movement 5s linear infinite;";
    }
    else if($('#bg2').hasClass('active')){ 
        bg.style="background-image:url('./bg2.png');animation: movement 5s linear infinite;";
    }
    else if($('#bg3').hasClass('active')){ 
        bg.style="background-image:url('./bg3.png');animation: movement 5s linear infinite;";
    }
    $("#ply").hide('slow');
    $("#stp").show('slow');
    clearInterval(start);
    start = setInterval(animateimageObj2, 80);
}

function backward(){
    $("#track").text("B x2");
    label.style="animation: blinker 1s linear infinite;";
    $("#bwd").addClass('active');
    $("#fwd").removeClass('active');
    $("#fwd").prop('disabled', false);
    $("#bwd").prop('disabled', true);
    if($('#bg1').hasClass('active')){ 
        bg.style="background-image:url('./bg1.png');animation: movement 15s linear infinite;";
    }
    else if($('#bg2').hasClass('active')){ 
        bg.style="background-image:url('./bg2.png');animation: movement 15s linear infinite;";
    }
    else if($('#bg3').hasClass('active')){ 
        bg.style="background-image:url('./bg3.png');animation: movement 15s linear infinite;";
    }
    $("#ply").hide('slow');
    $("#stp").show('slow');
    clearInterval(start);
    start = setInterval(animateimageObj2, 180);
}

function erase() {
    context.clearRect(0, 0, w, h);
    context1.clearRect(0, 0, w, h);
    context2.clearRect(20, 20, w, h);
    context3.clearRect(0, 0, w, h);
    context.drawImage(head, 0, 0);
    context3.drawImage(hand, 0, 0);
    context1.drawImage(imageObj1.img, 0, 0);
    character.img.src = saveCanvas.toDataURL();
    clearInterval(start);
    start = setInterval(animateimageObj2, 120);
}

function save() {
    context1.clearRect(0, 0, w, h);
    context2.clearRect(20, 20, w, h);

    context1.drawImage(imageObj1.img, 0, 0);
    context1.drawImage(headCanvas, 27, 6, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 146, 11, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 270, 13, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 387, 5, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 504, 12, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 626, 15, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 747, 10, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    context1.drawImage(headCanvas, 866, 8, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(-53 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 45, 50, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore();  
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(-49 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 170, 51, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore();  
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(56 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 278, 88, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore();  
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(80 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 378, 83, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore(); 
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(84 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 487, 84, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore(); 
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(96 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 602, 83, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore(); 
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(65 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 755, 95, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore(); 
    tempCtx.clearRect(0, 0, w, h);
    tempCtx.save();  
    tempCtx.translate(handCanvas.width * 0.5, handCanvas.height * 0.5);  
    tempCtx.rotate(4 * Math.PI / 180);
    tempCtx.translate(-handCanvas.width * 0.5, -handCanvas.height * 0.5);
    tempCtx.drawImage(handCanvas, 0, 0);  
    context1.drawImage(tempCanvas, 892, 64, 378* saveCanvas.height / saveCanvas.width, 359 * saveCanvas.height / saveCanvas.width);
    tempCtx.restore(); 
    tempCtx.clearRect(0, 0, w, h);
    character.img.src = saveCanvas.toDataURL();
    clearInterval(start);
    if($('#bwd').hasClass('active')){ 
        start = setInterval(animateimageObj2, 180);
    }
    else if($('#fwd').hasClass('active')){ 
        start = setInterval(animateimageObj2, 80);
    }
    else{
        start = setInterval(animateimageObj2, 120);
    }
}

function animateimageObj1(){
    context2.clearRect(20, 20, w, h);
    imageObj1.currentframe++;
    context2.drawImage(imageObj1.img
    , imageObj1.currentframe*imageObj1.width, 0, imageObj1.width
    , imageObj1.height, 20, 20, imageObj1.width, imageObj1.height);
    if(imageObj1.currentframe>=imageObj1.totalframes){
        imageObj1.currentframe = 0;
    }
}

function animateimageObj2(){
    context2.clearRect(20, 20, w, h);
    if($('#stp').hasClass('active')){ 
        character.currentframe++;
        context2.drawImage(character.img
        , character.currentframe*character.width, 0, character.width
        , character.height, 20, 20, character.width, character.height);
        if(character.currentframe>=character.totalframes){
            character.currentframe = 0;
        };
    }
    else if($('#ply').hasClass('active')){ 
        context2.drawImage(character.img
        , character.currentframe*character.width, 0, character.width
        , character.height, 20, 20, character.width, character.height);
    }
}
