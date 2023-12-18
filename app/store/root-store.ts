
import useSwitcher from './switchStore';
import HostsStore from './fetchHosts';
import CommentsStore from './fetchComments';
class RootStore {
  Switch = useSwitcher;
  fetchHosts = HostsStore;
  fetchComments = CommentsStore;
}
export default RootStore;
