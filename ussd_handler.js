// USSD Handler for Africa's Talking Integration (*384#)
function handleUSSD(req, res) {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = "";

    // Split text input by '*' to track multi-step user menu navigation
    const arrayText = text.split('*');
    const userChoice = arrayText[0];

    if (text === "") {
        // Main Menu (Screen 18)
        response = `CON Welcome to LandIQ\n`;
        response += `1. Verify Title\n`;
        response += `2. View Listing Info\n`;
        response += `3. Report Fraud`;
    } 
    else if (userChoice === "1") {
        // Step 1: Prompt for Title Number
        if (arrayText.length === 1) {
            response = `CON Enter Title No (e.g. LR 209/4521):`;
        } else if (arrayText.length === 2) {
            const titleNo = arrayText[1];
            // Here backend queries PostgreSQL / NLC API
            response = `END Title ${titleNo}\nOwner: J.K. Mwangi\nStatus: VALID\nEncumbrances: NONE\nRates: CLEAR`;
        }
    } 
    else if (userChoice === "3") {
        // Report Fraud Menu
        if (arrayText.length === 1) {
            response = `CON Enter Plot No to report suspicious listing:`;
        } else if (arrayText.length === 2) {
            response = `END Report received. Our security team & county surveyors are investigating. Thank you!`;
        }
    } 
    else {
        response = `END Invalid option. Please dial again.`;
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
}

module.exports = { handleUSSD };