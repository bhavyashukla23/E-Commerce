import {Box, Button} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


const CustomButtons = () => {
  return (
      <Box style={{justifyContent: "space-between"}}>
          <Button variant='text' style={{marginRight: 10}}><AccountCircleOutlinedIcon/>&nbsp; Login <ExpandMoreOutlinedIcon/></Button>
          <Button variant='text' style={{marginRight: 10}}><ShoppingCartOutlinedIcon/>&nbsp; Cart </Button>
          <Button variant='text' style={{marginRight: 10}}><StorefrontOutlinedIcon/>&nbsp; Become a Seller </Button>
      </Box>
  );
};

export default CustomButtons;
