
// Function to update the placeholder text based on format choice
function updatePlaceholder() {
    const formatChoice = document.getElementById("formatChoice").value;
    const paragraphCountInput = document.getElementById("paragraphCount");

    if (formatChoice === "words") {
        paragraphCountInput.placeholder = "Enter number of words";
    } else if (formatChoice === "sentences") {
        paragraphCountInput.placeholder = "Enter number of sentences";
    } else if (formatChoice === "paragraphs") {
        paragraphCountInput.placeholder = "Enter number of paragraphs";
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
        let sentenceCount = paragraphCount;
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

// Function to copy the text inside the output box to clipboard
// Function to copy the text inside the output box to clipboard
function copyToClipboard() {
    const outputText = document.getElementById("output").innerText;

    // Create a temporary input to copy text
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = outputText;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Update the button text
    const copyButton = document.getElementById("copyButton");

    // Save the original HTML
    const originalHTML = copyButton.innerHTML;

    copyButton.innerHTML = "✔ Copied!";

    // Reset the button HTML after 500ms
    setTimeout(() => {
        copyButton.innerHTML = originalHTML;
    }, 500);
}


// Call updatePlaceholder on page load
document.addEventListener("DOMContentLoaded", updatePlaceholder);

