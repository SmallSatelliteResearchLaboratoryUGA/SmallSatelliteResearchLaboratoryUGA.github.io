# SSRL Website Admin Guide

This guide explains how to update the members list and alumni list on the SSRL website without touching code.

## How It Works

You maintain a Google Sheet of all lab members and alumni. When you're ready to publish changes, you click one button, and the site updates automatically within 1-2 minutes. That's it.

## Getting Started

### 1. Access the Google Sheet

Your sheet URL: [**INSERT SHEET URL HERE**]

If you lose the link, ask the lab director for access.

### 2. Understanding the Columns

Each row is one person. The columns are:

- **Section** — Which team/group this person belongs to. Use the dropdown menu to pick one:
  - Current members: `Principal Investigator`, `Lab Manager`, `MEMESat-1`, `MOCI`, `COSMO`, `Lab Operations`, `R&D`, `Data Team`, `LearnSat`, `Interns`, `Graduate Students`, `Faculty Investigators`
  - Alumni: `Alumni` (fill in the Graduation Year column for the year they left)

- **Leadership?** — Yes or No. Only matters for the project teams (MEMESat-1, MOCI, etc.). Set to `Yes` if this person is a team lead, `No` if they're a regular member. For PIs, Lab Managers, Interns, and other sections, you can leave this blank.

- **Graduation Year** — Only used for Alumni. Enter the 4-digit year they graduated (e.g., `2024`). Adding a new year automatically makes a new filter button appear on the alumni page.

- **Name** — Full name (required).

- **Role** — Their title or position (e.g., `Director`, `Mission Lead`, `Software Engineer`).

- **Major** — Their degree/major (optional; mostly used for students).

- **Bio** — A short bio (optional; rarely used).

- **Photo** — A link to their photo (see "Adding Photos" below). Leave blank for a generic avatar.

- **Link** — A URL (optional; e.g., a CV link or LinkedIn profile).

- **Order** — Leave blank to use the sheet's row order, or enter a number to manually sort within a section (1, 2, 3, etc.).

## Adding or Editing Members

### Add a new current member:
1. Click in the first empty row at the bottom.
2. Pick a Section from the dropdown.
3. Fill in Name, Role, and other fields.
4. Add a Photo (see below).
5. Click the **🚀 Publish to Website** button at the top.

### Edit an existing member:
1. Find their row.
2. Change any field (name, role, photo, etc.).
3. Click **🚀 Publish to Website**.

### Remove a member:
1. Delete the entire row.
2. Click **🚀 Publish to Website**.

## Adding Photos

Photos must be in a shared Google Drive folder. Here's how:

1. **Find the shared folder** — Ask the lab director for the link to the "SSRL Website Photos" folder.

2. **Upload your photo** to that folder.
   - PNG, JPG, etc. all work.
   - Size: any size is fine; the site will crop it.

3. **Get the share link:**
   - Right-click the photo → **Share**
   - Make sure it says "Anyone with the link can view" at the top
   - Click **Copy link**

4. **Paste into the Photo column** of the person's row.
   - Only paste the link; do not paste the image itself.

5. **Publish** — click **🚀 Publish to Website**.

That's it. The site downloads and resizes the photo automatically.

**Don't have a photo?** Leave the Photo column blank, and the site shows a generic avatar.

## Publishing Changes

After you finish adding/editing/removing people, click the **🚀 Publish to Website** button near the top of the sheet.

A small popup will appear:
- **"Published! Site will update in ~1-2 minutes"** — Success. Your changes are on the way.
- **Red error message** — Something went wrong. Read the error and fix the row (e.g., invalid Section name). Then try again.

The site usually updates within 1-2 minutes. If it takes longer, refresh your browser.

## Troubleshooting

### "Section not recognized" error
The Section dropdown has a fixed list of options. Make sure you're using the dropdown, not typing a custom value.

### "Graduation Year must be a 4-digit year" error
For Alumni, enter the year as a 4-digit number, e.g., `2024`, not `'24` or `Class of 2024`.

### Photo didn't appear
- Check that the Drive link is correct (you should see the photo when you click it).
- Make sure it's set to "Anyone with the link can view".
- Wait 1-2 minutes after publishing; photos sometimes take a moment to download.

### The site doesn't look right
- Refresh your browser (Ctrl+R or Cmd+R).
- Check that the name and role match what you entered (sometimes spaces or special characters cause issues).

## Questions?

Ask the lab director or the person who set up this system. Do not try to edit the source code directly — just use the sheet and the Publish button.
