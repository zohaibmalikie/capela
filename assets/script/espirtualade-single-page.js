var months = {
    'January': '01',
    'February': '02',
    'March': '03',
    'April': '04',
    'May': '05',
    'June': '06',
    'July': '07',
    'August': '08',
    'September': '09',
    'October': '10',
    'November': '11',
    'December': '12'
}

function chat_order() {
    var container = $("#postdiv");
    var items = $(".sortpost");

    items.each(function(i) {
        // Convert the string in 'data-event-date' attribute to a more
        // standardized date format
        var BCDate = $(this).attr("data-event-date");
        /*console.log(BCDate);
        var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
        var standartDate = new Date(BCDate).getTime();
        $(this).attr("data-event-date", standartDate);
        // console.log(standartDate);
    });


    items.sort(function(a, b) {
        a = parseFloat($(a).attr("data-event-date"));
        b = parseFloat($(b).attr("data-event-date"));
        return a > b ? -1 : a < b ? 1 : 0;
    }).each(function() {
        container.prepend(this);
    });

}
var categoryDate_title = {};
var showhtml = "";
let latestPost = 1;
for (var category in mainData['espirtualData']) {
    var specificCat = mainData['espirtualData'];
    var objec = specificCat[category];
    for (var getdays in objec) {
		let d= objec[getdays].date.split(" ")
		d=d[d.length-1]
		console.log(d)
		var dayname = getdays;
		var postdateShow = getdays + "/" + months[category] + "/"+d;
		var postdateSort = d+"-" + months[category] + "-" + getdays;
        const date1 = new Date(postdateSort).getTime();
        const date2 = new Date().getTime();
        if (date1 < date2) {
            showhtml += `<div class="d-flex CV-Video-Link-Post sortpost" data-event-date="${postdateSort}">

        <div class="img_1">
            <a href="${objec[getdays].route}"><img src="${objec[getdays].img}" class="img-fluid" id="sideBarImage" alt="">
        </div>
        <div class="pl-2 ">
        
            <p class="add-mt-15-CV-Video mb-0">${objec[getdays].title.substr(0, 20) + '...'}</p>
            <p class="date date-text"><span
                    class="cal-icon fa fa-calendar date-text"></span> ${objec[getdays].date} </p>
            </a>
        </div>
        
        </div>`;
            // showhtml += '<div class="CV-Video-Link-Post sortpost" data-event-date="' + postdateSort + '">\
            //   <a href='+ objec[getdays].route + '>\
            //   <img src="'+ objec[getdays].img + '" alt="" class="thubmailVideo-Image" />\
            //   <p class="add-mt-15-CV-Video GM" style="font-size: 13px; font-family:">\
            //   '+ objec[getdays].title.substr(0, 20) + '...' + '\
            //   </p>\
            //   <p class="date date-text" style="font-size: 11px; font-family:Gotham-BI">\
            //  <span class="cal-icon fa fa-calendar date-text"></span> '+ objec[getdays].date + ' \
            //   </p>\
            //   </a>\
            //   </div>';
        }

    }

}
document.getElementById("postdiv").innerHTML = showhtml;
chat_order();
var ul = $('#postdiv');
ul.children().each(function(i, div) { ul.prepend(div) });
jQuery("#postdiv").find(".CV-Video-Link-Post").each(function(i) {
    if (i > 6) {
        jQuery(this).remove();
    }
});