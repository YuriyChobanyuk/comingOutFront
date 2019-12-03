export default interface ModalModel {
  title: string;
  text: string;
  confirmAction: () => void;
  declineAction: () => void;
}