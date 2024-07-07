import React, { useState } from 'react'

const Form2 = () => {
    // every property name must match with the id's mentioned in all inputs
    const [form, setForm] = useState({
        inpFName: '',
        inpLName: '',
        inpEmail: '',
        inpPass: '',
        inpCnfPass: '',
        inpDob: '',
        selectState: '',
        inpCity: '',
        inpPinCode: '',

    })

    console.log(form);
    const handleFormElements = (event) => {

        setForm(prev => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })

    }

    return (
        <div>
            <input
                type="text"
                placeholder="first name"
                id="inpFName"
                value={form.inpFName}
                onChange={handleFormElements}
            />
            <label id="errFName"
            >First Name is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="last name"
                id="inpLName"
                value={form.inpLName}
                onChange={handleFormElements}
            />
            <label id="errLName"
            >Last Name is required</label>
            <br /><br />
            <input
                type="email"
                placeholder="email"
                id="inpEmail"
                value={form.inpEmail}
                onChange={handleFormElements}
            />


            <label id="errEmail"
            >Email is required</label>
            <label id="errEmailFormat"
            >Email is not valid</label>
            <br /><br />
            <input
                type="password"
                placeholder="password"
                id="inpPass"
                value={form.inpPass}
                onChange={handleFormElements}
            />
            <label id="errPass"
            >Password is required</label>
            <br /><br />
            <input
                type="password"
                placeholder="confirm password"
                id="inpCnfPass"
                value={form.inpCnfPass}
                onChange={handleFormElements}
            />
            <label id="errCnfPass"
            >Confirm Password is required</label>
            <label id="errMatch"
            >Password and Confirm Password not matching</label>
            <br /><br />
            <input
                type="date"
                id="inpDob"
                value={form.inpDob}
                onChange={handleFormElements}
            />
            <label id="errDob"
            >Date of Birth is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="city"
                id="inpCity"
                value={form.inpCity}
                onChange={handleFormElements}
            />

            <br /><br />
            <input
                type="number"
                placeholder="pin code"
                id="inpPinCode"
                value={form.inpPinCode}
                onChange={handleFormElements}
            />
            <br /><br />

            <select
                id="selectState"
                value={form.selectState}
                onChange={handleFormElements}
            >
                <option value="MH">MH</option>
                <option value="Goa">Goa</option>
                <option value="MP">MP</option>
                <option value="Gujrat">Gujrat</option>
                <option value="HP">HP</option>
            </select>
            <br /><br />

            <button>Submit</button>
        </div>
    )
}


export default Form2