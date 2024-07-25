import { InputBase,Box,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox=styled(Box)`
   background:#fff ;
   width:38%;
   border-raduis:2px ;
   margin-left:20px ;
   margin-right:20px;
   display:flex;
`;

const InputBaseStyle= styled(InputBase)`
 width:100%;
`;

const SearchIconStyle= styled(Box)`
color: grey;
display:flex
`;

const Search=() =>{

    return(
        <SearchBox>
            <InputBaseStyle placeholder="Search for products,brands and more"/>
            <SearchIconStyle>
                <SearchIcon/>
            </SearchIconStyle>
        </SearchBox>
    )
};

export default Search;