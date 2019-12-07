export default interface SubjectModel {
  title: string;
  active: boolean;
  comingDate: string;
  pendingDate: string;
  creationDate: string;
  category: string;
  _id: string;
  imgPath: string;
}

export interface SubjectFormModel {
  title: string;
  comingDate: string;
  pendingDate: string;
  category: string;
  imgFile?: File | null;
  imgPath?: string;
}