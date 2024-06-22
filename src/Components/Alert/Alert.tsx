import './index.scss'
import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { AlertTypes } from '../../Types/alertType';

interface IProps {
  typeAlert:AlertTypes;
  headerIcon:ReactNode;
  title:string;
  discription?:string;
  children?:ReactNode;

}


const Alert = ({typeAlert="alert-danger",headerIcon,title,discription,children}:IProps) => {

  return (
      <div className={typeAlert}>
        <div className='alert-header'>
          <div className='title'>
          {headerIcon}
          <h4>{title}</h4>
          </div>
          <X className='close' size={18}/>
        
        </div>
        

      {children ? children : <p>{discription}</p>}
      </div>
      )
  }


export default Alert