import { Row, Col } from "./Layout";
import addInstall from "./utils/addInstall";

const components = [Row, Col];

for (const comp of components) {
  addInstall(comp);
}

export default {
  install(Vue) {
    if (!Vue) {
      return;
    }

    for (const comp of components) {
      comp.install(Vue);
    }
  },
};

export { Row, Col };
