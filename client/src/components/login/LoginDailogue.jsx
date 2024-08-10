import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { authenticateSignup } from "../../services/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
//   padding: 45px 35px;

`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 28%;
    height: 83%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const Wrapper = styled(Box)`
  display:flex;
  flex-direction:column;
  padding: 25px 35px;
  flex:1;
  &>div ,&>button , &>p{
        margin-top:20px;
  }  
`;

const LoginButton= styled(Button)`
    text-transform:none;
    background: #FB641B;
    color: #fff;
    height :48px;
    border-radius :2px;
`;

const RequestOtp= styled(Button)`
    text-transform:none;
    background: #fff;
    color: #2874f0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    height :48px;
    border-radius :2px;
`;

const Text=styled(Typography)`
   font-size:12px;
   color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align : center;
    color: #2874f0;
    font-weight:600;
    cursor:pointer;
`;

const accountInitialView ={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup : {
        view:'signup',
        heading : 'Looks like you are new here!',
        subHeading:  'Sign up with your mobile to get started'
    }
};

const signupInitialValues={
 firstname:'',
 lastname:'',
 username:'',
 email:'',
 password:'',
 phone:' '
};

const LoginDialogue = ({ open, setOpen }) => {

    const[account , toggleAccount]=useState(accountInitialView.login);
    const[signUp , setSignup] =useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialView.login);
  };

  const signUpToggle=()=>{
     toggleAccount(accountInitialView.signup);
  };

  const signupUser=async()=>{
     let response = await authenticateSignup(signUp);
     console.log(response);
  };

  const onInputChange=(e)=>{
      setSignup({...signUp , [e.target.name] : e.target.value})
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth : 'unset'}}}>
      <Component>
        <Box style={{display:"flex",height:'100%'}}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop : 20}}>{account.subHeading}</Typography>
          </Image>
          { 
            account.view === 'login' ?
              <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile Number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{textAlign : "center"}}>OR</Typography>
              <RequestOtp>Request OTP</RequestOtp>
              <CreateAccount onClick={()=>signUpToggle()}>New to Flipkart?Create an Account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="firstname" label="Enter Firstname" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="lastname" label="Enter Lastname" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="username" label="Enter Username" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="email" label="Enter Email" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="password" label="Enter Password" />
            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="phone" label="Enter Phone" />
            <LoginButton onClick={()=>{signupUser()}}>Continue</LoginButton>
             </Wrapper>

          }
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
