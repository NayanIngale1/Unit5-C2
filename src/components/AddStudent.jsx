import "../App.css"
import { useState } from "react";


export const AddStudent = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:value,
    })
  };

  const handleSubmit = (e) => {
   e.preventDefault()
    formData.first_name == null ||
    formData.last_name == null ||
    formData.email == null ||
    formData.age > 50 ||
    formData.tenth_score > 100 ||
    formData.twelth_score > 100
      ? alert("Error...! Invalid Value...!")
      : fetch("http://localhost:8080/students", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
    
    }

  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          value={formData.tenth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          value={formData.twelth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          value={formData.preferred_branch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleChange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
