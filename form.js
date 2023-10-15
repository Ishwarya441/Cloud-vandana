function onSubmit() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value).join(", ");
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phn').value;

    let summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = `
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Date of Birth: ${dob}</li>
        <li>Country: ${country}</li>
        <li>Gender: ${gender}</li>
        <li>Profession: ${profession}</li>
        <li>Email: ${email}</li>
        <li>Mobile Number: ${phone}</li>
    `;
let popup = document.getElementById('popup');
popup.style.display = 'block';
}
function closePopup() {
document.getElementById('surveyForm').reset();
let popup = document.getElementById('popup');
popup.style.display = 'none';
}
