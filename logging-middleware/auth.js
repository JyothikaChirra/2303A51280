const axios=require("axios");
async function auth(){
    try{
        const response=await axios.post('http://4.224.186.213/evaluation-service/auth',{
            email:"2303A51280@sru.edu.in",
            name:"Jyothika Chirra",
            rollNo:"2303A51280",
            accessCode:"bDreAq",
            clientId:'bc1a03fe-67d0-418f-8c45-6a52b13a6ea4',
          clientSecret: 'ZjWAQvUqjnnpZfMH'
        });
        console.log(response.data);
    }
    catch(error){
        console.error(error.response?.data||error.message);
    }
}
auth();