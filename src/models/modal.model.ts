export default interface ModalModel {
  readonly id: number;
  title: string;
  text: string;
  confirmAction: (...args: any[]) => void;
  declineAction: (...args: any[]) => void;
}