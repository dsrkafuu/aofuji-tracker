import useVector from './index.esm.js';

// get settings
const node = document.querySelector('script[data-vecid]');
const getAttr = (key) => {
  return node.getAttribute(`data-${key}`);
};
const ID = getAttr('vaid');
const API = `${/(https?:\/\/.*api)\/?$/i.exec(getAttr('vaapi'))[1]}/collect`;
const SPA = Boolean(getAttr('vaspa'));

if (ID && navigator.doNotTrack !== '1') {
  const { vecView, vecLeave, vecEvent } = useVector(ID, API, SPA);

  // expose global funcs
  window.vecView = vecView;
  window.vecLeave = vecLeave;
  window.vecEvent = vecEvent;
}
