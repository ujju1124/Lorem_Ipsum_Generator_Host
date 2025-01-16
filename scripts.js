// Function to update the placeholder text based on format choice
function updatePlaceholder() {
    const formatChoice = document.getElementById("formatChoice").value;
    const paragraphCountInput = document.getElementById("paragraphCount");

    if (formatChoice === "words") {
        paragraphCountInput.placeholder = "Enter number of words";
    } else if (formatChoice === "sentences") {
        paragraphCountInput.placeholder = "Enter number of sentences";
    } else if (formatChoice === "paragraphs") {
        paragraphCountInput.placeholder = "Enter number of paragraphs"; // New placeholder for paragraphs
    }
}

// Function to generate Lorem Ipsum text
function generateLorem() {
    const paragraphCount = parseInt(document.getElementById("paragraphCount").value);
    const output = document.getElementById("output");
    const formatChoice = document.getElementById("formatChoice").value;

    if (!paragraphCount || paragraphCount <= 0) {
        output.innerHTML = "Please enter a valid number!";
        return;
    }

    const loremSentences = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Pellentesque vehicula, erat nec malesuada volutpat, nunc dui fermentum nunc.",
        "Suspendisse potenti. Praesent at augue a tortor vulputate tincidunt.",
        "Curabitur id turpis et lacus aliquam laoreet.",
        "Aenean euismod, eros in tincidunt luctus, urna lorem tincidunt ex, vel aliquet ex arcu ac justo.",
        "Donec convallis nulla ut nisi ullamcorper, in viverra elit fermentum.",
        "Phasellus feugiat nisi in nisi consectetur, at cursus erat tincidunt.",
        "Fusce vel metus sit amet velit vehicula vehicula."
    ];

    const loremWords = [
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "pellentesque", "vehicula",
        "erat", "nec", "malesuada", "volutpat", "nunc", "dui", "fermentum", "suspendisse", "potenti", "praesent",
        "at", "augue", "a", "tortor", "vulputate", "tincidunt", "curabitur", "id", "turpis", "et", "lacus",
        "aliquam", "laoreet", "aenean", "euismod", "eros", "in", "tincidunt", "luctus", "urna", "lorem", "tincidunt",
        "ex", "vel", "aliquet", "ex", "arcu", "ac", "justo", "donec", "convallis", "nulla", "ut", "nisi", "ullamcorper"
    ];

    let result = "";

    if (formatChoice === "words") {
        let wordCount = paragraphCount;
        let words = [];
        while (words.length < wordCount) {
            const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
            words.push(randomWord);
        }
        result = words.slice(0, wordCount).join(" ");
    } else if (formatChoice === "sentences") {
        let sentenceCount = paragraphCount; // Use the input as the sentence count
        let sentences = [];
        while (sentences.length < sentenceCount) {
            const randomSentence = loremSentences[Math.floor(Math.random() * loremSentences.length)];
            sentences.push(randomSentence);
        }
        result = sentences.slice(0, sentenceCount).join(" ");
    } else if (formatChoice === "paragraphs") {
        let paragraphCountValue = paragraphCount;
        let paragraphs = [];
        for (let i = 0; i < paragraphCountValue; i++) {
            let paragraph = [];
            for (let j = 0; j < 5; j++) { // Assuming 5 sentences per paragraph
                const randomSentence = loremSentences[Math.floor(Math.random() * loremSentences.length)];
                paragraph.push(randomSentence);
            }
            paragraphs.push(`<p> ${paragraph.join(" ")}</p>`); // Wrap in <p> tag
        }
        result = paragraphs.join(""); // No line breaks needed since <p> handles spacing
    }
    
    const outputBox = document.getElementById("outputBox");
    outputBox.style.display = "block"; // Make the output box visible

    output.innerHTML = result; // Display result inside output box
}

// Call updatePlaceholder on page load to set the correct placeholder
document.addEventListener("DOMContentLoaded", updatePlaceholder);



// Function to copy the text inside the output box to clipboard
    function copyToClipboard() {
        var textToCopy = document.getElementById("output").innerText;
        var tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = textToCopy;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    
        // Change button text and show the checkmark symbol
        const copyButton = document.getElementById("copyButton");
        copyButton.textContent = "✔ Copied!";
        const symbol = document.getElementById("copied-symbol");
        symbol.style.display = "inline"; // Show the checkmark symbol
    
        // Optionally, change the button style to indicate success
        copyButton.classList.add("copied");
    
        // Reset button after 1 second
        setTimeout(() => {
            copyButton.textContent = ""; // Clear text
            copyButton.appendChild(document.querySelector('.copy-logo')); // Re-append logo
            copyButton.appendChild(symbol); // Re-append the checkmark symbol
            copyButton.textContent = "Copy"; // Reset text
            symbol.style.display = "none"; // Hide the checkmark symbol
            copyButton.classList.remove("copied");
        }, 1000);
    }
    

// Call updatePlaceholder on page load to set the correct placeholder
document.addEventListener("DOMContentLoaded", updatePlaceholder);
