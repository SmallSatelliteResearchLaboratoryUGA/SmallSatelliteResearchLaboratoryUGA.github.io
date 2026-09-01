# Apps Script Setup for Team Sheet Sync

This guide explains how to set up the Google Apps Script that connects the Google Sheet to the GitHub Action, enabling the "🚀 Publish to Website" button.

## Prerequisites

- You have admin access to the Google Sheet
- You have a GitHub account with write access to the repo
- You have generated a fine-grained GitHub Personal Access Token (see "Create GitHub Token" below)

## Step 1: Create GitHub Token

1. Go to https://github.com/settings/tokens?type=beta
2. Click **Generate new token**
3. Fill in:
   - **Token name:** `SSRL Team Sheet Sync`
   - **Expiration:** 90 days (or your preference)
   - **Repository access:** Select only the SSRL repo
   - **Permissions:**
     - `Contents`: Read only
     - `Actions`: Read and write
4. Click **Generate token**
5. **Copy the token immediately** — you won't see it again. Store it somewhere safe for the next step.

## Step 2: Open the Apps Script Editor

1. Open the Google Sheet
2. Click **Extensions** → **Apps Script**
3. Delete any existing code (if this is a fresh sheet, there won't be any)
4. Paste the code below:

```javascript
const GITHUB_TOKEN = PropertiesService.getScriptProperties().getProperty(
  "GITHUB_TOKEN"
);
const GITHUB_REPO = "bainblan/SmallSatelliteResearchLaboratoryUGA.github.io";
const GITHUB_OWNER = "bainblan";

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("🚀 Publish")
    .addItem("Publish to Website", "publishToWebsite")
    .addToUi();
}

function publishToWebsite() {
  const ui = SpreadsheetApp.getUi();

  if (!GITHUB_TOKEN) {
    ui.alert(
      "Error: GitHub token not configured. Ask the admin to set it up in Script Properties."
    );
    return;
  }

  ui.showModelessDialog(
    HtmlService.createHtmlOutput(
      '<p>Publishing... <span id="status">⏳</span></p><div id="result"></div>'
    ),
    "Publishing to Website"
  );

  try {
    // Trigger the GitHub Action
    const dispatchResponse = UrlFetchApp.fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/dispatches`,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/vnd.github+json",
        },
        payload: JSON.stringify({
          event_type: "sync-team",
        }),
        muteHttpExceptions: true,
      }
    );

    if (dispatchResponse.getResponseCode() !== 204) {
      throw new Error(
        `GitHub dispatch failed: ${dispatchResponse.getResponseCode()}`
      );
    }

    // Poll for the workflow run
    Utilities.sleep(2000);
    const runsResponse = UrlFetchApp.fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/actions/runs?event=repository_dispatch&status=in_progress`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/vnd.github+json",
        },
        muteHttpExceptions: true,
      }
    );

    const runs = JSON.parse(runsResponse.getContentText());
    const latestRun = runs.workflow_runs[0];

    if (!latestRun) {
      ui.alert("✓ Workflow triggered. Site will update in 1-2 minutes.");
      return;
    }

    const runId = latestRun.id;
    const runUrl = latestRun.html_url;

    // Poll for completion (max 5 minutes)
    let completed = false;
    let success = false;
    for (let i = 0; i < 30; i++) {
      Utilities.sleep(10000); // 10 second intervals

      const statusResponse = UrlFetchApp.fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/actions/runs/${runId}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28",
            Accept: "application/vnd.github+json",
          },
          muteHttpExceptions: true,
        }
      );

      const run = JSON.parse(statusResponse.getContentText());
      if (run.status === "completed") {
        completed = true;
        success = run.conclusion === "success";
        break;
      }
    }

    if (!completed) {
      ui.alert(
        "✓ Published! Site will update in 1-2 minutes.\n\nView progress: " +
          runUrl
      );
      return;
    }

    if (success) {
      ui.alert("✓ Published! Site updated successfully.");
    } else {
      ui.alert(
        "❌ Publish failed. There was an error processing your data. Check the GitHub Action log:\n" +
          runUrl
      );
    }
  } catch (err) {
    ui.alert("❌ Error: " + err.message);
  }
}
```

5. Click **Save** (Ctrl+S / Cmd+S)
6. A permissions dialog will appear. Click **Review permissions** → **Continue** → select your Google account → **Allow**

## Step 3: Store the GitHub Token

1. In the Apps Script editor, click **Project Settings** (gear icon, left sidebar)
2. Scroll down to **Script properties**
3. Click **Add script property**
4. Fill in:
   - **Property:** `GITHUB_TOKEN`
   - **Value:** Paste the GitHub token you created in Step 1
5. Click **Save**

## Step 4: Test the Connection

1. Go back to the Google Sheet
2. Refresh the page
3. You should see a new menu: **🚀 Publish** at the top right
4. Make a small test edit (e.g., add a row with dummy data)
5. Click **🚀 Publish** → **Publish to Website**
6. You should see "Publishing..." briefly, then a success or error message

If you see an error, check:
- GitHub token is set correctly in Script Properties
- The repo name and owner are correct
- The GitHub token has the right permissions

## Step 5: Update the Admin Guide

Edit `ADMIN_GUIDE.md` and replace `[**INSERT SHEET URL HERE**]` with the actual sheet URL.

## Troubleshooting

### "GitHub token not configured" error
- Go to **Project Settings** → **Script properties**
- Verify that `GITHUB_TOKEN` is set and not empty

### "GitHub dispatch failed" error
- Check that the GitHub token has `Actions: Read and write` permission
- Verify the repo name is correct (usually `bainblan/SmallSatelliteResearchLaboratoryUGA.github.io`)

### No "🚀 Publish" menu appears
- Refresh the Google Sheet page (Ctrl+R)
- Make sure you're logged into the same Google account as the sheet

### Publish says "success" but the site didn't update
- The GitHub Action might be queued. Check the [GitHub Actions tab](https://github.com/bainblan/SmallSatelliteResearchLaboratoryUGA.github.io/actions)
- Make sure the `TEAM_SHEET_CSV_URL` secret is configured in GitHub repo settings

## Updating the Script

If you need to update the script code in the future:
1. Return to **Extensions** → **Apps Script**
2. Edit the code
3. Click **Save**
4. The next time an admin clicks "Publish to Website", the new code runs

You do not need to re-add permissions or the GitHub token.
