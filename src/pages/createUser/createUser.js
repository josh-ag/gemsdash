import { useState } from "react";
import "./createUser.css";

export const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [agreement, setAgreement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const myData = {
      firstName,
      lastName,
      userName,
      email,
      phone,
      address: { city, country },
      gender,
      agreement,
    };
  };

  return (
    <div className="CreateUser">
      <form className="Form" onSubmit={handleSubmit}>
        <h2 className="Title">Add New User</h2>
        <div className="FormElement">
          <label>Firstname</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="FormElement">
          <label>Lastname</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="FormElement">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="FormElement">
          <label>Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="FormElement">
          <label>Phone</label>
          <input
            type="phone"
            value={phone}
            name="phone"
            placeholder="e.g (+234)"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="FormElement">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="FormElement">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="FormElement Checkbox">
          <input
            type="radio"
            name="gender"
            value="M"
            id="M"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="M">M</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            name="gender"
            value="F"
            id="F"
          />
          <label htmlFor="F">F</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            name="gender"
            value="Other"
            id="Others"
          />
          <label htmlFor="Others">Other</label>
        </div>

        <div className="FormElement  Checkbox">
          <input
            onChange={(e) => setAgreement(e.target.checked)}
            type="checkbox"
            id="agreement"
            name="agreement"
          />
          <label htmlFor="agreement">
            By click on this box, you agree to accept our privacy terms and
            conditions.
          </label>
        </div>
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};
