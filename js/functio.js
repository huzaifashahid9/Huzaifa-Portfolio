import { addDoc, collection, db } from "./firebase.js";

const name = document.getElementById("name");
const company = document.getElementById("company");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

// console.log(addDoc);
// console.log(collection);
// console.log(db);

const getMessage = async () => {
  //   console.log(name.value);
  //   console.log(company.value);
  //   console.log(email.value);
  //   console.log(phone.value);
  //   console.log(message.value);
  try {
    if (!name.value || !email.value || !phone.value) {
      alert("Fields are required....");
      return;
    }
    const data = await addDoc(collection(db, "Feedbacks"), {
      Name: name.value,
      Company: company.value,
      Email: email.value,
      Phone: phone.value,
      Message: message.value,
    });
    console.log(data);
    alert("Message sent successfully!");

    name.value = "";
    company.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  } catch (error) {
    console.log(error.message);
    alert("Something went Wrong.......");
  }
};

window.getMessage = getMessage;
