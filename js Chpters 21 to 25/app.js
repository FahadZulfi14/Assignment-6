// -----------------Queston NO 1---------------

// var firstName = prompt("Enter your first Name:");
// var lastName = prompt("Enter your first Name:");
// var fullName = firstName +" "+ lastName;

// document.write("Welcome  " + fullName );



// -----------------Queston NO 2---------------
// var firstName = prompt("Enter your fevorite Moble Name:");
// var chr = firstName.toUpperCase();
// document.write("<h1>" + "My Favorte mobile is " + chr + "</h1>");

// var len = chr.length;
// document.write("<h1>"+"length of String " + len + "</h1>");




// -----------------Queston NO 3---------------

// var name = "pakistan";
// var nam = name.toUpperCase();
// document.write("<h1>" + nam + "</h1>")

// var length=name.indexOf("s");
// document.write("<h1>"+"index of 'n' is  " + length + "</h1>");





// -----------------Queston NO 4---------------

// var name = "pakistan";
// var nam = name.toUpperCase();
// document.write("<h1>" + nam + "</h1>")

// var length=name.lastIndexOf("n");
// document.write("<h1>"+"Last index of 'n' is  " + length + "</h1>");




// -----------------Queston NO 5---------------\\

// var name = "pakistan";
// var nam = name.toUpperCase();
// document.write("<h1>" + nam + "</h1>")

// var length=name.charAt(3);
// document.write("<h1>"+" Character at index of 3 : " + length + "</h1>");


// -----------------Queston NO 6---------------\\

// var firstName = prompt("Enter your first Name:");
// var lastName = prompt("Enter your first Name:");
// var fullName = firstName.concat(' ' + lastName);

// document.write("Welcome  " + fullName );





// -----------------Queston NO 7---------------\\

// var city = "islambad";
// var cityUpdat = city.replace("islambad","Hyderabad");

// document.write("Updat City is ;  " + cityUpdat);





// -----------------Queston NO 8---------------\\
// var message = "Ali and Sami are best friends.They play cricket and football together.";

// var result = message.replaceAll("and","&");

// document.write(result);





// -----------------Queston NO 9---------------\\

// var string = "472";
// document.write(" Type of value is string ;  " + string + "<br \>");

// var num = parseInt(string);

// document.write(" Type of value is Number ;  " + num + "<br \>");




// -----------------Queston NO 10---------------\\

// var input=prompt("Enter your fevorite fruit Name:" )
// document.write("<h3>"+ input +"</h3>");

// var result = input.toUpperCase();

// document.write("<h2>"+ result +"</h2>");





// -----------------Queston NO 11---------------\\

// var input=prompt("Enter your fevorite fruit Name:" )

// var concat = input[0].toUpperCase();
// var result=concat+input.slice(1);

// document.write("<h2>"+ result +"</h2>");




// -----------------Queston NO 12---------------\\
// var num = 35.36;
// document.write("<h3>Number: " + num +"</h3>");

// var string = num.toString();

// var result= string.replace(".","");

// document.write("<h2>Result: "+ result +"</h2>");
// console.log(result);



// -----------------Queston NO 13---------------\\

// var username = prompt("Enter username: ");


// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//   alert("Invalid username. Please enter a valid username without [@ . , !] symbols.");
// } else {
//   alert("Username is valid.");
// }




// -----------------Queston NO 14---------------\\

// var input = prompt("What do you Want to Order sir ? ")

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var items= input.toLowerCase();

// var conditon= false;

// for (var i = 0; i < arr.length; i++){
//     if (arr[i] === items){
//     conditon = true;
//     break;
// }
// }

// if (conditon) {
//     document.write("<h2>"+ input + " is available in our bakery </h2>");
//   } else {
//     document.write("<h2>"+ input + " is NOt available ! </h2>");
//   };





// -----------------Queston NO 15---------------\\
// var input= prompt("Enter Your Pasword !");

// if (input.length == 6 && input[0] == ){
//     document.write("<h2> valid password ! </h2>");

// }





// -----------------Queston NO 16---------------\\

// var university = "University of Karachi";
// var universityArray = university.split("");
// for (var i =0; i < universityArray.length; i++){

//     document.write("<h2>"+ universityArray[i] +"</h2>");
// }
// console.log(universityArray[i]);





// -----------------Queston NO 17---------------\\
// var input = prompt("Enter your String");
// var result = input.charAt(input.length-1);

//     document.write("<h2>"+ result  +"</h2>");







// -----------------Queston NO 18---------------\\
// var str = "The quick brown fox jumps over the lazy dog";
// var word = "the";

// var lowerCaseStr = str.toLowerCase();

// var words = lowerCaseStr.split(" ");

// var count = 0;

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === word) {
//         count++;
//     }

// }

// document.write("The are  " + count + "  occurrences of word " + word);
