

form_Fields.onsubmit = async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let mainMsg = document.getElementById("mainMsg").value
    let sendTo;


    if (state.toUpperCase() == "RS" || state.toUpperCase() == "PR" || state.toUpperCase() == "MT" || state.toUpperCase() == "AC" || state.toUpperCase() == "AM" || state.toUpperCase() == "AP" ||
        state.toUpperCase() == "PI") {
        console.log('sd')
        // sendTo = "teste@thunderbees.com"
        sendTo = "armelinda.col@gmail.com"

    } else if (state.toUpperCase() == "SC" || state.toUpperCase() == "MS" || state.toUpperCase() == "RO" || state.toUpperCase() == "PA" || state.toUpperCase() == "RR" || state.toUpperCase() == "PB" ||
        state.toUpperCase() == "CE") {
        sendTo = "martarnhold@gmail.com"
        // sendTo = "galante@thunderbees.com"
    }
    else if (state.toUpperCase() == "SP" || state.toUpperCase() == "MG" || state.toUpperCase() == "RJ" || state.toUpperCase() == "ES" || state.toUpperCase() == "AL" || state.toUpperCase() == "MA" ||
        state.toUpperCase() == "CE") {
        sendTo = "monika.kopf@ssps.org.br"
    }
    else if (state.toUpperCase() == "TO" || state.toUpperCase() == "DF" || state.toUpperCase() == "GO" || state.toUpperCase() == "BA" || state.toUpperCase() == "SE" || state.toUpperCase() == "PE" ||
        state.toUpperCase() == "RN") {
        sendTo = "terecol@gmail.com"
    }
    else if (state.toUpperCase() != "SC" || state.toUpperCase() != "MS" || state.toUpperCase() != "RO" || state.toUpperCase() != "PA" || state.toUpperCase() != "RR" || state.toUpperCase() != "PB" ||
        state.toUpperCase() != "CE" || state.toUpperCase() != "SP" || state.toUpperCase() != "MG" || state.toUpperCase() != "RJ" || state.toUpperCase() != "ES" || state.toUpperCase() != "AL" || state.toUpperCase() != "MA" ||
        state.toUpperCase() != "CE" || state.toUpperCase() != "TO" || state.toUpperCase() != "DF" || state.toUpperCase() != "GO" || state.toUpperCase() != "BA" || state.toUpperCase() != "SE" || state.toUpperCase() != "PE" ||
        state.toUpperCase() != "RN") {
        alert("Escolha o estado correto e reenvie.")
    }




    // let obj = { 
    //   "name": name,
    // "email": email,
    // "city": city,
    // "state": state,
    // "mainMsg": mainMsg, 
    // "address":address,
    // "sendTo": sendTo,

    // }
    let obj = {
        html: ` <b> Name : </b> <span> ${name} </span>
              <br> <b> Email : </b> <span> ${email} </span>
              <br> <b> Address : </b> <span> ${address} </span>
              <br> <b> City : </b> <span> ${city} </span>
              <br> <b> State : </b> <span> ${state} </span>
              <br> <b> Message : </b> <p>${mainMsg}</p>`,
        sendTo: sendTo,
    };
    let data = JSON.stringify(obj)


    let response = await fetch('https://capela-mail.herokuapp.com/send_mail', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: data
    });
    let result = await response.json();
    console.log(result)

    if (result === "Mail Sent.") {
        form_Fields.style.display = "none"
        // formHeading.style.display = "none"
        line.style.display = "none"
        let element = document.createElement("h3")
        let textNode = document.createTextNode("O correio foi enviado.")
        element.appendChild(textNode)
        element.classList.add("mail_sent")
        form_outer.append(element)
        console.log('test')
    }

};
