import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Dtable from './Dtable';
import CommentService from './CommentService';
const OutputPage = (props) => {
  const location = useLocation();
  const [comments, setCommnet] = useState(0);
  const [shouldReload, setShouldReload] = useState(true);
  let url = location.state.url;
  var validUrl = true;
//function OutputPage({route}) {
    console.log(url);
    console.log(validUrl);
    //url = "https://www.youtube.com/watch?v=yeyBEpsZfrs";
    var ID =  url.split("v=")[1].substring(0, 11);
    console.log(ID);
    var iFurl = "https://www.youtube.com/embed/" + ID + "?autoplay=0";
    console.log(iFurl);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      if(shouldReload){
          CommentService.GetSpamComments(url).then(
            (response) => {
                //console.log(response);
                setCommnet(response);
                setShouldReload(false);
                //comments = response;
            },
        );
      }
      // Update the document title using the browser API
      
    });

    console.log(comments);
    // let comments = CommentService.GetSpamComments(url).then(
    //   (response) => {
    //       //console.log(response);
    //       comments = response;
    //   },
      
    // );
    // console.log(comments);
    // comment.forEach(element => {
    //   console.log(element);
    // });
    // comments = [{ Name : "Sadman Sakib",  Comment : "Bokachoda", isBad: true}, { Name : "Johny Sins",  Comment : "Fuck You", isBad: true}];
    // for(let i =0; i<20; i++){
    //   comments.push({ Name : "Sadman Sakib",  Comment : "Nice Video", isBad: false})
    //   comments.push({ Name : "Johny Sins",  Comment : "Fuck You", isBad: true})
    // }
  //   if (url != undefined || url != '') {
  //     var regExp = "/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/";
  //     var match = url.match(regExp);
  //     if (match && match[2].length == 11) {
  //       validUrl = true;
  //         // Do anything for being valid
  //         // if need to change the url to embed url then use below line
  //         //$('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
  //     }
  //     else {
  //       validUrl = false;
  //         // Do anything for not being valid
  //     }
  // }
    //const url = props.param;
  let navigate = useNavigate(); 
//   const onClick = (e) => {
//     navigate('/', { replace: true });
//   }
  return (
    <div  style={{backgroundColor: '#4d4d4d'}}>
      <div className='container pt-4 pb-5'>
        
        <div className='align-self-start'>
          <Button type="submit"  className="btn btn-dark previous" onClick={() => navigate('/', { replace: true })}>
            Back
          </Button>
        </div>
        <div className='row mt-3'>
          <div className='pt-2 col-sm-8'>
            <div className=' card bg-dark '>
              <div className='d-flex justify-content-center p-3 '>
                {validUrl && (
                  <iframe width="800" height="450"
                  //https://www.youtube.com/embed/yeyBEpsZfrs
                  src={iFurl}>
                </iframe> 
                )}
              </div>
            </div>
            <Dtable/>
          </div>
          <div className='col-4'>
            <Row>
                <h3>comments</h3>
                <div className='pl-2' lg={
                    {
                      size: 6, 
                      offset: 4
                    }
                  } style={{ height:'708px',
                  overflowY: 'scroll'}}>
                 
                  {
                    comments && comments.map(c => (
                      <div>
                        { c.isSpam === "1"? (
                            <div className='border border-danger rounded mt-2'>
                              <div className="text-justify float-left pt-2">
                                <div className='row d-inline-block px-3'>
                                  
                                  <p className='pr-2 h5 text-danger'><img src={c.profileImageUrl} alt="Girl in a jacket" width="30" height="30" className="rounded-circle"></img> {c.authorDisplayName}</p>
                                  {/* <h5>bashir <h4 className='text-danger'>{c.Name}</h4></h5> */}
                                  {/* <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/> */}
                                  <p className='text-danger'>- 20 October, 2018 <br/>{c.commentBody}</p>
                                  <p className='text-danger'></p>
                                </div>
                              </div>
                              {/* <h5>{c.Name}</h5>
                              <div className='pl-2 text-danger'>
                                <p className='pl-2'>{c.Comment}</p>
                              </div> */}
                            </div>
                        ):(
                          <div className='border border-primary rounded mt-2'>
                              <div className="text-justify float-left pt-2">
                                <div className='row d-inline-block px-3'>
                                  
                                  <p className='pr-2 h5 text-success'><img src={c.profileImageUrl} alt="Girl in a jacket" width="30" height="30" className="rounded-circle"></img> {c.authorDisplayName}</p>
                                  {/* <h5>bashir <h4 className='text-danger'>{c.Name}</h4></h5> */}
                                  {/* <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/> */}
                                  <p className='text-success'>- 20 October, 2018 <br/>{c.commentBody}</p>
                                </div>
                              </div>
                              {/* <h5>{c.Name}</h5>
                              <div className='pl-2 text-danger'>
                                <p className='pl-2'>{c.Comment}</p>
                              </div> */}
                            </div>
                        )}
                      </div>   
                    ))
                  }
                  
                </div>
                <div className='d-flex flex-row-reverse mt-3'>
                  <div className='mr-3'>
                    <Button type="submit"  className="btn btn-danger previous" onClick={() => console.log("Delete Bad comments")}>
                      Delete
                    </Button>
                  </div>
                </div>
            </Row>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputPage;
