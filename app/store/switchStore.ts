import { makeAutoObservable } from 'mobx';
class useSwitcher {
  public switch = false;
  constructor() {
    makeAutoObservable(this);
  }
  isSwitched() {
    this.switch = !this.switch;
  }
}
export default new useSwitcher();
