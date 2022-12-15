const Img0 = "images/Clouds-Moon-Snow-Thunder.png", Img1 = "images/Clouds-Moon-Snow.png", Img2 = "images/CLouds-Moon-Thunder.png", Img3 = "images/Clouds-Moon.png", Img4 = "images/Clouds-Rain-Moon.png", Img5 = "images/Clouds-Rain-Sun.png", Img6 = "images/Clouds-Rain.png", Img7 = "images/Clouds-Snow.png", Img8 = "images/Clouds-Sun-Thunder.png", Img9 = "images/Clouds-Sun.png", Img10 = "images/Clouds-Thunder.png", Img11 = "images/Clouds.png", Img12 = "images/Fog.png", Img13 = "images/Moon.png", Img14 = "images/Sun.png";
const DrgsImg0 = (-15), DrgsImg1 = (-10), DrgsImg2 = (-5), DrgsImg3 = (0), DrgsImg4 = (5), DrgsImg5 = (10), DrgsImg6 = (15), DrgsImg7 = (20), DrgsImg8 = (25), DrgsImg9 = (30), DrgsImg10 = (35), DrgsImg11 = (40), DrgsImg12 = (45);
const Icons = [(Img0), (Img1), (Img2), (Img3), (Img4), (Img5), (Img6), (Img7), (Img8), (Img9), (Img10), (Img11), (Img12), (Img13), (Img14)];
const MaxDegrees = [(DrgsImg0), (DrgsImg1), (DrgsImg3), (DrgsImg0), (DrgsImg5), (DrgsImg5), (DrgsImg3), (DrgsImg0), (DrgsImg5), (DrgsImg6), (DrgsImg4), (DrgsImg4), (DrgsImg3), (DrgsImg4), (DrgsImg7)];
const MinDegrees = [(DrgsImg3), (DrgsImg3), (DrgsImg5), (DrgsImg10), (DrgsImg9), (DrgsImg12), (DrgsImg7), (DrgsImg3), (DrgsImg8), (DrgsImg12), (DrgsImg9), (DrgsImg8), (DrgsImg6), (DrgsImg6), (DrgsImg12)];
var randomValue;

function getRandomImage(i) {
    const randomImages = Math.floor(Math.random() * Icons.length);

    randomValue = randomImages;
    const item = i[randomValue];

    return item;
}

function getRandomDegrees(Max, Min) {

    const MinNumber = Max[randomValue];
    const MaxNumber = Min[randomValue];

    console.log("1 " + MinNumber);
    console.log("2 " + MaxNumber);

    var FinalNumber = Math.floor (Math.random() * (MaxNumber - MinNumber) + MinNumber);
    console.log("3 " + FinalNumber);

    return FinalNumber;
}

function PrintWeatherThings() {
    var result = getRandomImage(Icons);
    var numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image1").src = result;
    document.getElementById("Degree1").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree1").style.color = "white";

    console.log(numbers)
    console.log(result);

    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image2").src = result;
    document.getElementById("Degree2").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree2").style.color = "white";

    console.log(result);

    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image3").src = result;
    document.getElementById("Degree3").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree3").style.color = "white";

    console.log(result);

    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image4").src = result;
    document.getElementById("Degree4").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree4").style.color = "white";

    console.log(result);

    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image5").src = result;
    document.getElementById("Degree5").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree5").style.color = "white";

    console.log(result);

    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image6").src = result;
    document.getElementById("Degree6").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree6").style.color = "white";

    console.log(result);

    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    document.getElementById("Image7").src = result;
    document.getElementById("Degree7").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree7").style.color = "white";

    console.log(result);
}