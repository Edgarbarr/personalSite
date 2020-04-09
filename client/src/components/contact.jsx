import React, {useReducer} from "react";
const axios = require('axios');
function Contact(){
    const [formValues, setFormValues] = useReducer((state, newState)=>({...state, ...newState}), {name:"", email:"",subject:"", message:""});
    const handleChange = (e) => {
        setFormValues({[e.target.id]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var form = document.getElementById("form");
        if(form.checkValidity() === false){
            form.reportValidity();

        } else {
            const {name, email, subject, message} = formValues;
            axios.post('/api/form', {
                name,
                email,
                subject,
                message
            })
            .then((res)=>{
                form.reset();
                toggle(res.data);
                console.log(res.data)
            })
        }
        

    }
    const toggle = (text) => {
        document.getElementById("email_response").className="display";
        document.getElementById("email_response").textContent = text;
    }
    return (
        <div className="container-fluid padding-top blk">
            <div className="container font-white">
                <h1>Find me on:</h1>
                <div className="row">
                    <div className="col-12 col-md-2 fadein padding-10"><a href="https://www.linkedin.com/in/edgarbarrientos5"><img className="social_media" src="https://copyblogger.com/cdn-origin/images/linkedin.png"/></a></div>
                    <div className="col-12 col-md-2 fadein padding-10"><a href="https://www.facebook.com/edgar.barrientos.9"><img className="social_media" src="https://stpetersburggroup.com/wp-content/uploads/2018/05/Facebook-Logo-300x300.png"/></a></div>
                    <div className="col-12 col-md-2 fadein padding-10"><a href="https://github.com/Edgarbarr"><img className="social_media" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a></div>

                </div>
            </div>
            <br/>
            <form id="form" className="container font-white">
            <h1>Send me an email:</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" onChange={handleChange} required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" onChange={handleChange} required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="subject">Subject:</label>
                        <input type="text" className="form-control" id="subject" onChange={handleChange} required></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="message">Message:</label>
                    <textarea type="textarea" className="form-control" id="message" onChange={handleChange} required></textarea>
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