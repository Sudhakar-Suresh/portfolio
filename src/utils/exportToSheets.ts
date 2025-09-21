// Utility to export stored form submissions to Google Sheets

export const getStoredSubmissions = () => {
  const data = localStorage.getItem('contactFormSubmissions');
  return data ? JSON.parse(data) : [];
};

export const clearStoredSubmissions = () => {
  localStorage.removeItem('contactFormSubmissions');
};

export const exportStoredToSheets = async () => {
  const storedData = getStoredSubmissions();
  
  if (storedData.length === 0) {
    console.log('No stored submissions to export');
    return;
  }

  console.log(`Found ${storedData.length} stored submissions:`, storedData);
  
  // You can manually copy this data to your Google Sheet
  // Or use it once your Google Apps Script is set up
  
  return storedData;
};

// Function to display stored data in console for easy copying
export const showStoredData = () => {
  const data = getStoredSubmissions();
  
  if (data.length === 0) {
    console.log('No form submissions stored yet.');
    return;
  }

  console.log('=== STORED CONTACT FORM SUBMISSIONS ===');
  data.forEach((submission: any, index: number) => {
    console.log(`\n--- Submission ${index + 1} ---`);
    console.log('Timestamp:', new Date(submission.timestamp).toLocaleString());
    console.log('Name:', submission.name);
    console.log('Email:', submission.email);
    console.log('Subject:', submission.subject);
    console.log('Message:', submission.message);
  });
  
  console.log(`\n📊 Total submissions: ${data.length}`);
  console.log('💡 To export to Google Sheets, complete the setup in QUICK_SETUP.md');
};