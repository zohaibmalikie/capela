var months = {
	January: "01",
	February: "02",
	March: "03",
	April: "04",
	May: "05",
	June: "06",
	July: "07",
	August: "08",
	September: "09",
	October: "10",
	November: "11",
	December: "12",
};
var monthName = new Array();
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

function chat_order3(pid, pcls) {
	var container = $("#" + pid);
	var items = $("." + pcls);

	items.each(function (i) {
		// Convert the string in 'data-event-date' attribute to a more
		// standardized date format
		var BCDate = $(this).attr("data-event-date");
		/*console.log(BCDate);
        var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
		var standartDate = new Date(BCDate).getTime();
		$(this).attr("data-event-date", standartDate);
		// console.log(standartDate);
	});

	items
		.sort(function (a, b) {
			a = parseFloat($(a).attr("data-event-date"));
			b = parseFloat($(b).attr("data-event-date"));
			return a > b ? -1 : a < b ? 1 : 0;
		})
		.each(function () {
			container.append(this);
		});
}

function chat_order1() {
	var container = $("#postdiv");
	var items = $(".sortpost" + pcls);

	items.each(function (i) {
		// Convert the string in 'data-event-date' attribute to a more
		// standardized date format
		var BCDate = $(this).attr("data-event-date");
		/*console.log(BCDate);
        var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
		var standartDate = new Date(BCDate).getTime();
		$(this).attr("data-event-date", standartDate);
		// console.log(standartDate);
	});

	items
		.sort(function (a, b) {
			a = parseFloat($(a).attr("data-event-date"));
			b = parseFloat($(b).attr("data-event-date"));
			return a > b ? -1 : a < b ? 1 : 0;
		})
		.each(function () {
			container.append(this);
		});
}

var categoryDate_title = {};
var showhtml = "";
var showdiv = "";
var showVideo = "";
let latestPost = 1;
for (var category in mainData["vocoesData"]) {
	var specificCat = mainData["vocoesData"];
	var objec = specificCat[category];
	for (var getdays in objec) {
		console.log(objec[getdays])
		let d= objec[getdays].date.split(" ")
		d=d[d.length-1]
		console.log(d)
		var dayname = getdays;
		var postdateShow = getdays + "/" + months[category] + "/"+d;
		var postdateSort = d+"-" + months[category] + "-" + getdays;
		const date1 = new Date(postdateSort).getTime();
		const date2 = new Date().getTime();

		if (date1 < date2) {
			if (new Date(postdateSort).getMonth() == new Date().getMonth()) {
				if (new Date(postdateSort).getDate() <= new Date().getDate()) {
					showhtml += `<div class="d-flex CV-Video-Link-Post forHover sortpost myNewVideo" data-event-date="${postdateSort}">

            <div class="img_1">
                <a href="${objec[getdays].route}"><img src="${
						objec[getdays].img
					}" class="img-fluid" id="sideBarImage" alt="">
            </div>
            <div class="pl-2 ">
            
                <p class="add-mt-15-CV-Video mb-0">${
									objec[getdays].title.substr(0, 20) + "..."
								}</p>
                <p class="date date-text"><span
                        class="cal-icon fa fa-calendar date-text"></span> ${
													objec[getdays].date
												} </p>
                </a>
            </div>
            
            </div>`;
				}
			} else {
				showhtml += `<div class="d-flex CV-Video-Link-Post forHover sortpost myNewVideo" data-event-date="${postdateSort}">

                <div class="img_1">
                    <a href="${objec[getdays].route}"><img src="${
					objec[getdays].img
				}" class="img-fluid" id="sideBarImage" alt="">
                </div>
                <div class="pl-2 ">
                
                    <p class="add-mt-15-CV-Video mb-0">${
											objec[getdays].title.substr(0, 20) + "..."
										}</p>
                    <p class="date date-text"><span
                            class="cal-icon fa fa-calendar date-text"></span> ${
															objec[getdays].date
														} </p>
                    </a>
                </div>
                
                </div>`;
			}

			// for displaying Posts

			if (!objec[getdays].video == true) {
				showdiv += `
                <div class="Video-Post myClassVideo sortpost1" data-event-date="${postdateSort}  ">

                    <div class="row pt-2">
                    <div class="col-lg-4 col-md-4 col-sm-5 mt-3">
                        <img src="${objec[getdays].img}" class="img-fluid post-img" alt="">
                    </div>
                    
                    <div class="col-lg-8 col-md-8 col-sm-12 mt-3">
                        
                        
                        <div>
                            <p class=" title-17px">${objec[getdays].title}</p>
                        </div>
                        <div class="calender-div GBR ">
                            <p> <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                <i>${objec[getdays].date}</i>
                            </p>
                        </div>
                        <div class="border-1 "></div>
                        <div class="mt-3">
                            <p class="GB description">
                            ${objec[getdays].details}
                            </p>
                        </div>
                        <div class="mb-3">
                            <a href="${objec[getdays].route}">
                                <button type="button" class="btn-leia-mais">
                                    LEIA MAIS &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
                                    
                                </button>
                            </a>
                        </div>
                        
                        
                        
                    </div>
                </div>
                
                <div class="border-1"></div>
            </div>
                `;
			}

			// for displaying Video
			if (objec[getdays].video == true) {
				showVideo += `<div class="Video-Post myClassVideo1 sortpost2" data-event-date="${postdateSort} ">
                <div class="row pt-2 mb-5">
                    <div class="col-lg-4 col-md-4 col-sm-5 mt-3">
                        <img src="${objec[getdays].img}" class="img-fluid post-img" alt="">
                    </div>

                    <div class="col-lg-8 col-md-8 col-sm-12 mt-3">


                        <div>
                            <p class=" title-17px">${objec[getdays].title}</p>
                        </div>
                        <div class="calender-div GBR">
                            <p> <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                <i>${objec[getdays].date}</i>
                            </p>
                        </div>
                        <div class="border-1 "></div>
                        <div class="mt-3">
                            <p class="GB description">
                            ${objec[getdays].details}
                            </p>
                        </div>
                        <div class="">
                            <a href="${objec[getdays].route}">
                                <button type="button" class="video-logo-button">
                                       <img src="${host}/assets/img/Vocacoes/video-logo.png" class="img-fluid video-logo" alt="">

                                    </button>
                            </a>
                        </div>



                    </div>
                </div>


                <div class="border-1"></div>
                </div>`;
			}
		}
	}
}

document.getElementById("postdiv").innerHTML = showhtml;
document.getElementById("recentPost").innerHTML = showdiv;
// console.log(
//     showdiv
// );
// chat_order1();
// chat_order3("postdiv", "myNewVideo");
chat_order3("recentPost", "sortpost1");
var ul = $("#postdiv");
ul.children().each(function (i, div) {
	ul.prepend(div);
});
jQuery("#postdiv")
	.find(".CV-Video-Link-Post")
	.each(function (i) {
		if (i > 6) {
			jQuery(this).remove();
		}
	});
jQuery("#recentPost")
	.find(".myClassVideo")
	.each(function (i) {
		if (i >= 1) {
			jQuery(this).remove();
		}
	});

document.getElementById("recentVideo").innerHTML = showVideo;
chat_order3("recentVideo", "sortpost2");
jQuery("#recentVideo")
	.find(".myClassVideo1")
	.each(function (i) {
		if (i >= 1) {
			jQuery(this).remove();
		}
	});
