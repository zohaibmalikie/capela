arr.reverse();
for (date in arr) {
  for (cateryLayout in categoryDate_title) {
    var mypost = categoryDate_title[cateryLayout][arr[date]];

    if (mypost) {
      // console.log(mypost)

      //console.log(mypost)
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;

      if (cateryLayout == "santoData") {
        var d1 = new Date(today);
        var d2 = new Date(mypost.date);

        var flag = d1.getTime() === d2.getTime();
        if (flag == false) {
          continue;
        }
        //console.log();
      }

      document.getElementById("destaquesMain").innerHTML +=
        //   `<div class="Video-Post ${cateryLayout}1">
        //       <div class="Video-Thumbnail">
        //         <img src="${mypost.img}" alt="" class="Video-Image" />
        //       </div>
        //       <div class="Video-Description">
        //         <a href="${mypost.route}">
        //           <h5 style="color: #666666; font-family: Gotham Medium;">${mypost.title}</h5>
        //           <p class="date-text" style="color: #666666; font-family: Gotham Book italic;">
        //             <span class="cal-icon fa fa-calendar date-text"></span>
        //             <i>
        //               ${mypost.date}

        //             </i>
        //           </p>
        //           <div class="bottom-line"></div>

        //           <p class="description">
        //             ${mypost.details}
        //           </p>
        //           <button class="btn-leia-mais">
        //             <span>LEIA MAIS </span>

        //             <span class="right-arrow">
        //               <i class="fa fa-angle-right"></i>
        //         </a> </span>
        //         </button>
        //       </div>
        //     </div>
        //       `;

        `<div class="${cateryLayout}1">


          <div class="row pt-2">
              <div class="col-lg-4 col-md-4 col-sm-5 mt-3">
                  <img src="././assets/img/01 Orações Mis.jpg" class="img-fluid post-img"
                      alt="">
              </div>

              <div class="col-lg-8 col-md-8 col-sm-12 mt-3" id="home-post-text">

                  
                      <div>
                          <h5 class="h5 title GM">${mypost.title}</h5>
                      </div>
                      <div class="calender-div GBR pt-1">
                          <p> <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                              <i>  ${mypost.date}</i>
                          </p>
                      </div>
                      <div class="border-1 "></div>
                      <div class="mt-2">
                          <p class="GB description">   ${mypost.details} </p>
                      </div>
                      <div class="mb-3">
                          <a href="${mypost.route}">
                              <button type="button" class="btn-leia-mais">
                                  LEIA MAIS &nbsp;&nbsp;&nbsp;<i class="fa fa-angle-right"
                                      aria-hidden="true"></i>

                              </button>
                          </a>
                      </div>

                

              </div>
          </div>
          <div class="border-1 pt-2"></div>
      </div>`;
    }
    $("." + cateryLayout + "1")
      .not(":last")
      .remove();
  }
}
