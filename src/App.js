//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import InputPage from './Input';
import RootRoute from './RootRout';
function App() {
  return (
    <provider>
        <BrowserRouter>
        
          <RootRoute />
          {/* <InputPage/> */}
        </BrowserRouter>
    </provider>
  );
 
  // const [URL, setUrl] = useState(0);
  // const onChange = (e) => {
  //   //console.log(e.target.value);
  //   setUrl(e.target.value)
  //   //console.log(URL);
  // }
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submited");
  //     //console.log(URL);
  // }
  // return (
  //   <div  style={{backgroundColor: '#4d4d4d'}}>
  //     <div className='container pt-4 pb-5'>
  //       <div className='d-flex flex-row-reverse'>
  //         <button type="button" className="btn btn-dark">
  //           Verify Yourself
  //         </button>
  //       </div>
  //       <div className="d-flex justify-content-center" >
  //           <Form className='pt-3 bg-dark text-light rounded'>
  //             <div className='p-3'>
  //               <div className='row'>
  //                 <label className='d-flex justify-content-center'>Enter Your Youtube video URL</label>
  //               </div>
  //               <div className='row p-3 text-light'>
  //                 <input className='bg-light rounded text-dark' type = "text" placeholder='i.e https://www.youtube.com/watch?v=hnVOvvbQrwA' onChange={onChange}></input>
  //                 <Button type="submit" className="btn btn-light mt-2 font-weight-bold" onClick={onSubmit}>
  //                   Submit
  //                 </Button>
  //               </div>
  //             </div>    
  //           </Form>
  //         </div>
  //         <div>
  //         </div>
  //     </div>
  //   </div>
  // );
}

export default App;
