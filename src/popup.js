const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
  browser.storage.sync.set({
    enabled: toggle.checked,
  });
});
document.addEventListener("DOMContentLoaded", async () => {
  const { enabled } = await browser.storage.sync.get("enabled");
  toggle.checked = enabled;
});
