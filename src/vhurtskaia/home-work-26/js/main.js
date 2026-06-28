import {
  handleButtonClick,
  trackMousePosition,
  setupEventDelegation,
} from "./scripts.js";

handleButtonClick("myButton", "Button clicked!");

trackMousePosition();

setupEventDelegation("#testList");