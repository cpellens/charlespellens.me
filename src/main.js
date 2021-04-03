import App from './components/App.svelte';
import 'normalize.css';
import 'boxicons';

import mixpanel from "mixpanel-browser";
import LogRocket from "logrocket";

mixpanel.init("fb16d05bbe2c8ee0949a9f2112eea62b");
window.mixpanel = mixpanel;

LogRocket.init("sqjkke/charlespellensme");

const app = new App({
    target: document.body
});

export default app;