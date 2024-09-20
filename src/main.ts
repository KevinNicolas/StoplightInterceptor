import { createApp } from "vue";
import "./style.scss";
import Options from "./options/Options.vue";
import Popup from "./popup/Popup.vue";

const mode = import.meta.env.MODE;

if (mode === "OPTIONS") createApp(Options).mount("#app");
else createApp(Popup).mount("#app");
