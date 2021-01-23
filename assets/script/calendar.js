'use strict';
// let dt = new Date('December 1, 2020 23:15:00');
let dt = new Date();
let cd = new Date();
console.log(dt.getMonth());
// import {mainData} from '../post-data-json'
// console.log(mainData)
let check = 0;

function renderDate() {
    let currentDate = ''
    let currentDate2 = ''
    // For Production

    if (document.location.pathname.slice(41).length == 5) {
        currentDate = document.location.pathname.slice(41).slice(0, 1)

    }
    if (document.location.pathname.slice(41).length == 6) {
        currentDate = document.location.pathname.slice(41).slice(0, 2)
        console.log(currentDate)
    }
    // For Development
    // if(document.location.pathname.slice(48).length == 5){
    //      currentDate=document.location.pathname.slice(48).slice(0,1)
    // }
    // if(document.location.pathname.slice(48).length == 6){
    //    currentDate=document.location.pathname.slice(48).slice(0,2)
    // }
    // if(document.location.pathname.slice(48).length == 6){
    //     currentDate2 = document.location.pathname.slice(48).slice(0,2)
    // }

    let dateString = new Date();

    dt.setDate(1);
    let day = dt.getDay();

    let endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    let prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();

    let today = new Date();
    var EnglishMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let months = [
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
        "Dezembro"
    ];

    document.getElementById("icalendarMonth").innerHTML = months[dt.getMonth()];
    // document.getElementById("icalendarDateStr").innerHTML = dateString.toDateString();

    let cells = "";
    let countDate = 0;

    for (let x = day; x > 0; x--) {
        cells += "<div class='icalendar__prev-date'>" + (prevDate - x + 1) + "</div>";
    }
    for (let i = 1; i <= endDate; i++) {
        let i2 = i + "a"
        if (i == currentDate && months[dt.getMonth()] == 'Setembro' || i2 == currentDate2) {
            cells += "<a class='icalendar__today'>" + i + "</a>";
        } else {
            setTimeout(() => {


            })
            if (months[dt.getMonth()] == 'Janeiro') {
                console.log('From Calendar--------------')
                console.log(months[dt.getMonth()]);
                console.log('From Calendar--------------')
                if (check == 0) {
                    setTimeout(() => {
                        jQuery(".icalendar__prev").click();
                        jQuery(".icalendar__next").click();

                    }, 2000)
                    check = 1;
                }
                if (mainData.santoData.January[i]) {
                    cells += `<a class='a-date' href="${host}/Dia-de-santo/Dia-January/Dia-` + i + `.html">` + i + `</a>`;
                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }


                // document.getElementsByClassName('a-date').setAttribute('href',`../Leitura-Orante/leitura-orante-`+i+`.html`)
            }
           else if (months[dt.getMonth()] == 'Dezembro') {
                console.log('From Calendar--------------')
                console.log(months[dt.getMonth()]);
                console.log('From Calendar--------------')
                if (check == 0) {
                    setTimeout(() => {
                        jQuery(".icalendar__prev").click();
                        jQuery(".icalendar__next").click();

                    }, 2000)
                    check = 1;
                }
                if (mainData.santoData.December[i]) {
                    cells += `<a class='a-date' href="${host}/Dia-de-santo/Dia-December/Dia-` + i + `.html">` + i + `</a>`;
                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }


                // document.getElementsByClassName('a-date').setAttribute('href',`../Leitura-Orante/leitura-orante-`+i+`.html`)
            } else if (months[dt.getMonth()] == "Setembro") {

                if (mainData.santoData.September[i]) {
                    cells += `<a class='a-date' href="${host}/Dia-de-santo/Dia-September/Dia-` + i + `.html">` + i + `</a>`;
                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }

            } else if (months[dt.getMonth()] == "Outubro") {


                if (mainData.santoData.October[i]) {
                    cells += `<a class='a-date' href="../Dia-October/Dia-` + i + `.html">` + i + `</a>`;

                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }


            } else if (months[dt.getMonth()] == "Novembro") {

                if (mainData.santoData.November[i]) {
                    cells += `<a class='a-date' href="${host}/Dia-de-santo/Dia-November/Dia-` + i + `.html">` + i + `</a>`;
                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }

            } else if (months[dt.getMonth()] == "Dezembro") {

                if (mainData.santoData.December[i]) {
                    cells += `<a class='a-date' href="${host}/Dia-de-santo/Dia-December/Dia-` + i + `.html">` + i + `</a>`;
                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }

            } 
            else if (months[dt.getMonth()] == "Janeiro") {

                if (mainData.santoData.January[i]) {
                    cells += `<a class='a-date' href="${host}/Dia-de-santo/Dia-January/Dia-` + i + `.html">` + i + `</a>`;
                } else {
                    cells += `<a class='a-date' style="color:#bbbbbb !important">` + i + `</a>`;
                }

            }
            // Copy the Latest Month of Calender As Above
            // Repalce the Name Of Months With New One (At Three Places)
            else {
                cells += `<a class='a-date'>` + i + `</a>`;
            }



        }

        countDate = i;
    }

    let reservedDateCells = countDate + day + 1;
    for (let j1 = reservedDateCells, j2 = 1; j1 <= 42; j1++, j2++) {
        cells += "<div class='icalendar__next-date'>" + j2 + "</div>";
    }

    document.getElementsByClassName("icalendar__days")[0].innerHTML = cells;

}

renderDate();


function moveDate(param) {
    if (param === 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (param === 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }

    renderDate();
}
const click = () => {
    console.log('as')
}