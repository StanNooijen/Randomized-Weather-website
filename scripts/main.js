const Img0 = "images/Clouds-Moon-Snow-Thunder.png", Img1 = "images/Clouds-Moon-Snow.png", Img2 = "images/CLouds-Moon-Thunder.png", Img3 = "images/Clouds-Moon.png", Img4 = "images/Clouds-Rain-Moon.png", Img5 = "images/Clouds-Rain-Sun.png", Img6 = "images/Clouds-Rain.png", Img7 = "images/Clouds-Snow.png", Img8 = "images/Clouds-Sun-Thunder.png", Img9 = "images/Clouds-Sun.png", Img10 = "images/Clouds-Thunder.png", Img11 = "images/Clouds.png", Img12 = "images/Fog.png", Img13 = "images/Moon.png", Img14 = "images/Sun.png";
const DrgsImg0 = (-15), DrgsImg1 = (-10), DrgsImg2 = (-5), DrgsImg3 = (0), DrgsImg4 = (5), DrgsImg5 = (10), DrgsImg6 = (15), DrgsImg7 = (20), DrgsImg8 = (25), DrgsImg9 = (30), DrgsImg10 = (35), DrgsImg11 = (40), DrgsImg12 = (45);
const Icons = [(Img0), (Img1), (Img2), (Img3), (Img4), (Img5), (Img6), (Img7), (Img8), (Img9), (Img10), (Img11), (Img12), (Img13), (Img14)];
const MaxDegrees = [(DrgsImg0), (DrgsImg1), (DrgsImg3), (DrgsImg0), (DrgsImg5), (DrgsImg5), (DrgsImg3), (DrgsImg0), (DrgsImg5), (DrgsImg6), (DrgsImg4), (DrgsImg4), (DrgsImg3), (DrgsImg4), (DrgsImg7)];
const MinDegrees = [(DrgsImg3), (DrgsImg3), (DrgsImg5), (DrgsImg10), (DrgsImg9), (DrgsImg12), (DrgsImg7), (DrgsImg3), (DrgsImg8), (DrgsImg12), (DrgsImg9), (DrgsImg8), (DrgsImg6), (DrgsImg6), (DrgsImg12)];
const Months = [("January"), ("February"), ("March"), ("April"), ("May"), ("June"), ("July"), ("August"), ("September"), ("October"), ("November"), ("December")]
const Rain_Snow = [(true),(true),(false),(false),(true),(true),(true),(true),(false),(true),(false),(false),(false),(false),(false)]
var randomValue;

var date = new Date();
var MonthNumber = date.getMonth(); 
var DayNumber = date.getDate();


function CheckDays(Plus){
    // this checks 
    var MonthNumber = date.getMonth(); 
    var DayNumber = date.getDate();
    DayNumber += Plus;
    // console.log(date.getDate())
    // console.log(DayNumber + " DayNumber");
    // console.log(MonthNumber + " MonthNumber");
    // console.log(Month + " Month");



    if((MonthNumber == 0 || MonthNumber == 2 || MonthNumber == 4 || MonthNumber == 6 || MonthNumber == 7 || MonthNumber == 9 || MonthNumber == 11) && DayNumber >= 32){
        MonthNumber ++;
        DayNumber -= 31;
        if(MonthNumber == 12 )
        {
            MonthNumber = 0;
        }
        //Checks what day the max days are in the month
    }
    if((MonthNumber == 3 || MonthNumber == 5 || MonthNumber == 8 || MonthNumber == 10)&& DayNumber >= 31){
        MonthNumber ++;
        DayNumber -= 30;
    }

    if(MonthNumber == 1 && DayNumber >= 29){
        MonthNumber ++;
        DayNumber -= 28;
    }

    var Month = Months[MonthNumber];
    return [Month + " "+  DayNumber];
}



function getRandomImage(i) {
    // get a random index of the array
    const randomImages = Math.floor(Math.random() * Icons.length);

    randomValue = randomImages;
    const item = i[randomValue];

    return item;
}

function CheckRain(){
    //Checks if it is raining or snowing in the
    const RainCheck = Rain_Snow[randomValue];

    // console.log(randomValue);
    // console.log(RainCheck + " is raining?")
    if(RainCheck == true)
    {
        Rain = Math.floor(Math.random() *(60 - 10 ) + 10);
        RainDrop = Math.floor(Math.random() * (10 - 0.1 ) + 0.1);
    }
    else
    {
        Rain = 0;
        RainDrop = 0;
    }

    return Rain, RainDrop;
}

function getRandomDegrees(Max, Min) {

    const MinNumber = Max[randomValue];
    const MaxNumber = Min[randomValue];

    // console.log("1 " + MinNumber);
    // console.log("2 " + MaxNumber);

    var FinalNumber = Math.floor (Math.random() * (MaxNumber - MinNumber) + MinNumber);
    // console.log("3 " + FinalNumber);

    return FinalNumber;
}

function PrintAllThings() {
    var dates = CheckDays(0);
    var result = getRandomImage(Icons);
    var numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    var RainPercentage = CheckRain();
    document.getElementById("Image1").src = result;
    document.getElementById("Degree1").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree1").style.color = "white";
    document.getElementById("Date1").innerHTML = dates;
    document.getElementById("Rain1").innerHTML = RainPercentage + "%";
    document.getElementById("Rain1").style.textAlign = "center";

    // console.log(numbers)
    // console.log(result);

    dates = CheckDays(1);
    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    RainPercentage = CheckRain();
    document.getElementById("Image2").src = result;
    document.getElementById("Degree2").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree2").style.color = "white";
    document.getElementById("Date2").innerHTML = dates;
    document.getElementById("Rain2").innerHTML = RainPercentage + "%";

    // console.log(result);

    dates = CheckDays(2);
    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    RainPercentage = CheckRain();
    document.getElementById("Image3").src = result;
    document.getElementById("Degree3").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree3").style.color = "white";
    document.getElementById("Date3").innerHTML = dates;
    document.getElementById("Rain3").innerHTML = RainPercentage + "%";

    // console.log(result);


    dates = CheckDays(3);
    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    RainPercentage = CheckRain();
    document.getElementById("Image4").src = result;
    document.getElementById("Degree4").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree4").style.color = "white";
    document.getElementById("Date4").innerHTML = dates;
    document.getElementById("Rain4").innerHTML = RainPercentage + "%";

    // console.log(result);


    dates = CheckDays(4);
    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    RainPercentage = CheckRain();
    document.getElementById("Image5").src = result;
    document.getElementById("Degree5").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree5").style.color = "white";
    document.getElementById("Date5").innerHTML = dates;
    document.getElementById("Rain5").innerHTML = RainPercentage + "%";

    // console.log(result);


    dates = CheckDays(5);
    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    RainPercentage = CheckRain();
    document.getElementById("Image6").src = result;
    document.getElementById("Degree6").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree6").style.color = "white";
    document.getElementById("Date6").innerHTML = dates;
    document.getElementById("Rain6").innerHTML = RainPercentage + "%";

    // console.log(result);


    dates = CheckDays(6);
    result = getRandomImage(Icons);
    numbers = getRandomDegrees(MaxDegrees, MinDegrees);
    RainPercentage = CheckRain();
    document.getElementById("Image7").src = result;
    document.getElementById("Degree7").innerHTML = numbers + "&#8451;";
    document.getElementById("Degree7").style.color = "white";
    document.getElementById("Date7").innerHTML = dates;
    document.getElementById("Rain7").innerHTML = RainPercentage + "%";

    // console.log(result);

}