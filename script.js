const codeOutput = document.getElementById("code-output");
const userInput = document.getElementById("user-input");
const timerDisplay = document.getElementById("timer");

let timeLeft = 10;
let attackInterval;
let currentAttack = "";
let difficultyLevel = 0; // Starts at level 0, increases over time

const progressBar = document.getElementById("progress-bar");


// Attack scenarios with increasing complexity
const attackScenarios = [
    { attack: "Firewall breach detected!", defenses: ["enable firewall", "firewall.enable_protection()", "security.firewall.activate_now()", "security.firewall.activate_now(password, 12345)"] },
    { attack: "Brute-force attack in progress!", defenses: ["change password", "security.change_password()", "system.update.password_secure()", "system.update.password_secure(password, 12345)"] },
    { attack: "Malware detected in system files!", defenses: ["scan system", "system.scan_for_viruses()", "security.scan.full_system_now()", "security.scan.full_system_now(password, 12345)"] },
    { attack: "Phishing attempt detected!", defenses: ["block email", "email.block_sender()", "email.security.block_phishing_attack()", "email.security.block_phishing_attack(password, 12345)"] },
    { attack: "Data exfiltration in progress!", defenses: ["terminate connection", "network.terminate_active_session()", "network.security.disconnect_intruder()", "network.security.disconnect_intruder(password, 12345)"] },
    { attack: "DDoS attack flooding network!", defenses: ["activate mitigation", "network.ddos_protection.enable()", "security.activate_ddos_defense_now()", "security.activate_ddos_defense_now(password, 12345)"] },
    { attack: "Keylogger installed!", defenses: ["remove keylogger", "system.remove_keylogger()", "security.remove.malware.keylogger()", "security.remove.malware.keylogger(password, 12345)"] },
    { attack: "Rootkit detected!", defenses: ["purge rootkit", "system.purge_rootkit()", "security.rootkit_elimination.execute()", "security.rootkit_elimination.execute(password, 12345)"] },
    { attack: "System corruption detected!", defenses: ["restore backup", "system.restore_backup()", "system.recovery.restore_files_now()", "system.recovery.restore_files_now(password, 12345)"] }
];


// Get attack command based on current difficulty
function getDefenseCommand(attack) {
    return attack.defenses[Math.min(difficultyLevel, attack.defenses.length - 1)];
}

// Start a new attack
function startAttack() {
    clearTimeout(attackInterval);

    let randomAttack = attackScenarios[Math.floor(Math.random() * attackScenarios.length)];
    currentAttack = getDefenseCommand(randomAttack);

    // Reset attack message & timer
    codeOutput.innerHTML = `[ALERT] ${randomAttack.attack}\nType: <span class="defense">${currentAttack}</span> to defend!\n`;

    userInput.value = "";
    timeLeft = 10;
    progressBar.style.width = "100%";
    progressBar.style.backgroundColor = "#00ff00";
    updateTimer();
}

// Timer function
function updateTimer() {
    if (timeLeft > 0) {
        
        timeLeft--;

        // Calculate progress percentage
        let progress = (timeLeft / 10) * 100;
        progressBar.style.width = progress + "%";

        // Change color to red if time is running out
        if (timeLeft <= 3) {
            progressBar.style.backgroundColor = "red";
        } else {
            progressBar.style.backgroundColor = "#ffffff";
        }

        attackInterval = setTimeout(updateTimer, 1000);
    } else {
        codeOutput.innerHTML += `\nYou failed to stop the attack! System compromised!\n`;
        gameOver();
    }
}

// Handle user input
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let command = userInput.value.trim();
        userInput.value = "";

        if (command === currentAttack) {
            codeOutput.innerHTML = `Defense successful! Attack neutralized!\n`;
            clearTimeout(attackInterval);
            setTimeout(startAttack, 5000);
        } else {
            codeOutput.innerHTML += `Incorrect command! Try again!\n`;
        }
    }
});

// Game over function
function gameOver() {
    codeOutput.innerHTML += `\n <span class="gameOver">${"> Y O U H A V E B E E N H A C K E D < > ＰＲＥＳＳ Ｆ５ ＴＯ ＲＥＢＯＯＴ <"}</span>\n`;
    userInput.disabled = true;
}

// Increase difficulty every 60 seconds
setInterval(() => {
    difficultyLevel++; // Increase difficulty
    codeOutput.innerHTML += `\nDifficulty increased! You now need to type longer commands!\n`;
}, 30000);

// Start the game
startAttack();

const fakeCodeLines = [ 
    "[WARNING] Unauthorized access detected!",
    "Attempting to establish remote connection...",
    "Bypassing firewall security...",
    "Accessing root privileges... FAILED",
    "Injecting malicious payload...",
    "Decrypting stored credentials...",
    "Cracking password hash...",
    "Brute-force attack in progress...",
    "SSH access request sent...",
    "User authentication bypassed! (Root access granted)",
    "Scanning for open ports...",
    "Port 22 (SSH) - Secure",
    "Port 80 (HTTP) - Open",
    "Port 443 (HTTPS) - Secure",
    "Exploiting buffer overflow vulnerability...",
    "Injecting reverse shell...",
    "Establishing backdoor access...",
    "Downloading confidential database files...",
    "Extracting user credentials...",
    "Sending data to remote server...",
    "Injecting keylogger...",
    "Monitoring keystrokes in real-time...",
    "Accessing webcam... LIVE FEED DETECTED",
    "Encrypting local files...",
    "Demanding ransom in cryptocurrency...",
    "[ALERT] System compromise detected!",
    "Attempting to disable antivirus protection...",
    "Uploading malware payload...",
    "Spreading infection across network...",
    "Downloading trojan...",
    "Initiating DDoS attack on external server...",
    "Spoofing MAC address...",
    "Masking IP with TOR network...",
    "Deploying phishing email campaign...",
    "Executing SQL injection attack...",
    "Dumping database records...",
    "Grabbing session cookies...",
    "Performing man-in-the-middle attack...",
    "Decrypting SSL traffic...",
    "Interception of user login details...",
    "Logging keystrokes...",
    "Hijacking active user sessions...",
    "Extracting credit card information...",
    "[WARNING] System overload detected!",
    "Self-replicating worm activated...",
    "Kernel panic triggered...",
    "System resources maxed out...",
    "Tampering with system logs...",
    "Deleting evidence of intrusion...",
    "Attempting to disable firewall...",
    "System files corrupted!",
    "[FATAL ERROR] Blue screen imminent...",
    "FORCE SHUTDOWN INITIATED...",
    "Attempting to restart system...",
    "BIOS firmware modification detected!",
    "Remote administrator privileges obtained!",
    "Deploying ransomware...",
    "Encrypting all system files...",
    "Displaying ransom note...",
    "Awaiting payment confirmation...",
    "Countdown to full system lockout: 5:00 minutes...",
    "Sending alert to system administrator...",
    "[SECURITY BREACH] Immediate action required!",
    "Analyzing countermeasure options...",
    "Activating emergency lockdown mode...",
    "Disconnecting from all external networks...",
    "Attempting to trace attack source...",
    "Intrusion detection system engaged...",
    "Deploying counter-hack measures...",
    "Launching cyber defense protocol...",
    "Tracing attacker IP address...",
    "Routing attack signal through multiple proxies...",
    "Counter-strike initiated...",
    "Reverse hacking into attacker's system...",
    "Gaining access to attacker's files...",
    "Extracting sensitive data from attacker...",
    "Uploading attacker's details to law enforcement...",
    "Initiating system recovery...",
    "Restoring encrypted files...",
    "Patching security vulnerabilities...",
    "Firewall defenses reinforced...",
    "[SECURITY STATUS] System integrity restored!",
    "[ALERT] Cyber attack neutralized!",
    "[SYSTEM MESSAGE] All systems operational.",
];


let index = 0;

function typeLine(line, i, callback) {
    if (i < line.length) {
        if (line.includes("[WARNING]") || line.includes("[ALERT]") || line.includes("[FATAL ERROR]")) {
            codeOutput.innerHTML += `<span class="hacked">${line[i]}</span>`;
        } else {
            codeOutput.innerHTML += line[i];
        }
        
        setTimeout(() => typeLine(line, i + 1, callback), 50);
    } else {
        codeOutput.innerHTML += "\n";
        setTimeout(callback, 500);
    }
}


function trimTerminal() {
    const maxLines = 40; // Number of lines to keep visible
    let lines = codeOutput.innerHTML.split("\n");
    if (lines.length > maxLines) {
        lines = lines.slice(lines.length - maxLines);
        codeOutput.innerHTML = lines.join("\n");
    }
}

function displayCode() {
    if (index < fakeCodeLines.length) {
        typeLine(fakeCodeLines[index], 0, () => {
            index++;
            displayCode();
        });
    } else {
        index = 0;
        codeOutput.innerHTML = "";
        setTimeout(displayCode, 2000); // Reset loop
    }
}


displayCode();

// Blinking cursor effect
setInterval(() => {
    cursor.style.visibility = (cursor.style.visibility === "hidden") ? "visible" : "hidden";
}, 500);

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const command = userInput.value.toLowerCase();
        userInput.value = "";

        let response = "Command not recognized. Type 'help' for a list of commands.";

        if (command === "help") {
            response = "Available commands: help, status, clear, reboot, shutdown, ls, scan network, encrypt, decrypt, ping, traceroute, bot activate, fortune.";
        } else if (command === "status") {
            response = `System running smoothly.\nCPU Usage: ${(Math.random() * 80 + 10).toFixed(2)}%\nMemory Usage: ${(Math.random() * 70 + 20).toFixed(2)}%\nNetwork Speed: ${(Math.random() * 500 + 50).toFixed(2)} Mbps`;
        } else if (command === "clear") {
            codeOutput.innerHTML = "";
            return;
        } else if (command === "reboot") {
            response = "Rebooting system...\n[██████████] 100% Complete!";
        } else if (command === "shutdown") {
            response = "System shutting down...";
            setTimeout(() => window.close(), 2000);
        } else if (command === "ls") {
            response = "Documents  Downloads  Music  Pictures  Videos  Projects";
        } else if (command.startsWith("encrypt ")) {
            let text = command.split("encrypt ")[1];
            response = `Encrypted: ${btoa(text)}`; // Simple Base64 encryption
        } else if (command.startsWith("decrypt ")) {
            let encoded = command.split("decrypt ")[1];
            try {
                response = `Decrypted: ${atob(encoded)}`;
            } catch {
                response = "Invalid encrypted text.";
            }
        } else if (command === "ping google.com") {
            response = "Pinging google.com...\nReply from 8.8.8.8: bytes=32 time=24ms TTL=52";
        } else if (command === "fortune") {
            const quotes = [
                "The quieter you become, the more you can hear.",
                "There is no spoon.",
                "Accessing the Matrix... Please wait.",
                "With great power comes great responsibility.",
                "Your security is only as strong as your weakest link."
            ];
            response = quotes[Math.floor(Math.random() * quotes.length)];
        } else if (command === "rickroll") {
            response = "Never gonna give you up, never gonna let you down...";
        } else if (command === defenses) {
            response = "Initiating defense protocol...";
        }

        codeOutput.innerHTML += `\n> ${command}\n${response}\n`;
    }
});