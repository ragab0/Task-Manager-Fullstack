"use client";
import { useGlobalContext } from '@/utils/context';
import ModalAddFolder from './ModalAddFolder';
import ModalTaskForm from './ModalTaskForm';


export default function Modals() {
  
  const {
    appState: {
      modal: {
        isAddingFolder, 
        isTaskModal
      }
    }
  } = useGlobalContext();


  return (
    <div className='modals'>
      {isTaskModal && <ModalTaskForm />}
      {isAddingFolder && <ModalAddFolder />}
    </div>
  )
}
