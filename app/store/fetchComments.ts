import { makeAutoObservable, runInAction } from 'mobx';
interface IComment {
  postId: number;
  id: number;
  name: string;
  surname: string;
  comment: string;
}

class CommentsStore {
  comment: IComment[] = [];
  isLoading = false;
//   comment?: IPromiseBasedObservable<IComment[]>;
  constructor() {
    makeAutoObservable(this);
  }
  fetchComments = async () => {
    try {
      this.isLoading = true;
      const response = await fetch(' http://localhost:5000/comments');
      const data = await response.json();
      runInAction(() => {
        this.comment = data;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
      console.error('Error fetching comments:', error);
    }
  };
}
export default new CommentsStore();
