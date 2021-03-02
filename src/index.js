import useAofuji from './index.esm.js';

// get settings
const node = document.querySelector('script[data-aoid]');
const getAttr = (key) => {
  return node.getAttribute(`data-${key}`);
};
const ID = getAttr('aoid');
const API = getAttr('aoapi');
const SPA = Boolean(getAttr('aospa'));

if (ID && navigator.doNotTrack !== '1') {
  const { aoView, aoLeave, aoEvent } = useAofuji(ID, API, SPA);

  // expose global funcs
  window.aoView = aoView;
  window.aoLeave = aoLeave;
  window.aoEvent = aoEvent;
}
