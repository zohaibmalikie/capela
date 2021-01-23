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

function chat_order3(pid, pcls) {
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

function chat_order1() {
    var container = $("#postdiv");
    var items = $(".sortpost" + pcls);

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

// By Tauqeer
// var showhtml = "";
// var showdiv = "";
// let missaoPostsArr = [];
// var months = new Array();
// months[0] = "January";
// months[1] = "February";
// months[2] = "March";
// months[3] = "April";
// months[4] = "May";
// months[5] = "June";
// months[6] = "July";
// months[7] = "August";
// months[8] = "September";
// months[9] = "October";
// months[10] = "November";
// months[11] = "December";

// var d = new Date();
// var n = months[d.getMonth()];
// console.log(mainData.missaoData);
// Object.keys(mainData.missaoData).map((month) => {
//     // console.log(month)
//     Object.keys(mainData.missaoData[month]).map((post) => {
//         // console.log(mainData.missaoData[month][post])
//         if (month == n) {
//             // console.log("sadsada");
//             // mainData.missaoData[month][post].date.split(' ')[0] <= new Date().getDate()

//             if (Array.isArray(mainData.missaoData[month][post]) == true) {
//                 mainData.missaoData[month][post].map((subPost) => {
//                     if (subPost.date.split(" ")[0] <= new Date().getDate()) {
//                         missaoPostsArr.push(subPost);
//                     }
//                 });
//             } else {
//                 if (
//                     mainData.missaoData[month][post].date.split(" ")[0] <=
//                     new Date().getDate()
//                 ) {
//                     // console.log(mainData.missaoData[month][post]);
//                     missaoPostsArr.push(mainData.missaoData[month][post]);
//                 }
//             }
//         } else {
//             if (Array.isArray(mainData.missaoData[month][post]) == true) {
//                 mainData.missaoData[month][post].map((subPost) => {
//                     // missaoPostsArr.push(subPost);
//                 });
//             } else {
//                 missaoPostsArr.push(mainData.missaoData[month][post]);
//             }
//         }
//     });
//     // console.log('--------------------------*****************************')
// });

// missaoPostsArr.reverse();
// console.log(missaoPostsArr)
// let sortedMissao=[];
// for(let i=0;i<=6;i++){
//     sortedMissao.push(missaoPostsArr[i]);
// }
// console.log(sortedMissao)
// sortedMissao.reverse()


// sortedMissao.map((item,index)=>{

//         console.log(index);
//         showhtml += `<div class="d-flex CV-Video-Link-Post sortpost" data-event-date="${postdateSort}">

//                 <div class="img_1">
//                     <a href="${item.route}"><img src="${item.img}" class="img-fluid" id="sideBarImage" alt="">
//                 </div>
//                 <div class="pl-2 ">
                
//                     <p class="add-mt-15-CV-Video mb-0">${item.title.substr(0, 20) + '...'}</p>
      
//                     <p class="date date-text"><span
//                             class="cal-icon fa fa-calendar date-text"></span> ${item.date} </p>
//                     </a>
//                 </div>
                
//                 </div>`; 
    
// })


// End Here Tauqeer

var categoryDate_title = {};
var showhtml = "";
var showdiv = "";
var showVideo = "";
let latestPost = 1;
for (var category in mainData['missaoData']) {
    var specificCat = mainData['missaoData'];
    var objec = specificCat[category];
    for (var getdays in objec) {
        let d= objec[getdays].date.split(" ")
		d=d[d.length-1]
        // console.log(d.length)
		// console.log("dara"+d)
		console.log(objec[getdays].date.split(" "))
		console.log('------------------')
        var dayname = getdays;
        var postdateShow = getdays + "/" + months[category] + "/"+d;
        var postdateSort = d+"-" + months[category] + "-" + getdays;
        const date1 = new Date(postdateSort).getTime();
        const date2 = new Date().getTime();

        if (date1 < date2) {


            showhtml += `<div class="d-flex CV-Video-Link-Post forHover sortpost myNewVideo" data-event-date="${postdateSort}">

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


            //     // for displaying Posts
            //     if (!objec[getdays].video == true) {
            //         showdiv += '<div class="Video-Post myClassVideo sortpost1" data-event-date="' + postdateSort + '">\
            //     <div class="Video-Thumbnail">\
            //       <img src="'+ objec[getdays].img + '" alt="" class="Video-Image" id="arth-img" />\
            //     </div>\
            //     <div class="Video-Description">\
            //       <p class="title">'+ objec[getdays].title + '\
            //       </p>\
            //       <p class="date">\
            //         <span class="cal-icon fa fa-calendar"></span>\
            //         <i><span style="color: #666666;">\
            //             <span style="color: #666666;" id="artigo-date"></span>\
            //             '+ objec[getdays].date + '\
            //           </span></i>\
            //       </p>\
            //       <p class="description" id="decription">\
            //         '+ objec[getdays].details + '\
            //       </p>\
            //       <a href='+ objec[getdays].route + '>\
            //         <button class="btn-leia-mais">\
            //           LEIA MAIS\
            //           <span class="right-arrow">\
            //             <i class="fa fa-angle-right">\
            //               </i>\
            //           </span></button>\
            //           </a>\
            //     </div>\
            //   </div>';
            //     }


            // for displaying Video
            if (objec[getdays].video == true) {
                console.log('Console from Missao Main')
                console.log(objec);

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
                                       <img src="${host}/assets/img/Missao/video-logo.png" class="img-fluid video-logo" alt="">

                                    </button>
                            </a>
                        </div>



                    </div>
                </div>


                <div class="border-1"></div>
                </div>`
            }
            // if (objec[getdays].video == true) {

            //     showVideo += '<div class="Video-Post myClassVideo1 sortpost2" data-event-date="' + postdateSort + '">\
            // <div class="Video-Thumbnail">\
            //   <img src="'+ objec[getdays].img + '" alt="" class="Video-Image" id="arth-img" />\
            // </div>\
            // <div class="Video-Description">\
            //   <p class="title">'+ objec[getdays].title + '\
            //   </p>\
            //   <p class="date">\
            //     <span class="cal-icon fa fa-calendar"></span>\
            //     <i><span style="color: #666666;">\
            //         <span style="color: #666666;" id="artigo-date"></span>\
            //         '+ objec[getdays].date + '\
            //       </span></i>\
            //   </p>\
            //   <p class="description" id="decription">\
            //     '+ objec[getdays].details + '\
            //   </p>\
            //   <a href='+ objec[getdays].route + ' id="video1">\
            //   <button style="width: 28%; border: 0; height: 40px; background-color: #fff;">\
            // <img src="./img/video-logo.png" style="width: 130px;" alt="">\
            // <!-- <span style="position: relative; top: -33px;">\
            //   VIDEO\
            // </span> -->\
            // </button></a>\
            //           </div>\
            //           </div>';
            // }

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
var ul = $('#postdiv');
ul.children().each(function(i, div) { ul.prepend(div) });
jQuery("#postdiv").find(".CV-Video-Link-Post").each(function(i) {
    if (i > 6) {
        jQuery(this).remove();
    }
});
jQuery("#recentPost").find(".myClassVideo").each(function(i) {
    if (i >= 1) {
        jQuery(this).remove();
    }
});


document.getElementById("recentVideo").innerHTML = showVideo;
chat_order3("recentVideo", "sortpost2");
jQuery("#recentVideo").find(".myClassVideo1").each(function(i) {
    if (i >= 1) {
        jQuery(this).remove();
    }
});