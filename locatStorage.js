const nameInput = document.querySelector('input[name="user-name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageBox = document.querySelector('textarea[name="message-box"]');

function storeLocalStorage() {
  const storeData = {
    name: nameInput.value,
    email: emailInput.value,
    messageBox: messageBox.value,
  };

  localStorage.setItem('UserData', JSON.stringify(storeData));
//   console.log(localStorage.getItem('UserData'));
}

nameInput.addEventListener('input', storeLocalStorage);
emailInput.addEventListener('input', storeLocalStorage);
messageBox.addEventListener('input', storeLocalStorage);

const getData = JSON.parse(localStorage.getItem('UserData'));

if (getData != null) {
  nameInput.value = getData.name;
  emailInput.value = getData.email;
  messageBox.value = getData.messageBox;
}
