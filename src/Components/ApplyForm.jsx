import React from "react";

function ApplyForm() {
  return (
    <form>
      <label htmlFor="inputName">
        Name:
        <input type="text" id="inputName" name="name" placeholder="John Doesson" />
      </label>
      <br />
      <label htmlFor="inputEmail">
        Email:
        <input type="email" id="inputEmail" name="email" placeholder="myemail@mail.com" />
      </label>
      <br />
      <label htmlFor="inputPhone">
        Phone:
        <input type="tel" id="inputPhone" name="phone" placeholder="+1 555 555 1234" />
      </label>
      <br />
      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplyForm;