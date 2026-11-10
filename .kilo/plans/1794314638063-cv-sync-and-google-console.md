# Plan: Sync onsite CV with PDF CV and add Google Console snippet

## Context
- Repo: `C:\Users\THINKPAD\Desktop\portfolio-website-redesign`
- Remote: `https://github.com/Thando-rgb/Thando-Chipango-portfolio.git` (origin, push+fetch)
- Branch: `main` (clean, up to date with origin/main)
- CV source: `C:\Users\THINKPAD\Desktop\Thando\001 - Personal\CV\THANDO_CHIPANGO_CV.docx` (PDF counterpart exists; DOCX extracted successfully)
- Onsite CV data lives in `src/data.ts` (contact, experience, education, skills, projects)
- `index.html` has no Google Console snippet below `<title>`; only JSON-LD schema block follows the title

## Decisions (from user)
1. **CV update scope**: Update existing `data.ts` fields only — do NOT add new website sections (Professional Summary, Leadership, References).
2. **Google Console**: Add a Google Console/Analytics snippet just below the `<title>` tag in `index.html`.

## Discrepancies to fix in `src/data.ts`

### Education dates
- Level 5: `EXPECTED 2027` → `Expected 2028`
- Level 4: `2025` → `2026`
- Level 3: `2025` → `2025` (no change)

### Missing experience entry
Add to `experience[]`:
- Assistant Farm Manager, TN Farms, 2020 – Present, Lilongwe, Malawi
- Details: poultry/pig/crop farm operations, ~100 chickens + 4 pigs, farm records, stock monitoring, operational planning, supervise farm workers

### Missing project entry
Add to `projects[]`:
- FoodFusion – Full-Stack Recipe Platform, PHP/MySQL/JavaScript/CSS, academic project
- Details: user registration/login, recipes, reviews, bcrypt hashing, CSRF protection, PDO prepared statements, image-upload validation

### Missing skills
Add to `skills[]` Data & Analytics items: REDCap, ODK, SurveyCTO, MySQL, MongoDB, SQLite, STATA

## Tasks
1. `index.html`: Insert Google Console/Analytics snippet immediately below `</title>` (line 29)
2. `src/data.ts`: Fix education dates (Level 5 → 2028, Level 4 → 2026)
3. `src/data.ts`: Add Assistant Farm Manager (TN Farms) experience entry
4. `src/data.ts`: Add FoodFusion project entry
5. `src/data.ts`: Add REDCap, ODK, SurveyCTO, MySQL, MongoDB, SQLite, STATA to Data & Analytics skills

## Validation
- Run `npm run lint` (ESLint)
- Run `npm run typecheck` (tsc)
- Run `npm test` (vitest)
- Confirm `public/resume.pdf` href (`/resume.pdf` in `contact.cv`) still resolves

## Rollback
- `git` is available; revert via `git checkout` if needed before committing. No commits will be made unless explicitly requested.

## Open questions
- Exact Google Console/Analytics snippet content to insert (measurement ID, gtag config). User to provide or confirm placeholder.