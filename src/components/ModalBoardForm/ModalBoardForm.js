import ModalHeader from "../ModalHeader/ModalHeader";

export default function ModalBoardForm({ closeHandler }) {
  return (
    <ModalHeader heading={"Add Board"} closeHandler={closeHandler}>
      <div
        // onSubmit={submitHandler}
        className="task-from content-start text-start capitalize"
      >
        <div></div>
      </div>
    </ModalHeader>
  );
}
