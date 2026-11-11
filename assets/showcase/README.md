# Zynvero Showcase Assets

The homepage product carousel is implemented and uses **six separate image assets**.

Upload the contents of the generated `zynvero-website-showcase-assets.zip` into `assets/showcase/` (relative to the repository root). Filenames are case-sensitive:

1. `dashboard-overview.webp` — actual CRM Overview inside MacBook composition
2. `lead-management.webp` — Leads page and filters
3. `ai-qualification.webp` — actual AI qualification, score, summary and review controls
4. `lead-scoring.webp` — stored CRM lead score and lead detail
5. `team-management.webp` — user roles and access
6. `channel-simulation.webp` — fictional simulated WhatsApp-style conversation

All originals come from the isolated **fictional** demonstration dataset and were prepared as 16:9 1600-pixel WEBP assets. These are marketing compositions, not raw browser screenshots. The UI currently shows legacy Atlas internal branding; avoid claiming that the deployed CRM is fully rebranded.

## Upload to GitHub
Drag the folder `assets/showcase` into GitHub's file uploader in the root of the **zynvero_crm** repository, or use a local git checkout and copy the files:
```bash
cp -R /path/to/unzipped/assets/showcase ./assets/
git add assets/showcase
git commit -m "Add approved Zynvero MacBook showcase images"
git push origin main
```

Until uploaded, the carousel renders a nonbroken explanatory fallback instead of missing image icons.

The autoplay pauses while focused/hovered and respects reduced-motion settings. Buttons, dots, and keyboard arrow navigation are supported.
