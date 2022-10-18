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
}

export default CommentService;