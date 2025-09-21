// COPY THIS TO GOOGLE APPS SCRIPT FOR AUTOMATIC SAVING
// This version should avoid Outlook redirects

function doPost(e) {
  const SHEET_ID = "1M0aKuN2CpoY-m5_I-SxXUQmoGwPTU3SLfCbAxRCBR8U";

  try {
    // Parse incoming data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      data = e.parameter; // Fallback to URL parameters
    }

    // Open spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getActiveSheet();

    // If sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet
        .getRange(1, 1, 1, 5)
        .setValues([["Timestamp", "Name", "Email", "Subject", "Message"]]);

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
    }

    // Add new row
    const newRow = [
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      data.email || "",
      data.subject || "",
      data.message || "",
    ];

    sheet.appendRow(newRow);

    // Auto-resize columns
    sheet.autoResizeColumns(1, 5);

    // Return success (simple text to avoid issues)
    return ContentService.createTextOutput("OK");
  } catch (error) {
    // Return error as simple text
    return ContentService.createTextOutput("ERROR: " + error.toString());
  }
}

function doGet(e) {
  // Simple response for GET requests
  return ContentService.createTextOutput("Contact Form API Ready");
}

// Test function you can run manually
function testAddRow() {
  const testData = {
    timestamp: new Date().toLocaleString(),
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message from Google Apps Script",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  console.log("Test result:", result.getContent());

  // Also test direct sheet access
  const SHEET_ID = "1M0aKuN2CpoY-m5_I-SxXUQmoGwPTU3SLfCbAxRCBR8U";
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  console.log("Sheet name:", sheet.getName());
  console.log("Last row:", sheet.getLastRow());
}
