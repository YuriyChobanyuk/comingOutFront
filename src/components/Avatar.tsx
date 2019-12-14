import React from 'react';
import {Image} from 'react-bootstrap';

interface Props {
  imagePath?: string;
  clickHandler?: () => void;
}

export const Avatar: React.FC<Props> = ({imagePath, clickHandler}) => {
 return (
     <Image
       src={imagePath || process.env.PUBLIC_URL + "/avatar.png"}
       onClick={clickHandler}
       roundedCircle
       className={"avatar-image"}
     />
 );
}