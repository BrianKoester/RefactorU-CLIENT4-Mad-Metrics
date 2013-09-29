$(document).ready(function(){


//initialize variables
var currentScrollAmount;
var grandTotalScrolled = 0;
var differenceScrolled = 0;
var maxScrollTemp = 0;
var documentHeight;
var scrollPercent;
var PageTime = 0;
var realPageTime = 0;
var previousScroll = 0;
var scrollArray = [0,0];
var startTime = 0;
var realSignUpTime = 0;
var SignUpTime = 0;


  	startTime = event.timeStamp;
  	console.log("start time: ", startTime);


	//percentage of page viewed
	$(window).scroll(function() {
 
		//To get the amount the user has scrolled
		currentScrollAmount = $(window).scrollTop();
		console.log("currentScrollAmount ", currentScrollAmount);
		scrollArray.push(currentScrollAmount);

		if (currentScrollAmount > maxScrollTemp) {
			maxScrollTemp = currentScrollAmount;
			}

			previousScroll = scrollArray[scrollArray.length - 2];
			console.log("previous scroll ", previousScroll);
			console.log("maxScrollTemp ", maxScrollTemp);
			differenceScrolled = Math.abs(previousScroll - currentScrollAmount);
			console.log("differenceScrolled ", differenceScrolled);
			grandTotalScrolled = grandTotalScrolled + differenceScrolled;
	

			console.log("grandTotalScrolled ", grandTotalScrolled);
	

		//To get the height of the page
		documentHeight = $(document).height();
		console.log("height:", documentHeight)
		console.log("maxscrolltemp:", maxScrollTemp)
		//To get the percentage of the page height the user has scrolled
		//scrollPercent = (currentScrollAmount / documentHeight) * 100;
		
		//Added this Monday evening to calculate the maximum % scrolled too - not sure if needed 
		scrollPercect = Math.round((maxScrollTemp / documentHeight) * 100); 
		console.log("scroll percent:", scrollPercect)
		console.log(scrollPercent);
	});

	//tracking time until SignUp button is clicked
	$('#signup').on('click', function() {
  		SignUpTime = event.timeStamp;
  		realSignUpTime = (SignUpTime - startTime)/1000;
	});



	//tracking time until Metrics button is clicked
	$('#button').on('click', function() {
  		PageTime = event.timeStamp;
  		realPageTime = (PageTime - startTime)/1000;
	});

//time spent in each section of page
//function is executed at the correct time - when moving between sections - but error "object has not method apply"

// var timeEnterSection = function(section){
// 	//$(section).mouseenter;
// 	return event.timeStamp;
// 	console.log(timeEnterSection);


// 	var timeLeaveSection = function(section){
// 		//var timeOutSection = $(section).mouseleave; 
// 		//return timeOutSection;
// 		return event.timeStamp;
// 		console.log(timeLeaveSection);
		

// 		var timeSpentSection = function(section){
// 			var timeSpent= timeEnterSection(section) - timeLeaveSection(section);
// 			return timeSpent;
// 			console.log("time spent in section is", timeSpentSection());
// 		}
// 	}
// 	};


// var timeSpentSection1 = $('#section1').on('mouseenter',(timeEnterSection('#section1')));
// var timeSpentSection1 = $('#section2').on('mouseenter',(timeEnterSection('#section2')));
// var timeSpentSection1 = $('#section3').on('mouseenter',(timeEnterSection('#section3')));
// Commented out and nested functions above 
// $('#section1').on('mouseenter',(timeLeaveSection('#section1')));
//$('#section2').on('mouseleave',(timeLeaveSection('#section2')));
//$('#section3').on('mouseleave',(timeLeaveSection('#section3')));
//$('#section1').on('mouseleave',(timeSpentSection('#section1')));
//console.log(timeSpentSection('#section1'));
//console.log(timeSpentSection('#section2'));


	//display metrics info
	$('#button').on('click', function() {
  		alert("Percentage of page scrolled: " + scrollPercect + "%" + "\n" +
		"Total distance scrolled: " + grandTotalScrolled + " pixels" + "\n" +
		"Time before clicking Sign Up: " + realSignUpTime + " secs" + "\n" +
		"Time spent on page: " + realPageTime + " secs" + "\n" +
		"Time spent on each section of the page: - still working on this");
	});

});