function calculateCompoundInterest() {
    var principal = document.getElementById("Principal").value;
    var rate = document.getElementById("Rate").value;
    var ratePerMonth = document.getElementById("monthlyRate").value;
    var time = document.getElementById("Time").value;

    if (!principal) {
        alert("input a principal")
        return;
    } else if (!rate) {
        alert("input a rate")
        return;
    } else if (!time) {
        alert("input an amount of time")
        return;
    } else if (!ratePerMonth) {
        alert("input a compoundment")
        return;
    }


    var rateDecimal = rate / 100;
    var rateOveral = rateDecimal / ratePerMonth;
    var rateComplete = rateOveral + 1
    var rpmTimesTime = ratePerMonth * time;
    var power = Math.pow(rateComplete, rpmTimesTime);
    var compoundInterest = power * principal;
    var compoundInterestComplete = compoundInterest.toFixed(2);
    document.getElementById("result").innerHTML = "Your Compound interest is: " + compoundInterestComplete
}