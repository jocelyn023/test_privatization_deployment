import '../src/assets/font/iconfont.css';
import Button from '../packages/button';

const version = '2.2.13';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Button
};
