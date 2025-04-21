(function() {
    alert("KEYBINDS:\nM - Set your earnings\nF - Set how much fish you can handle\nD - Set how far you can go\nB - Set your best max score\nO - Set your offline earnings amount");

    document.addEventListener("keydown", function(event) {
        let keyActions = {
            "M": { prompt: "How much earnings ya want?", cookie: "Gone FishingmoneyEarned" },
            "D": { prompt: "How far you wanna go?", cookie: "Gone FishingmaxDepthLvl" },
            "F": { prompt: "How much fish you wanna hold?", cookie: "Gone FishingmaxFishesLvl" },
            "B": { prompt: "Whats the best you wanna do?", cookie: "Gone FishingbestScore" },
            "O": { prompt: "How much you wanna earn offline?", cookie: "Gone FishingearningPerMinLvl" }
        };
        
        let action = keyActions[event.key.toUpperCase()];
        if (action) {
            let input = prompt(action.prompt, "");
            
            if (input !== null && input.trim() !== "" && !isNaN(input)) {
                if (typeof window.cookieSet === "function") {
                    window.cookieSet(action.cookie, input, 365);
                }
                
                alert("The impossible has been done 😈 refresh the page to see your changes!");
            } else {
                alert("Hey buddy it has to be a number");
            }
        }
    });
})();
