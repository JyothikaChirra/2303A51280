const axios=require("axios");
async function register(){
    try{
        const response=await axios.post('http://4.224.186.213/evaluation-service/register',{
            email:"2303A51280@sru.edu.in",
            name:"Jyothika Chirra",
            mobileNo:"9989291617",
            githubUserName:"JyothikaChirra",
            rollNo:"2303A51280",
            accessCode:"bDreAq"
        });
        console.log(response.data);
    }
    catch(error){
        console.error(error.response?.data||error.message);
    }
}
register();