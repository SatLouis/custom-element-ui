export default function (comp) {
  if (comp.install) {
    return;
  }
  comp.install = (Vue) => {
    Vue && !Vue.component(comp.name) && Vue.component(comp.name, comp);
  };
}
