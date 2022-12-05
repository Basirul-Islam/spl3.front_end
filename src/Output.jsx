import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Row, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Dtable from './Dtable';
import CommentService from './CommentService';

const OutputPage = (props) => {
  const location = useLocation();
  const [comments, setComments] = useState(0);
  const [reports, setReports] = useState(0);
  const [shouldReload, setShouldReload] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  let url = location.state.url;
  var validUrl = true;
    var ID =  url.split("v=")[1].substring(0, 11);
    var iFurl = "https://www.youtube.com/embed/" + ID + "?autoplay=0";

  const  onDelete = () => {
      let goodComments = [];
      comments.forEach(element => {
        if(element.combine_label !== "0"){
          goodComments.push(element);
        }
      });
      setComments(goodComments)
    }

    useEffect(() => {
      if(shouldReload){
        CommentService.GetReport().then(
          (res) => {
            setReports(res)
            CommentService.GetSpamAndHateComments(url).then(
              (response) => { 
                  setComments(response);
                  setShouldReload(false);
                  setisLoading(false)
              },
          );
          }
        )
          
      }
      
    });

    
  let navigate = useNavigate(); 

  return (
    //style={{backgroundColor: '#4d4d4d'}}
    <div>
      { isLoading &&(
        <div className='row'>
          <h3 className='py-5 d-flex justify-content-center'>Loading...</h3>
        </div>
        
      )}
      { !isLoading && (
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
            <Dtable models={reports} />
          </div>
          <div className='col-4'>
            <Row>
                <h3>comments</h3>
                <div className='pl-2' lg={
                    {
                      size: 6, 
                      offset: 4
                    }
                  } style={{ height:'805px',
                  overflowY: 'scroll'}}>
                 
                  {
                    comments && comments.map(c => (
                      <div>
                        { c.combine_label === "0"? (
                            <div className='border border-danger rounded mt-2'>
                              <div className="text-justify float-left pt-2">
                                <div className='row d-inline-block px-3'>
                                  
                                  <p className='pr-2 h5 text-danger'><img src={c.profileImageUrl} alt="Girl in a jacket" width="30" height="30" className="rounded-circle"></img> {c.authorDisplayName}</p>
                                  <p className='text-danger'>- 20 October, 2018 <br/>{c.commentBody}</p>
                                  <p className='text-danger'></p>
                                </div>
                              </div>
                            </div>
                        ):(
                          <div className='border border-primary rounded mt-2'>
                              <div className="text-justify float-left pt-2">
                                <div className='row d-inline-block px-3'>
                                  
                                  <p className='pr-2 h5 text-success'><img src={c.profileImageUrl} alt="Girl in a jacket" width="30" height="30" className="rounded-circle"></img> {c.authorDisplayName}</p>
                                  
                                  <p className='text-success'>- 20 October, 2018 <br/>{c.commentBody}</p>
                                </div>
                              </div>
                              
                            </div>
                        )}
                      </div>   
                    ))
                  }
                  
                </div>
                <div className='d-flex flex-row-reverse mt-3'>
                  <div className='mr-3'>
                    <Button type="submit"  className="btn btn-danger previous" onClick={() => onDelete()}>
                      Delete
                    </Button>
                  </div>
                </div>
            </Row>
            
          </div>
        </div>
      </div>
      )}
      
    </div>
  );
}

export default OutputPage;
