async function sendMessage() {
  const userMessage = document.getElementById("userInput").value;
  if (!userMessage) return;

  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<p><strong>Wewe:</strong> ${userMessage}</p>`;
  document.getElementById("userInput").value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage })
  });

  const data = await response.json();
  chatbox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}

