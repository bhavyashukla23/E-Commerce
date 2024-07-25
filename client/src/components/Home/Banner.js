import { Carousel } from 'react-responsive-carousel';
import {bannerData} from '../../constants/data';
import { styled } from '@mui/material';

const Image=styled('img')({
    width: '100%',
    height: 280,
});

const Banner=()=>{

    return(
        <Carousel>
        {
            bannerData.map(data =>(
                <Image src={data.url} alt='banner' id={data.id} />
            ))
        }
    </Carousel>
    )
}

export default Banner;