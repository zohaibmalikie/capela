
let name = document.getElementById("name");
let email = document.getElementById("email");
let whatsapp = document.getElementById("whatsapp");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let dob = document.getElementById("dob");
let profession = document.getElementById("profession");
let mainMsg = document.getElementById("mainMsg");


if (window.innerWidth <= 768) {
  name.placeholder = 'Name'
  email.placeholder = 'Email'
  whatsapp.placeholder = 'Whatsapp'
  address.placeholder = 'Endereço'
  city.placeholder = 'Cidade'
  state.placeholder = 'Estado'
  zip.placeholder = 'CEP'
  profession.placeholder = 'Profissão'
}
function changePlaceholder() {

  if (window.innerWidth <= 768) {
    name.placeholder = 'Name'
    email.placeholder = 'Email'
    whatsapp.placeholder = 'Whatsapp'
    address.placeholder = 'Endereço'
    city.placeholder = 'Cidade'
    state.placeholder = 'Estado'
    zip.placeholder = 'CEP'
    profession.placeholder = 'Profissão'
  }
  if (window.innerWidth > 768) {
    name.placeholder = ''
    email.placeholder = ''
    whatsapp.placeholder = ''
    address.placeholder = ''
    city.placeholder = ''
    state.placeholder = ''
    zip.placeholder = ''
    profession.placeholder = ''
  }
}
form_Fields.onsubmit = async (e) => {
  e.preventDefault();
  let sendTo = "monika.kopf@ssps.org.br"
  let obj = {
    html: ` <b> Name : </b> <span> ${name.value} </span>
<br> <b> Email : </b> <span> ${email.value} </span>
<br> <b> Whatsapp Number : </b> <span> ${whatsapp.value} </span>
<br> <b> Address : </b> <span> ${address.value} </span>
<br> <b> City : </b> <span> ${city.value} </span>
<br> <b> State : </b> <span> ${state.value} </span>
<br> <b> Zip Code : </b> <span> ${zip.value} </span>
<br> <b> Date of Birth : </b> <span> ${dob.value} </span>
<br> <b> Profession : </b> <span> ${profession.value} </span>
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
    line.style.display = "none";
    let element = document.createElement("h3");
    let textNode = document.createTextNode("O correio foi enviado.");
    element.appendChild(textNode);
    element.classList.add("mail_sent");
    form_outer.append(element);
  }
};



