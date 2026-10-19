# DailyFlow — Bilingual Task Planner

A responsive Bengali/English task planner for GitHub Pages, with Supabase authentication and database persistence.

## Features

- Individual email/password accounts
- Private tasks per user (enforced with Supabase Row Level Security)
- Add, edit, delete, and complete tasks
- Daily, monthly calendar, and all-tasks views
- Search and status filtering
- Due date, optional time, category, priority, and notes
- Progress counts for the current view
- Bengali / English UI toggle
- Responsive mobile and desktop layout

## 1. Create a Supabase project

1. Go to [Supabase](https://supabase.com/) and create a project.
2. Open **SQL Editor** in the Supabase dashboard.
3. Open `supabase-schema.sql` from this project, copy all of it, and run it.
4. Go to **Project Settings → API** (or **Data API**) and copy:
   - Project URL
   - `anon` / publishable key
5. In `app.js`, replace:
   - `PASTE_YOUR_SUPABASE_PROJECT_URL`
   - `PASTE_YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY`

Only use the public anon/publishable key in browser code. **Never put a `service_role` key in this repository.** Row Level Security protects each user's tasks.

### Email sign-up settings

For a simple test, you can keep email confirmation enabled; users will need to confirm their email. In Supabase **Authentication → URL Configuration**, add your deployed GitHub Pages URL to **Site URL** and **Redirect URLs**, for example:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/`

Use your actual GitHub username and repository name.

If testing locally, you can also add `http://localhost:8000/**` to the allowed redirect URLs. For production, keep confirmation and secure password settings appropriate for your needs.

## 2. Publish with GitHub Pages

1. Create a new GitHub repository, e.g. `dailyflow-task-planner`.
2. Upload `index.html`, `styles.css`, `app.js`, `supabase-schema.sql`, and `README.md` to the repository root.
3. Open the repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main`, folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.
7. Add the final Pages URL in Supabase Authentication URL Configuration as described above.

GitHub Pages is static hosting; the database and authentication are handled by Supabase.

## 3. Test locally (optional)

From this folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The Supabase URL/key must already be configured.

## Important notes

- The app requires internet access for Supabase and the CDN.
- The database persists tasks across refreshes and devices when the user signs into the same account.
- Each task is scoped to the signed-in user; Row Level Security policies in `supabase-schema.sql` enforce this.
- Do not share a Supabase service-role key or commit secrets.
- This starter is a working scaffold, but you must configure your own Supabase project and GitHub repository. The app cannot be deployed into your accounts without you performing those account steps.
- For production use, test sign-up, email confirmation, task CRUD, and account separation before inviting users.
