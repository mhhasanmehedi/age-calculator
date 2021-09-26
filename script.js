function ageCalculator() {
  //collect input from HTML form and convert into date format
  var userInput = document.getElementById("DOB").value;
  var dob = new Date(userInput);

  //check user provide input or not
  if (userInput == null || userInput == "") {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {
    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    var now = new Date();
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    var age = {};
    var ageString = "";

    var yearAge = currentYear - dobYear;

    if (currentMonth >= dobMonth) var monthAge = currentMonth - dobMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    if (currentDate >= dobDate) var dateAge = currentDate - dobDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        " years, " +
        age.months +
        " months, and " +
        age.days +
        " days old.";
    else if (age.years == 0 && age.months == 0 && age.days > 0)
      ageString = "Only " + age.days + " days old!";
    else if (age.years > 0 && age.months == 0 && age.days == 0)
      ageString = age.years + " years old. Happy Birthday!!";
    else if (age.years > 0 && age.months > 0 && age.days == 0)
      ageString = age.years + " years and " + age.months + " months old.";
    else if (age.years == 0 && age.months > 0 && age.days > 0)
      ageString = age.months + " months and " + age.days + " days old.";
    else if (age.years > 0 && age.months == 0 && age.days > 0)
      ageString = age.years + " years, and" + age.days + " days old.";
    else if (age.years == 0 && age.months > 0 && age.days == 0)
      ageString = age.months + " months old.";
    else ageString = "Welcome to Earth! <br> It's first day on Earth!";

    return (document.getElementById("result").innerHTML = ageString);
  }
}
