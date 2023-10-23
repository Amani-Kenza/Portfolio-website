import {useState} from 'react'; //store email,...
import ContactImg from '../assets/img/contact-img.svg';
import { Container, Row, Col} from "react-bootstrap";

export const Contact= ()=>{
    const formInitialDetails={
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails]=useState(formInitialDetails);
    const [buttonText, setButtonText]=useState('send');
    const [status, setStatus]=useState({});
    const onFormUpdate=(category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        console.log(response); // Log the response to the console
        setButtonText("Send");
        
        setFormDetails(formInitialDetails);
       
        if (response.status === 200) {
          setStatus({ success: true, message: 'Message sent successfully'});
        } else {
          setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        }
       
      };
    return(
       <section className='contact' id="connect">
        <Container>
            <Row className="align-items-center" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Col md={6}>
                    <img src={ContactImg} alt="contact" />
                </Col>
                <Col>
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit} method='post'>
                    <Row>
                        <Col size={12} sm={6} className="px-1 flex1" >
                            <input type='text' value={formDetails.firstname} placeholder='First Name' onChange={(e)=>onFormUpdate('firstname',e.target.value)} />
                            <input type='text' value={formDetails.lastname} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastname',e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1 flex1">
                            <input type='email' value={formDetails.email} placeholder='Email' onChange={(e)=>onFormUpdate('email',e.target.value)} />
                            <input type='tel' value={formDetails.phone} placeholder='Phone' onChange={(e)=>onFormUpdate('phone',e.target.value)} />
                        </Col>
                        <Col>
                        <div className='flex1'>
                            <textarea row="6" value={formDetails.message} placeholder='Leave a message' onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                        </div>
                        <button type='submit'><span>{buttonText}</span></button>
                        </Col>
                        {status.message &&
                        <Col>
                           <p className={status.success===false ?"danger":"success"}>{status.message}</p>
                        </Col>
                        }
                    </Row>
                </form>
                </Col>
            </Row>
        </Container>
       </section>
    )
}