import axios from "axios";
const API_URL = "https://localhost:7013/api/comments/GetAllSpamLabledComments";
const GetSpamComments = (url) => {
//let token = JSON.parse(localStorage.getItem('user')).token;
   return  axios.post(API_URL , {url}, { headers: {
         'Accept' : 'application/json',
         'Content-Type': 'application/json',
          }
     })
     .then((response) => {
         console.log(response)
        return response.data;
      });
};

const GetSpamAndHateComments = (url) => {
  let path_URL = "https://localhost:7013/api/Comments/GetAll/Labled/Comments";
  //let token = JSON.parse(localStorage.getItem('user')).token;
     return  axios.post(path_URL , {url}, { headers: {
           'Accept' : 'application/json',
           'Content-Type': 'application/json',
            }
       })
       .then((response) => {
           console.log(response)
          return response.data;
        });
  };

  const GetReport = () => {
    let path_URL = "https://localhost:7013/api/Comments/GetReport";
    //let token = JSON.parse(localStorage.getItem('user')).token;
       return  axios.get(path_URL, { headers: {
             'Accept' : 'application/json',
             'Content-Type': 'application/json',
              }
         })
         .then((response) => {
             console.log(response)
            return response.data;
          });
    };

const DeleteBlog = (id) => {
    //let id = JSON.parse(localStorage.getItem('blog')).id;
    console.log("id = " + id);
    let token = JSON.parse(localStorage.getItem('user')).token;
    // const DeleteBlogDTO = {
    //     id: id,
    //     AuthorID: 1,
    // }
    console.log(token);
      return  axios.delete( API_URL + "/" + id, { headers: {
             'Accept' : 'application/json',
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + token
              }
         })
         .then((response) => {
             console.log(response)
            return response.data;
          });
    };
    const UpdateBlog = (title, body, lastModifieddOn) => {
        let id = JSON.parse(localStorage.getItem('blog')).id;
        console.log("id = " + id);
        
        let token = JSON.parse(localStorage.getItem('user')).token;
          return  axios.put(API_URL , {id, title, body, lastModifieddOn}, { headers: {
                 'Accept' : 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
                  }
             })
             .then((response) => {
                 console.log(response)
                return response.data;
              });
        };

const CommentService = {
  GetSpamComments,
  GetSpamAndHateComments,
  GetReport,
}

export default CommentService;