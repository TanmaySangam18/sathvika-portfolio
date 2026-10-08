# How to Edit Your Portfolio

## The only file you ever need to touch: `lib/content.ts`

Every piece of text on your website — your name, job title, bio, experience entries, 
project descriptions, certifications, skills, interests, contact info — lives in this 
one file. You never need to touch any HTML, CSS, or code.

---

## How to edit on GitHub (no coding needed)

1. Go to your GitHub repository in your browser
2. Click on **`lib`** → **`content.ts`**
3. Click the **pencil icon** (✏️ Edit this file) in the top-right
4. Make your changes directly in the browser
5. Scroll down and click **"Commit changes"**
6. Your website updates automatically within ~60 seconds

---

## What you can change

### Your basic info (top of file)
```
name, title, email, phone, linkedin, location
```

### Hero section
The big text and buttons on the first screen.

### About section
- `paragraphs`: your bio (array of text blocks)
- `stats`: the four numbers shown (change value and label)

### Experience
Each job is an object with: `company`, `role`, `period`, `location`, `highlights` (bullet points).

To **add a new job**: copy one block and paste it above the others (most recent first).
To **remove a job**: delete its `{...}` block entirely.

### Projects
Each project has: `title`, `category`, `outcome`, `description`, `skills`, `featured`.

- Set `featured: true` for your best 2 projects (they appear as large cards)
- Set `featured: false` for others (they appear as smaller entries)

### Education
Each entry has: `degree`, `specialisation`, `institution`, `period`, `status`, `details`.

### Certifications
Each has: `title`, `issuer`, `date`, `note`.

### Skills
Three lists: `marketing`, `tools`, `soft`. Just add or remove items from each array.

### Achievements
Each has: `title`, `context`, `year`.

### Interests
Three interest blocks. Change `title` and `description`. The `icon` field accepts: 
`"camera"`, `"eye"`, or `"globe"`.

### Contact
Your email and LinkedIn for the contact section.

---

## Tips

- Wrap text in double quotes: `"Like this"`
- Each item in a list ends with a comma: `"Item one", "Item two",`
- Don't delete any `{`, `}`, `[`, or `]` — these are structure, not content
- If something looks broken after editing, check that all your quotes are matched

---

## To add a photo (optional)

1. Add your photo to the `public/` folder in the repo (name it `photo.jpg`)
2. Let Tanmay know and he can add it to the About section for you

---

## Deployment

The site is hosted on Vercel. Every time you commit a change to GitHub, Vercel 
automatically rebuilds and deploys within about 60 seconds. No action needed.
