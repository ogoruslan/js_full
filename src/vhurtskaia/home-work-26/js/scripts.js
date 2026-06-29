function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    console.log(message);
  });
}

function trackMousePosition() {
  document.addEventListener("mousemove", (event) => {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  });
}

function setupEventDelegation(selector) {
  const list = document.querySelector(selector);

  if (!list) {
    return;
  }

  list.addEventListener("click", (event) => {
    const item = event.target.closest("li");

    if (!item) {
      return;
    }

    console.log(`Item clicked: ${item.textContent.trim()}`);
  });
}

export {
  handleButtonClick,
  trackMousePosition,
  setupEventDelegation,
};