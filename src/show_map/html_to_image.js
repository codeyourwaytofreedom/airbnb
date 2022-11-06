import { toPng } from 'html-to-image';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


const Html_to_image = () => {
    const to_be_made_image = useRef();
    const a = htmlToImage.toPng(to_be_made_image.current);

    return ( 
        htmlToImage.toPng(to_be_made_image.current)
        
       
     );
}
 
export default Html_to_image;