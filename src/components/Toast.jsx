import React from 'react';
import {Toast} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const ToastElement = ({ data, removeToast }) => {
         const { type, text, id } = data;
         return (
           <Toast
             className={`toast__element_${type}`}
             delay={3000}
             autohide={true}
             onClose={removeToast.bind(null, id)}
             animation={true}
           >
             <Toast.Header>
               <FontAwesomeIcon icon={faExclamationCircle} />
               <strong className="mr-auto">{type.toUpperCase()}</strong>
             </Toast.Header>
             <Toast.Body>{text}</Toast.Body>
           </Toast>
         );
       };