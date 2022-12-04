import React from 'react'
import * as ReactBootstrap from "react-bootstrap"
//import makeData from './makeData'
function Dtable({ columns, data }) {
   const models = [
    {Name: "Logistic Regression", Accuracy: "89%", Precision: "20", Recall: "50"},
    {Name: "Random Forest", Accuracy: "60%", Precision: "25", Recall: "67"},
    {Name: "Naive Byes", Accuracy: "78%", Precision: "78", Recall: "62"},
    {Name: "Decision Tree", Accuracy: "88%", Precision: "45", Recall: "87"},
    {Name: "Support Vector Machine", Accuracy: "92%", Precision: "67", Recall: "24"}
   ]
    const renderModels = (models, index) => {
        return (
            <tr className='text-dark'>
                <td>{models.Name}</td>
                <td>{models.Accuracy}</td>
                <td>{models.Precision}</td>
                <td>{models.Recall}</td>
            </tr>
        )
    }
    return(
        <div className='pt-4'>
            <ReactBootstrap.Table striped bordered hover>
                <thead className='text-dark'>
                    <th>Name</th>
                    <th>Accuracy</th>
                    <th>Precesion</th>
                    <th>Recall</th>
                </thead>
                <tbody>
                    {models.map(renderModels)}
                </tbody>
            </ReactBootstrap.Table>
        </div>
        

    )
  }
  export default Dtable