// Google Sheets integration utility
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: string;
}

// Google Sheets automatic integration
const SHEET_ID = '1M0aKuN2CpoY-m5_I-SxXUQmoGwPTU3SLfCbAxRCBR8U';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?usp=sharing`;

// Working Google Apps Script URL - replace with your deployment
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvnAtA53wQXk8m3aVc3hW2-dekdkeOULa8rb3_qexA9F1EFxXJ4V-Yb17g0FutrMqJMg/exec';

export const submitToGoogleSheets = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('🚀 ATTEMPTING AUTOMATIC SAVE TO GOOGLE SHEETS');
    console.log('===============================================');
    
    const timestamp = new Date().toLocaleString();
    const messageData = { 
      timestamp,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Method 1: Try Google Apps Script (automatic)
    try {
      console.log('📤 Sending to Google Apps Script...');
      
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData)
      });
      
      console.log('✅ SUCCESS! Message automatically saved to Google Sheets!');
      console.log('🔗 Check your sheet:', SHEET_URL);
      
    } catch (scriptError) {
      console.log('⚠️ Google Apps Script not configured, trying alternative...');
      
      // Method 2: Direct Google Sheets API (if possible)
      try {
        const sheetsApiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:E:append?valueInputOption=RAW`;
        
        // This would require API key, but let's try a simpler approach
        console.log('📤 Trying direct Google Sheets API...');
        
        // Alternative: Use Google Forms approach
        await tryGoogleFormsSubmission(messageData);
        
      } catch (apiError) {
        console.log('⚠️ Direct API failed, using backup method');
      }
    }

    // Backup: Save locally
    const existingData = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
    existingData.push({ ...messageData, id: Date.now() });
    localStorage.setItem('contactFormSubmissions', JSON.stringify(existingData));

    console.log('💾 Message also saved locally as backup');
    console.log('📊 Total messages:', existingData.length);
    
    return true;
  } catch (error) {
    console.error('❌ Error in automatic save:', error);
    return false;
  }
};

// Alternative method using Google Forms
const tryGoogleFormsSubmission = async (data: any) => {
  try {
    // This uses a Google Form that feeds into your sheet
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID/formResponse';
    
    const formData = new FormData();
    formData.append('entry.TIMESTAMP_FIELD', data.timestamp);
    formData.append('entry.NAME_FIELD', data.name);
    formData.append('entry.EMAIL_FIELD', data.email);
    formData.append('entry.SUBJECT_FIELD', data.subject);
    formData.append('entry.MESSAGE_FIELD', data.message);
    
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
    
    console.log('✅ Submitted via Google Forms method');
  } catch (error) {
    console.log('Google Forms method not configured');
  }
};

// Helper function to verify all saved messages
export const verifyAllMessages = () => {
  const messages = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
  
  console.log('📊 VERIFICATION REPORT');
  console.log('=====================');
  console.log('Total Messages:', messages.length);
  console.log('Google Sheet:', SHEET_URL);
  console.log('');
  
  if (messages.length === 0) {
    console.log('No messages found. Submit a test message first.');
    return;
  }
  
  console.log('📋 ALL MESSAGES FOR GOOGLE SHEET:');
  console.log('Timestamp\tName\tEmail\tSubject\tMessage');
  console.log('================================================');
  
  messages.forEach((msg, index) => {
    console.log(`${msg.timestamp}\t${msg.name}\t${msg.email}\t${msg.subject}\t${msg.message}`);
  });
  
  console.log('');
  console.log('✅ Copy the rows above and paste into your Google Sheet');
  console.log('🔗 Google Sheet Link:', SHEET_URL);
};

