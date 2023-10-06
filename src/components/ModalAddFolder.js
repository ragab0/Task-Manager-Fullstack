import { useGlobalContext } from '@/utils/context';
import { modalActions, folderActions } from '@/utils/actions';
import Modal from './Modal'


export default function ModalAddFolder() {
  const {
    appDispatch, 
    appState: {
      folder: {addFolderField}
    }
  } = useGlobalContext();

  function addFolderCloser(value) {
    appDispatch(modalActions.isAddingFolderModalSetter(value));
  }

  function valueHandler(e) {
    appDispatch(folderActions.folderAddFieldSetter(e.target.value));
  }

  function submitHandler(e) {
    e.preventDefault();
    appDispatch(folderActions.folderAddSubmitSetter());
  }


  return (
    <Modal heading={"Add folder"} closer={addFolderCloser}>
      <form onSubmit={submitHandler} className='task-from content-start text-start capitalize'>
        <input name="title" value={addFolderField} onChange={valueHandler} placeholder="Folder name" />
        <button className={`btn-main w-full mb-2 mt-4 `}>{"Add"}</button>
      </form>
    </Modal>
  )
}
