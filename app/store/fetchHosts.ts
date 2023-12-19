import { makeAutoObservable, runInAction } from 'mobx';

interface IHosts {
  categoryId: number;
  title: string;
  subtitle: string;
  price: number;
  oldprice?: number;
  descrs: Array<string>;
}

class HostsStore {
  categoryMonth: IHosts[] = [];
  categoryYear: IHosts[] = [];
  isLoading = false;
  categoryId = 0;

  constructor() {
    makeAutoObservable(this);
  }

  fetchHostMonths = async () => {
    try {
      this.isLoading = true;
      const response = await fetch(
        'http://localhost:5000/hostscardMonth?categoryId=' + this.categoryId,
      );
      const data = await response.json();
      runInAction(() => {
        this.categoryMonth = data;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
      console.error('Error fetching hosts:', error);
    }
  };
  fetchHostYear = async () => {
    try {
      this.isLoading = true;
      const response = await fetch(
        'http://localhost:5000/hostscardYear?categoryId=' + this.categoryId,
      );
      const data = await response.json();
      runInAction(() => {
        this.categoryYear = data;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
      console.error('Error fetching hosts:', error);
    }
  };
}

export default new HostsStore();
