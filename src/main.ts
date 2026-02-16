const statusEl = document.getElementById("status")!;

async function fetchStatus() {
  try {
    const res = await fetch("/api/status");
    const data = await res.json();
    statusEl.innerHTML = `
      <p><strong>Status:</strong> ${data.status}</p>
      <p><strong>Version:</strong> ${data.version}</p>
      <p><strong>Timestamp:</strong> ${data.timestamp}</p>
      <p><strong>Database:</strong> ${data.db}</p>
    `;
  } catch (err) {
    statusEl.textContent = `Error connecting to server: ${err}`;
  }
}

fetchStatus();
