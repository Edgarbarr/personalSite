import React, {useReducer} from "react";
const axios = require('axios');
function Contact(){
    const [formValues, setFormValues] = useReducer((state, newState)=>({...state, ...newState}), {name:"", email:"",subject:"", message:""});
    const handleChange = (e) => {
        setFormValues({[e.target.id]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, subject, message} = formValues;
        axios.post('/api/form', {
            name,
            email,
            subject,
            message
        })
        .then((res)=>{
            document.getElementById("form").reset();
            toggle(res.data);
            console.log(res.data)
        })

    }
    const toggle = (text) => {
        document.getElementById("email_response").className="display";
        document.getElementById("email_response").textContent = text;
    }
    return (
        <div className="container-fluid padding-top vh100 blk">
            <div className="container font-white">
                <h1>Find me on:</h1>
                <div className="row">
                    <div className="col-lg-2 fadein"><a href="https://www.linkedin.com/in/edgarbarrientos5"><img className="social_media" src="https://copyblogger.com/cdn-origin/images/linkedin.png"/></a></div>
                    <div className="col-lg-2 fadein"><a href="https://www.facebook.com/edgar.barrientos.9"><img className="social_media" src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"/></a></div>
                    <div className="col-lg-2 fadein"><a href="https://github.com/Edgarbarr"><img className="social_media" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a></div>

                </div>
            </div>
            <br/>
            <form id="form" className="container font-white">
            <h1>Send me an email:</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" onChange={handleChange}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" onChange={handleChange}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="subject">Subject:</label>
                        <input type="text" className="form-control" id="subject" onChange={handleChange}></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="message">Message:</label>
                    <textarea type="textarea" className="form-control" id="message" onChange={handleChange}></textarea>
                </div>
                
                <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
                <div>
                    <span id="email_response" className="display_none"></span>
                </div>
            </form>
        </div>
    )
}

export default Contact;