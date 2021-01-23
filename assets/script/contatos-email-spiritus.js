let name = document.getElementById("name");
let email = document.getElementById("email");
let telefone = document.getElementById("whatsapp");
let subject = document.getElementById("subject");
let mainMsg = document.getElementById("mainMsg");



if (window.innerWidth <= 768) {
    name.placeholder = 'Name'
    email.placeholder = 'Email'
    telefone.placeholder = 'Telefone'
    subject.placeholder = 'Assunto'

}
function changePlaceholder() {

    if (window.innerWidth <= 768) {
        name.placeholder = 'Name'
        email.placeholder = 'Email'
        telefone.placeholder = 'Telefone'
        subject.placeholder = 'Assunto'

    }
    if (window.innerWidth > 768) {
        name.placeholder = ''
        email.placeholder = ''
        whatsapp.placeholder = ''
        subject.placeholder = ''

    }
}





form_Fields.onsubmit = async (e) => {
    e.preventDefault();

    let formHeading = document.getElementById("formHeading");
    // let sendTo = "galante@thunderbees.com";
    let sendTo = "sebprovusul@gmail.com";
    // let sendTo = "saadee7223@gmail.com";



    let obj = {
        html: ` <b> Name : </b> <span> ${name.value} </span> 
        <br> <b> Email : </b> <span> ${email.value} </span> 
        <br> <b> Telephone Number : </b> <span> ${telefone.value} </span> 
        <br> <b> Subject : </b> <span> ${subject.value} </span> 
        <br> <b> Message : </b> <p>${mainMsg.value}</p>`,
        sendTo: sendTo,
    };

    let data = JSON.stringify(obj);

    let response = await fetch(
        "https://capela-mail.herokuapp.com/send_mail",
        {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: data,
        }
    );

    let result = await response.json();

    if (result == "Mail Sent.") {
        form_Fields.style.display = "none";
        formHeading.style.display = "none";
        let element = document.createElement("h3");
        let textNode = document.createTextNode("O correio foi enviado.");
        element.appendChild(textNode);
        element.classList.add("mail_sent");
        form_outer.append(element);
    }
};