addEventListener("yt-navigate-start", async () => {
  const { enabled } = await browser.storage.sync.get("enabled");
  if (!enabled) {
    return;
  }
  if (location.pathname.startsWith("/shorts/")) {
    location.replace(`/watch?v=${location.pathname.substring(8)}`);
  }
});
