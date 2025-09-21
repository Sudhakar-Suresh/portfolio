/**
 * Google Apps Script for handling contact form submissions
 *
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a Google Sheet and note the Sheet ID
 * 5. Replace SHEET_ID below with your actual Sheet ID
 * 6. Deploy as web app with execute permissions for "Anyone"
 * 7. Copy the web app URL and add it to your .env file as VITE_GOOGLE_SHEETS_URL
 */

// Your Google Sheet ID
const SHEET_ID = "1M0aKuN2CpoY-m5_I-SxXUQmoGwPTU3SLfCbAxRCBR8U";
const SHEET_NAME = "Contact Form Submissions";

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet =
        SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      newSheet
        .getRange(1, 1, 1, 6)
        .setValues([
          ["Timestamp", "Name", "Email", "Subject", "Message", "Status"],
        ]);

      // Format header row
      newSheet.getRange(1, 1, 1, 6).setFontWeight("bold");
      newSheet.getRange(1, 1, 1, 6).setBackground("#f0f0f0");
    }

    const targetSheet =
      SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Prepare the row data
    const rowData = [
      new Date().toLocaleString(), // Timestamp
      data.name || "",
      data.email || "",
      data.subject || "",
      data.message || "",
      "New", // Status
    ];

    // Append the data to the sheet
    targetSheet.appendRow(rowData);

    // Auto-resize columns for better readability
    targetSheet.autoResizeColumns(1, 6);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error: " + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "Contact form endpoint is working",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
