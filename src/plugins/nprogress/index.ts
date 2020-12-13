import NProgress from "./nprogress";
import "./nprogress.css";
import "./index.css";

NProgress.configure({ showSpinner: false });

const NProgressPlugin = {
  install: (Vue: any) => {
    Vue.prototype.$np = NProgress;
  }
};

export default NProgressPlugin;
