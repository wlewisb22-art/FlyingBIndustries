# Flying B Industries — Custom Golf Balls

Landing page for Flying B Industries' custom golf ball ordering service.

## Files in this site
- `index.html` — the website
- `officialFlyingBLogo.png` — the logo (referenced in nav and as favicon)
- `Wedding_Favors.png`, `Tournament_Logos.png`, `Corporate_Branding.png`, `Pet_Portraits.png`, `Memorial_Balls.png`, `Just_for_Fun.png` — gallery sample images

**Important:** You need to upload ALL of these files to GitHub for the site to work. Image files must be in the same folder as `index.html`.

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

## Adding or swapping example photos
The gallery now displays six sample photos. To add or replace images:

1. Save your new photo as JPG or PNG (square crops look best — about 1000×1000px is plenty).
2. Upload it to the same folder as `index.html` in your GitHub repo.
3. To **swap** an existing image: name your new file the same as the one you're replacing (e.g., `Wedding_Favors.png`). GitHub will overwrite it.
4. To **add a 7th category**: open `index.html`, find the gallery section, and copy one of the existing `<div class="gallery-item">...</div>` blocks. Update the `src=`, `alt=`, `<h4>`, and `<p>` to match your new image.

## Google Analytics

Google Analytics 4 is already configured with your Measurement ID `G-11YQDNWPYJ`. No setup needed — once your site is live on GitHub Pages, data will start flowing into your Analytics dashboard within 24–48 hours.

To view your stats, go to https://analytics.google.com and sign in with the Google account you used to create the property. You'll see how many people visit, where they're coming from, what country/state, what device they're using, and which sections they look at. All free.

If you ever need to swap the ID (for example, if you create a new property), open `index.html`, find the two places that say `G-11YQDNWPYJ` near the top, and replace both.

### Custom events being tracked

Beyond basic page-view tracking, the site fires custom events for high-value visitor actions. Find them in GA4 under **Reports → Engagement → Events**.

| Event | Fires when… | What you learn |
|---|---|---|
| `quote_request_click` | Someone clicks any email link to orders@flyingbindustries.com | How many people are reaching out, which button drove the click (CTA, footer, QR banner, etc.), and whether they were a QR visitor |
| `template_copy` | Someone clicks "Copy Template to Clipboard" in the fallback section | Strong intent signal — people who use the manual fallback are usually committed to emailing |
| `qr_visit` | Someone arrives via a `?qr=...` URL (a QR-code scan) | Total QR scans driving traffic; once you use unique ball IDs, you'll see which specific balls get found |
| `qr_banner_dismissed` | Someone clicks the × on the QR welcome banner | How many QR visitors aren't interested vs. engaged |
| `faq_open` | Someone expands an FAQ question | Which questions matter most to your visitors — useful for spotting gaps to address on the page |

Each event includes useful properties:
- `event_label` — distinguishes specific buttons, ball IDs, or questions
- `is_qr_visitor` — whether the person arrived via a QR scan (lets you compare conversion rates between QR-driven traffic and regular visitors)

### Marking events as conversions (recommended)

Custom events are tracked but don't count as "conversions" until you tell GA4 they should. To make `quote_request_click` and `template_copy` show up in conversion reports:

1. Wait until at least one real click has happened on your site (so the event appears in GA's list).
2. Go to GA4 → **Admin → Events** (in the property column).
3. Find `quote_request_click` in the list and toggle **Mark as conversion** to On.
4. Repeat for `template_copy`.

Once marked, GA4 will calculate your conversion rate (clicks ÷ visitors) automatically and show it in standard reports.

### Useful reports to check

Once data is flowing (24–48 hours after launch):

- **Reports → Engagement → Events** — total counts of every event above
- **Reports → Acquisition → Traffic acquisition** — where visitors come from (Google search, direct, social, QR codes)
- **Reports → Tech → Browser & Device** — mobile vs. desktop split
- **Realtime report** — see visitors and events as they happen, useful when testing

### Testing your analytics

To confirm events are firing without waiting 24 hours for the regular reports:

1. Open your site in one tab.
2. In another tab, open GA4 → **Reports → Realtime**.
3. On your site, click an email button or open an FAQ.
4. Within ~30 seconds, you'll see the event appear in the Realtime "Event count by Event name" widget.

If nothing appears, check that your Measurement ID is correct in `index.html` and that your browser doesn't have an ad blocker enabled.

## QR Codes for Golf Balls

The site recognizes visitors who arrive after scanning a QR code printed on one of your golf balls. They get a friendly welcome banner at the top, a different hero greeting, and the email templates automatically include a "where did you find it" section.

### URL format

Use this URL when generating your QR codes:

```
https://flyingbindustries.com?qr=1
```

That's all you need to start. Anyone who scans a ball with that QR code will see the "found a ball" experience.

### When you're ready to track individual balls or batches

The site already supports unique IDs. Just replace the `1` with whatever code you want — letters, numbers, or both. Examples:

```
https://flyingbindustries.com?qr=BATCH001     (a whole production run)
https://flyingbindustries.com?qr=2026-A-042   (year-batch-ball number)
https://flyingbindustries.com?qr=W042         (any short code you want)
```

When the visitor emails you, the ball's ID will automatically appear at the top of the email so you can match it to your records. No code changes needed — the page reads whatever value comes after `qr=` and uses it.

### Generating the QR codes

Any free QR generator works. A couple of options:
- https://www.qr-code-generator.com (no sign-up needed for basic codes)
- https://www.qrcode-monkey.com (more design options, can add your logo)

Paste your URL (e.g., `https://flyingbindustries.com?qr=1`), download the PNG, and send it to whoever's printing the balls. Use the highest error-correction level (usually labeled "H" or "30%") so the code still scans even after the ball gets scuffed up on a course.

### Testing it before printing

Just add `?qr=1` to your live URL in any browser to preview what a QR visitor sees:
- Live test: `https://flyingbindustries.com?qr=1`
- With a fake ball ID: `https://flyingbindustries.com?qr=TEST123`

You should see the gold-bordered navy banner at the top with "You found one of our golf balls!" and a different hero subtitle. Click "Tell us where →" or the regular Request a Quote button — both emails should now include the found-ball questions.

### How repeat scans work

Every QR scan shows the found-ball welcome — there's no "you've seen this before" suppression. Whether someone finds a different ball next week or rescans the same one, they always get the welcome banner and the found-ball email template. This is intentional: every find is a moment worth acknowledging.

The `?qr=...` parameter is automatically stripped from the URL bar after the page loads, so:
- Bookmarks save the clean URL (no QR data)
- Shared links don't carry the QR data forward
- Someone who later types the URL or uses autocomplete just sees the regular site

In short: scanning a ball is what triggers the experience, not visiting the URL. The URL parameter is consumed and removed on arrival.

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
