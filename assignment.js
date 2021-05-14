
//Kilometer to meter conversion
function kilometerToMeter(kilo){
    if(kilo<0){

        return "Distance can't be negative value. Please enter valid kilometer number";

    }else{

        var meter = kilo*1000;

        return meter;
    }
}
//console.log(kilometerToMeter(20));

//Budger calculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if(watchQuantity<0 || phoneQuantity<0 || laptopQuantity<0){

        return "Any quantity amount can't be negative value. Please enter valid quantity number.";

    }else{
        var totalPrice = watchPrice*watchQuantity + phonePrice*phoneQuantity + laptopPrice*laptopQuantity;

        return totalPrice;
    }
}
//console.log(budgetCalculator(1, 4, 5));


//Hotel cost management
function hotelCost(totalDays){
    //1-10 days per day price = 100
    //11-20 days per day price = 80
    //more than 21 days per day price = 50
    var first10PerDayPrice = 100;
    var second10PerDayPrice = 80;
    var moreThan20DaysPerDayPrice = 50;
    var totalPrice;

    if(totalDays<0){

        return "Days number can't be negative. Please enter valid days number.";

    }else{
        if(totalDays<=10){

           var totalPrice = first10PerDayPrice*totalDays;

            return totalPrice;

        }else if(totalDays<=20){

            totalPrice = (first10PerDayPrice*10)+((totalDays-10)*second10PerDayPrice);

            return totalPrice;
        }else{

            totalPrice = (first10PerDayPrice*10)+(second10PerDayPrice*10)+((totalDays-20)*moreThan20DaysPerDayPrice);

            return totalPrice;
        }
    }
}
console.log(hotelCost(-2));

//Mega friend find
function megaFriend(friends){
    var maxFriend = friends[0];
    for(var i = 0; i<friends.length; i++){
        var maxFriendLength = maxFriend.length;
        var nextFriend = friends[i];
        var nextFriendLength = nextFriend.length;
        if(maxFriendLength<nextFriendLength){
            maxFriend = friends[i];
        }

    }
    return maxFriend;
}

console.log(megaFriend(['Rahim', 'Sun', 'Ta', 'Tauhid', 'Ibna']));