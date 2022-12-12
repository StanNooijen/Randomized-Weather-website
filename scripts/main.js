const Img0 = "images/Clouds-Moon-Snow-Thunder.png", Img1 = "images/Clouds-Moon-Snow.png", Img2 = "images/CLouds-Moon-Thunder.png", Img3 = "images/Clouds-Moon.png", Img4 = "images/Clouds-Rain-Moon.png", Img5 = "images/Clouds-Rain-Sun.png", Img6 = "images/Clouds-Rain.png", Img7 = "images/Clouds-Snow.png", Img8 = "images/Clouds-Sun-Thunder.png", Img9 = "images/Clouds-Sun.png", Img10 = "images/Clouds-Thunder.png", Img11 = "images/Clouds.png", Img12 = "images/Fog.png", Img13 = "images/Moon.png", Img14 = "images/Sun.png";
const Drgs0 = (-10), Drgs1 = (-5), Drgs2 = ("20"), Drgs3 = ("0", "25"), Drgs4 = ("0", "15"), Drgs5 = ("5", "30"), Drgs6 = ("5", "15"), Drgs7 = ("-15", "0"), Drgs8 = ("5", "30"), Drgs9 = ("5", "30"), Drgs10 = ("5", "20"), Drgs11 = ("0", "15"), Drgs12 = ("0", "10"), Drgs13 = ("0", "15"), Drgs14 = ("15", "35");
const Icons = [(Img0), (Img1), (Img2), (Img3), (Img4), (Img5), (Img6), (Img7), (Img8), (Img9), (Img10), (Img11), (Img12), (Img13), (Img14)];
const Degrees = [(Drgs0), (Drgs1), (Drgs2), (Drgs3), (Drgs4), (Drgs5), (Drgs6), (Drgs7), (Drgs8), (Drgs9), (Drgs10), (Drgs11), (Drgs12), (Drgs13), (Drgs14)]

function getRandomImage(i){
    const randomImages = Math.floor(Math.random() * Icons.length);

    const item = i[randomIndex];

    return item;
}

function getRandomDegrees(p){
    const randomDegrees = Math.floor(Math.random() * Degrees.length);
}

function PrintWeatherThings() {
    var result = getRandomImage(Icons);
    document.getElementById("Image1").src = result;
    console.log(result);

    result = getRandomImage(Icons);
    document.getElementById("Image2").src = result;

    console.log(result);

    result = getRandomImage(Icons);
    document.getElementById("Image3").src = result;

    console.log(result);

    result = getRandomImage(Icons);
    document.getElementById("Image4").src = result;

    console.log(result);

    result = getRandomImage(Icons);
    document.getElementById("Image5").src = result;

    console.log(result);

    result = getRandomImage(Icons);
    document.getElementById("Image6").src = result;

    console.log(result);

    result = getRandomImage(Icons);
    document.getElementById("Image7").src = result;

    console.log(result);
}