import React from 'react'
import * as ReactBootstrap from "react-bootstrap"
function Dtable({ columns, models }) {
    console.log(models);
    // data.forEach(element => {
    //     console.log(element);
    // });
    //console.log("Dtable", data);
//    const models = [
//     {Name: "Logistic Regression", Accuracy: "89%", Precision: "20", Recall: "50"},
//     {Name: "Random Forest", Accuracy: "60%", Precision: "25", Recall: "67"},
//     {Name: "Naive Byes", Accuracy: "78%", Precision: "78", Recall: "62"},
//     {Name: "Decision Tree", Accuracy: "88%", Precision: "45", Recall: "87"},
//     {Name: "Support Vector Machine", Accuracy: "92%", Precision: "67", Recall: "24"}
//    ]
    const renderModels = (models, index) => {
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