# 🚀 AUTOMATIC SAVE TO GOOGLE SHEETS - Complete Setup

## 🎯 Goal: Messages automatically save to your Google Sheet without manual copying

## 📋 Step 1: Create Google Apps Script (Avoid Outlook Redirect)

### Method A: Use Incognito Window

1. **Open incognito/private browser window**
2. **Go to:** https://script.google.com
3. **Sign in with the SAME Google account** that owns your spreadsheet
4. **Create new project**
5. **Delete all code and paste** the entire code from `AUTO_SAVE_SCRIPT.js`
6. **Save** (Ctrl+S) and name it "Contact Form Auto Save"

### Method B: If Still Getting Outlook Redirect

1. **Sign out of ALL Google accounts**
2. **Clear browser cache completely**
3. **Restart browser**
4. **Sign in with ONLY the account that owns the spreadsheet**
5. **Try Method A again**

## 📋 Step 2: Test the Script First

1. **In Google Apps Script, click "Run" button**
2. **Select function:** `testAddRow`
3. **Click "Run"**
4. **Authorize when prompted** (this is normal)
5. **Check your Google Sheet** - you should see a test row added!

## 📋 Step 3: Deploy as Web App

1. **Click "Deploy" → "New deployment"**
2. **Click gear icon ⚙️ next to "Type"**
3. **Select "Web app"**
4. **Settings:**
   - Execute as: **Me**
   - Who has access: **Anyone** (CRITICAL!)
5. **Click "Deploy"**
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycbx.../exec`)

## 📋 Step 4: Update Your Website

1. **Open:** `src/utils/googleSheets.ts`
2. **Find this line:**
   ```javascript
   const APPS_SCRIPT_URL =
     "https://script.google.com/macros/s/AKfycbxVOUR_DEPLOYMENT_ID/exec";
   ```
3. **Replace** `AKfycbxVOUR_DEPLOYMENT_ID` with your actual deployment ID

## 📋 Step 5: Test Automatic Saving

1. **Restart your development server:**

   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

2. **Submit a test message** on your contact form

3. **Check console** - you should see:

   ```
   ✅ SUCCESS! Message automatically saved to Google Sheets!
   ```

4. **Check your Google Sheet** - the message should appear automatically!

## 🔧 Alternative Method: Google Forms Integration

If Google Apps Script still causes issues, use this method:

### Create a Google Form:

1. **Go to:** https://forms.google.com
2. **Create new form** with these fields:

   - Timestamp (short answer)
   - Name (short answer)
   - Email (short answer)
   - Subject (short answer)
   - Message (paragraph)

3. **Link form to your Google Sheet:**

   - Click "Responses" tab
   - Click spreadsheet icon
   - Select your existing sheet

4. **Get form submission URL:**

   - Click "Send" → Link icon
   - Copy the form URL
   - Replace `/viewform` with `/formResponse` in the URL

5. **Update the code** with your form field IDs

## ✅ Success Indicators

**Automatic saving is working when:**

- ✅ Console shows "SUCCESS! Message automatically saved"
- ✅ Messages appear in Google Sheet immediately
- ✅ No manual copying needed
- ✅ All form fields are captured correctly

## 🔍 Troubleshooting

### If Outlook redirect persists:

- Use different browser (Chrome, Firefox, Edge)
- Try on different device/computer
- Use mobile browser
- Ask someone else to set up the script

### If script runs but sheet doesn't update:

- Check Google Sheet permissions
- Verify Sheet ID is correct
- Run the `testAddRow` function manually
- Check Apps Script execution logs

### If deployment fails:

- Make sure "Anyone" access is selected
- Try deploying as "New deployment" again
- Check if you have edit permissions on the sheet

## 🎉 Final Result

Once set up correctly:

1. **User submits contact form**
2. **Message automatically appears in Google Sheet**
3. **No manual work required**
4. **Real-time updates**
5. **All data preserved**

Your contact form will be fully automated!
