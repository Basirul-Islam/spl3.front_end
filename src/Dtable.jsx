import React from 'react'
import * as ReactBootstrap from "react-bootstrap"
function Dtable({ models }) {
    const renderModels = (models) => {
        return (
            <tr className='text-dark'>
                <td>{models.modelName}</td>
                <td>{models.accuracy}</td>
                <td>{models.precision}</td>
                <td>{models.recall}</td>
                <td>{models.f1Score}</td>
            </tr>
        )
    }
    return(
        <div className='pt-4'>
            <div>
                <hr />
                    <div className='d-flex justify-content-center'>
                        <h5>Classifiers Report</h5>
                    </div>   
                <hr />
            </div>
            <ReactBootstrap.Table striped bordered hover>
                <thead className='text-dark'>
                    <th>Name</th>
                    <th>Accuracy</th>
                    <th>Precesion</th>
                    <th>Recall</th>
                    <th>F1 Score</th>
                </thead>
                <tbody>
                    {models.map(renderModels)}
                </tbody>
            </ReactBootstrap.Table>
        </div>
        

    )
  }
  export default Dtable