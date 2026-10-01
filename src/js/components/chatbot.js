export function initChatbot() {
    const style = document.createElement("style");
    style.textContent = `
        @keyframes wiggle { 
            0%, 100% { transform: rotate(0deg); }
            10%, 30% { transform: rotate(10deg); }
            20%, 40% { transform: rotate(-10deg); }
            50% { transform: rotate(0deg); }
        }
        @keyframes floatBubble {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }
        .customer-chat-widget { position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: 'Inter', sans-serif; display: flex; align-items: flex-end; gap: 15px; }
        .c-chat-bubble { background: white; padding: 12px 18px; border-radius: 20px 20px 0 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); font-size: 0.95rem; color: #1e293b; border: 1px solid #e2e8f0; animation: floatBubble 4s ease-in-out infinite; cursor: pointer; max-width: 220px; display: none; }
        .c-chat-bubble strong { display: block; color: #8a1538; margin-bottom: 4px; font-size: 0.9rem; }
        @media (min-width: 768px) { .c-chat-bubble { display: block; } }
        .customer-chat-toggle { background: #8a1538; color: white; border: none; border-radius: 50%; width: 65px; height: 65px; font-size: 28px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s; animation: wiggle 5s ease-in-out infinite; display: flex; align-items: center; justify-content: center; }
        .customer-chat-toggle:hover { transform: scale(1.1); animation: none; }
        .customer-chat-window { position: absolute; bottom: 85px; right: 0; width: 350px; height: 480px; background: white; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); display: none; flex-direction: column; overflow: hidden; border: 1px solid rgba(0,0,0,0.1); }
        .customer-chat-window.open { display: flex; }
        .c-chat-header { background: #8a1538; color: white; padding: 1rem; display: flex; justify-content: space-between; align-items: center; }
        .c-chat-header h3 { margin: 0; font-size: 1.1rem; }
        .c-chat-close { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
        .c-chat-messages { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem; background: #f8fafc; }
        .c-message { max-width: 85%; padding: 0.8rem 1rem; border-radius: 15px; font-size: 0.95rem; line-height: 1.4; }
        .c-message.user { background: #8a1538; color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
        .c-message.bot { background: white; color: #1e293b; align-self: flex-start; border-bottom-left-radius: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .c-chat-input-area { padding: 1rem; background: white; border-top: 1px solid #e2e8f0; display: flex; gap: 0.5rem; }
        .c-chat-input { flex: 1; padding: 0.8rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; outline: none; }
        .c-chat-input:focus { border-color: #8a1538; }
        #c-btn-send { background: #8a1538; color: white; border: none; padding: 0 1.2rem; border-radius: 8px; cursor: pointer; font-weight: 600; }
        @media (max-width: 480px) {
            .customer-chat-window { width: 90vw; right: -10px; height: 60vh; }
        }
    `;
    document.head.appendChild(style);

    const widget = document.createElement("div");
    widget.className = "customer-chat-widget";
    widget.innerHTML = `
        <div class="c-chat-bubble" id="c-chat-bubble" onclick="document.getElementById('c-chat-toggle').click()">
            <strong>ChatG-Piet</strong>
            Geen idee wat bij jullie past? Vertel ChatG-Piet wat je organiseert. →
        </div>
        <div class="customer-chat-window" id="c-chat-window">
            <div class="c-chat-header">
                <h3>ChatG-Piet 🎁</h3>
                <button class="c-chat-close" id="c-chat-close">&times;</button>
            </div>
            <div class="c-chat-messages" id="c-chat-messages">
                <div class="c-message bot">Welkom bij Sint Zaken! Ik ben ChatG-Piet (je slimme Sinterklaas assistent). Voor wie of wat organiseer je iets? Dan kijk ik even met je mee!</div>
            </div>
            <div class="c-chat-input-area">
                <input type="text" id="c-chat-input" class="c-chat-input" placeholder="Typ uw vraag..." autocomplete="off" />
                <button id="c-btn-send">Stuur</button>
            </div>
        </div>
        <button class="customer-chat-toggle" id="c-chat-toggle">🎁</button>
    `;
    document.body.appendChild(widget);

    const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
    const chatToggle = document.getElementById("c-chat-toggle");
    const chatClose = document.getElementById("c-chat-close");
    const chatWindow = document.getElementById("c-chat-window");
    const chatMessages = document.getElementById("c-chat-messages");
    const chatInput = document.getElementById("c-chat-input");
    const btnSend = document.getElementById("c-btn-send");

    let isOpen = false;
    let history = [];
    const chatBubble = document.getElementById("c-chat-bubble");

    chatToggle.addEventListener("click", () => {
        isOpen = !isOpen;
        chatWindow.classList.toggle("open", isOpen);
        if (isOpen && chatBubble) chatBubble.style.display = "none";
    });

    chatClose.addEventListener("click", () => {
        isOpen = false;
        chatWindow.classList.remove("open");
    });

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    btnSend.addEventListener("click", sendMessage);

    async function trackChat(role, message) {
        try {
            await fetch('/api/track_chat.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ session_id: sessionId, role, message })
            });
        } catch(e) {}
    }

    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        chatInput.value = "";
        appendMessage("user", text);
        history.push({ role: "user", content: text });
        trackChat("user", text);

        appendMessage("bot", "<em>Typen...</em>", "typing-indicator");

        try {
            const geminiHistory = history.map(msg => ({
                role: msg.role === "user" ? "user" : "model",
                parts: [{ text: msg.content }]
            }));

            const systemInstruction = `Je bent ChatG-Piet, een uiterst professionele, maar ook licht speelse en hartelijke virtuele assistent van "Sint Zaken", gepositioneerd op de openbare website voor potentiële klanten.`;

            const res = await fetch("/gemini-proxy.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: geminiHistory,
                    systemInstruction: { parts: [{ text: systemInstruction }] },
                    generationConfig: { temperature: 0.2 }
                })
            });

            const data = await res.json();
            
            removeMessage("typing-indicator");

            if (data.error) {
                console.error("Gemini API Error:", data.error);
                
                // Remove the user message from history so we don't break the alternating roles rule
                if(history.length > 0 && history[history.length - 1].role === "user") {
                    history.pop();
                }

                if (data.error.status === "RESOURCE_EXHAUSTED" || (data.error.details && data.error.details.error && data.error.details.error.status === "RESOURCE_EXHAUSTED")) {
                    appendMessage("bot", "Oeps! Mijn pieten-geheugen is even vol (API limiet bereikt).");
                } else {
                    appendMessage("bot", "Excuses, ik kan nu even niet antwoorden.");
                }
                return;
            }

            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Excuses, ik kan op dit moment geen antwoord formuleren.";
            
            appendMessage("bot", reply);
            history.push({ role: "bot", content: reply });
            trackChat("bot", reply);

        } catch (e) {
            console.error("Fetch Error:", e);
            if(history.length > 0 && history[history.length - 1].role === "user") {
                history.pop();
            }
            removeMessage("typing-indicator");
            appendMessage("bot", "Onze excuses, er is een technische storing opgetreden.");
        }
    }

    function appendMessage(role, text, id = null) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `c-message ${role}`;
        if (id) msgDiv.id = id;
        
        // Simple markdown parsing for bold
        let htmlText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        msgDiv.innerHTML = htmlText;
        
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeMessage(id) {
        const msg = document.getElementById(id);
        if (msg) msg.remove();
    }
}
