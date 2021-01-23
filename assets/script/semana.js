let previousWeekDate = new Date(lastWeek);
let showPrevious = "";

let dayTerco1 = "";
var a1 = new Date(previousWeekDate);
let tercoDay1 = previousWeekDate.getDate();
// console.log(tercoDay1);
var days1 = new Array(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
var currentDay1 = days[previousWeekDate.getDay()];
var months1 = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

let currentMonth1 = months1[previousWeekDate.getMonth()];
let tercoDate1 = tercoDay1 + " de " + currentMonth1 + " de " + 2020;

if (currentDay == "Friday" || currentDay == "Tuesday") {
    dayTerco1 = "Dolorosos";
}
if (currentDay == "Monday" || currentDay == "Saturday") {
    dayTerco1 = "Gozozos";
}
if (currentDay == "Wednesday" || currentDay == "Sunday") {
    dayTerco1 = "Gloriosos";
}
if (currentDay == "Thursday") {
    dayTerco1 = "Luminosos";
}

let tercoHTML1 = ` <div class="d-flex CV-Video-Link-Post forHover sortpost tercoData">

<div class="img_1">
    <a href="${tercoData[dayTerco1].route}"><img src="${tercoData[dayTerco1].img}" class="img-fluid" id="sideBarImage" alt="">
</div>
<div class="pl-2 ">

    <p class="add-mt-15-CV-Video mb-0">${tercoData[dayTerco1].title}</p>
    <p class="date date-text"><i class="fa fa-calendar" aria-hidden="true"></i><span
            class="cal-icon fa fa-calendar date-text"></span> ${tercoDate1} </p>
    </a>
</div>

</div>`;

//  console.log(previousWeekDate)
for (var category in mainData) {
    // category name
    var cat = mainData[category];

    var categoryname = category;
    if (categoryname == "santoData") {
        continue;
    }
    for (var getmonth in cat) {
        // month name
        var monthname = getmonth;
        var bymonth = cat[getmonth];
        var catarr = {};
        var counter = 1;

        for (var getdays in bymonth) {
            var dayname = getdays;
            if (Array.isArray(bymonth[getdays])) {
                for (var arrCat in bymonth[getdays]) {
                    var postTitle = bymonth[getdays][arrCat].title;
                    var postImage = bymonth[getdays][arrCat].img;
                    var postRoute = bymonth[getdays][arrCat].route;
                    var postDetails = bymonth[getdays][arrCat].details;
                    var makedate = dayname + "/" + months[monthname] + "/" + "2020";
                    var postDate = bymonth[getdays][arrCat].date;
                    console.log("***********************");
                    console.log(bymonth[getdays][arrCat]);
                }
            } else {
                var postTitle = bymonth[getdays].title;
                var postImage = bymonth[getdays].img;
                var postRoute = bymonth[getdays].route;
                var postDetails = bymonth[getdays].details;
                var makedate = dayname + "/" + months[monthname] + "/" + "2020";
                var postDate = bymonth[getdays].date;
            }
            var chkdate = "2020-" + months[monthname] + "-" + dayname;
            var today = new Date();
            var lastWeek = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate() - 7
            );

            var date1 = new Date();
            chkdate = new Date(chkdate);

            if (chkdate < previousWeekDate) {
                // console.log("there " + date1 + "====" + chkdate);
                catarr[makedate] = {
                    title: postTitle,
                    img: postImage,
                    date: postDate,
                    route: postRoute,
                    details: postDetails,
                };

                let postTitleShort;
                if (postTitle.length >= 28) {
                    postTitleShort = postTitle.substr(0, 26) + "...";
                } else {
                    postTitleShort = postTitle;
                }
                var postdateSort = "2020-" + months[monthname] + "-" + dayname;

                // console.log(mypost)
                showPrevious +=
                    //

                    showPrevious = `<div class=" CV-Video-Link-Post d-flex  sortpost ${categoryname} forHover" data-event-date="${postdateSort}">

<div class="img_1">
    <a href="${postRoute}"><img src="${postImage}" class="img-fluid" id="sideBarImage" alt="">
</div>
<div class="pl-2 ">

    <p class="add-mt-15-CV-Video mb-0">${postTitleShort}</p>
    <p class="date date-text"><i class="fa fa-calendar" aria-hidden="true"></i><span
            class="cal-icon fa fa-calendar date-text"></span> ${postDate} </p>
    </a>
</div>

</div>`;

                counter++;
            }
        }
    }
}
showPrevious += tercoHTML1;

// console.log(showhtml);
window.setTimeout(function() {
    jQuery("#previousWeek").html(showPrevious);
    // document.getElementById('destaquesPortion').innerHTML +=
    // showhtml2 += tercoHTML12

    for (var category in mainData) {
        jQuery("." + category)
            .not(":last")
            .remove();
        jQuery("." + category + "1")
            .not(":last")
            .remove();
    }

    chat_order("previousPost", "sortpost");
    jQuery("#previousPost")
        .find(".CV-Video-Link-Post")
        .each(function(i) {
            if (i > 6) {
                jQuery(this).remove();
            }
        });
}, 1000);

function chat_order(pid, pcls) {
    var container = $("#" + pid);
    var items = $("." + pcls);

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

    items
        .sort(function(a, b) {
            a = parseFloat($(a).attr("data-event-date"));
            b = parseFloat($(b).attr("data-event-date"));
            return a > b ? -1 : a < b ? 1 : 0;
        })
        .each(function() {
            container.append(this);
        });
}