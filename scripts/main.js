const Img0 = "images/Clouds-Moon-Snow-Thunder.png", Img1 = "images/Clouds-Moon-Snow.png", Img2 = "images/CLouds-Moon-Thunder.png", Img3 = "images/Clouds-Moon.png", Img4 = "images/Clouds-Rain-Moon.png", Img5 = "images/Clouds-Rain-Sun.png", Img6 = "images/Clouds-Rain.png", Img7 = "images/Clouds-Snow.png", Img8 = "images/Clouds-Sun-Thunder.png", Img9 = "images/Clouds-Sun.png", Img10 = "images/Clouds-Thunder.png", Img11 = "images/Clouds.png", Img12 = "images/Fog.png", Img13 = "images/Moon.png", Img14 = "images/Sun.png";
const Icons = [(Img0), (Img1), (Img2), (Img3), (Img4), (Img5), (Img6), (Img7), (Img8), (Img9), (Img10), (Img11), (Img12), (Img13), (Img14)];

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function PrintWeatherThings() {
    var result = getRandomItem(Icons);
    document.getElementById("Image1").src = result;

    console.log(result);

    result = getRandomItem(Icons);
    document.getElementById("Image2").src = result;

    console.log(result);

    result = getRandomItem(Icons);
    document.getElementById("Image3").src = result;

    console.log(result);

    result = getRandomItem(Icons);
    document.getElementById("Image4").src = result;

    console.log(result);

    result = getRandomItem(Icons);
    document.getElementById("Image5").src = result;

    console.log(result);

    result = getRandomItem(Icons);
    document.getElementById("Image6").src = result;

    console.log(result);

    result = getRandomItem(Icons);
    document.getElementById("Image7").src = result;

    console.log(result);

}