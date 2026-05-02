# Flying B Industries — Custom Golf Balls

Landing page for Flying B Industries' custom golf ball ordering service.

## Files in this site
- `index.html` — the website
- `officialFlyingBLogo.png` — the logo (referenced in nav and as favicon)

**Important:** You need to upload BOTH files to GitHub for the site to work properly. The logo file must be in the same folder as `index.html`.

## Putting this on GitHub Pages (free hosting)

### Option 1: User site (gives you a clean URL like `yourusername.github.io`)
1. Go to https://github.com and sign in (or create a free account).
2. Click **+ → New repository**.
3. Name it exactly: `yourusername.github.io` (replace with your actual GitHub username).
4. Make it **Public**. Check "Add a README file".
5. Click **Add file → Upload files** and upload BOTH `index.html` AND `officialFlyingBLogo.png`.
6. Commit the change.
7. Visit `https://yourusername.github.io` — your site is live (may take 1–2 minutes the first time).

### Option 2: Project site (URL like `yourusername.github.io/golf-balls`)
1. Create any public repo (e.g. `golf-balls`).
2. Upload both files.
3. Go to **Settings → Pages**.
4. Under "Source", select branch `main` and folder `/ (root)`.
5. Save. Your URL will appear at the top of the Pages settings page.

## Adding a custom domain later
If you buy a domain like `flyingbindustries.com`:
1. In your repo, go to **Settings → Pages → Custom domain** and enter your domain.
2. At your domain registrar, add a CNAME record pointing to `yourusername.github.io`.
3. Enable "Enforce HTTPS" once it's available.

## Adding example photos later
When you're ready to add photos of completed orders to the Examples section:
1. Take/save photos as JPG or PNG (square crops look best).
2. Upload them to the same folder as `index.html` (e.g., `example-1.jpg`, `example-2.jpg`).
3. Open `index.html` and find the section that starts `<section class="examples"`.
4. Replace each `<div class="gallery-item">...</div>` block with: `<img src="example-1.jpg" alt="Custom golf ball example" class="gallery-item" style="object-fit:cover;" />`
5. Save and re-upload.

## Google Analytics

Google Analytics 4 is already configured with your Measurement ID `G-11YQDNWPYJ`. No setup needed — once your site is live on GitHub Pages, data will start flowing into your Analytics dashboard within 24–48 hours.

To view your stats, go to https://analytics.google.com and sign in with the Google account you used to create the property. You'll see how many people visit, where they're coming from, what country/state, what device they're using, and which sections they look at. All free.

If you ever need to swap the ID (for example, if you create a new property), open `index.html`, find the two places that say `G-11YQDNWPYJ` near the top, and replace both.

## Editing the site
The whole site is one HTML file. Open `index.html` in any text editor (VS Code is free and great) to change copy, colors, or layout. Push the changes back to GitHub and they go live in seconds.

## Need help expanding?
This is a starter. Easy upgrades when you're ready:
- Add a photo gallery of past work (see above)
- Add a contact form that emails you (see below)
- Add Google Analytics to track visitors
- Move to a real CMS (Squarespace, Webflow) when volume justifies it

## About forms that auto-email you
GitHub Pages is "static" — it can't run server code on its own — so you can't have a form that emails you without a free third-party service. Two options:

**Option 1: Formspree (recommended if you want a form).** Sign up free at formspree.io. They give you a URL. You add a `<form action="that-url" method="POST">` block to your site. When someone submits, Formspree emails the contents to you. Free tier: 50 submissions/month, includes file uploads.

**Option 2: Stick with the email button (current setup).** Clicking the button opens the customer's own email app with a pre-filled message ready for them to attach images and send. Simpler, no third-party service, and image attachments work natively. The downside: it requires the customer to have an email app set up on their device (most people do).

For your use case — where image attachments are essential — the current email button approach is actually cleaner than a form. Forms get awkward with file uploads. But if you want me to add a Formspree form as a backup option, just say the word.
