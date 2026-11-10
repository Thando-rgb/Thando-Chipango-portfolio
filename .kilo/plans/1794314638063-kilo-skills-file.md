# Plan: Create Kilo skills file

## Goal
Create a skills file for Kilo (the AI agent), listing all skills Kilo has, based on the `available_skills` from the system prompt. This is NOT for the portfolio website — it's for Kilo itself.

## Context / Findings
- No `.opencode` directory exists on this system (`C:\Users\THINKPAD\.opencode` not found)
- No opencode skills file exists anywhere accessible
- No skills file exists under `C:\Users\THINKPAD\.config\kilo/`
- The only source of truth for Kilo's skills is the `available_skills` list in the system prompt
- I am currently in Plan Mode and cannot implement source changes or run mutating commands

## Kilo's Available Skills (from system prompt)
1. aiq-deploy — Install/deploy/run/validate/troubleshoot/stop NVIDIA AI-Q Blueprint infrastructure
2. aiq-research — Run deep research or AI-Q research through NVIDIA AI-Q Blueprint backend
3. cuopt-user-rules — End-user rules for NVIDIA cuOpt (routing/LP/MILP/QP/install/server)
4. dynamo-interconnect-check — Validate Dynamo deployment's NIXL/UCX/NCCL interconnect for disaggregated serving
5. dynamo-router-starter — Start/patch Dynamo router modes and run router endpoint smoke checks
6. graphify-windows — Any input → knowledge graph → clustered communities → HTML + JSON + audit report
7. kilo-config — Guide for Kilo configuration (config paths, kilo.json, commands, agents, skills, permissions, MCPs)
8. emoclaw-user-get-started — Install NemoClaw, launch sandbox, run first agent prompt
9. omniverse-cad-to-simready — CAD/source-asset to SimReady workflow coordination
10. omniverse-realtime-viewer — Top-level router for Omniverse Realtime Viewer USD app requests
11. omniverse-usd-performance-tuning — USD performance diagnosis and optimization
12. physical-ai-infrastructure-setup-and-resilient-scaling — Set up/scale/validate/harden NVIDIA physical AI infrastructure
13. physical-ai-neural-reconstruction — Router for NVIDIA NuRec/NRE (USDZ rendering, NCore conversion, 3DGS, gRPC sensor sim)
14. reverse-engineer-anything — Reverse engineer native, managed, Electron/JavaScript, packaged, firmware, browser targets

Total: 14 skills

## Proposed Tasks
1. Create `C:\Users\THINKPAD\.config\kilo/skills.md` (or appropriate location) documenting all 14 Kilo skills with name, description, location, and trigger
2. Optionally create `C:\Users\THINKPAD\.opencode/skills.md` mirroring the same content
3. Confirm the skills file format matches Kilo conventions (SKILL.md style like existing skills)

## Open Questions (need user input before implementation)
1. **Destination path**: Where should the Kilo skills file live? Options:
   - `C:\Users\THINKPAD\.config\kilo/skills.md` (alongside kilo.jsonc)
   - `C:\Users\THINKPAD\.opencode/skills.md` (would require creating `.opencode` dir)
   - `C:\Users\THINKPAD\.kilo/skills.md` (project-local)
2. **Format**: Should it follow the existing SKILL.md format (with `name`, `description`, `location`, `trigger` fields)?
3. **Source**: Since no opencode skills file exists, should the content be derived solely from Kilo's `available_skills` list?

## Validation
- Confirm the file is created at the agreed path
- Confirm all 14 skills from `available_skills` are listed
- Confirm no portfolio files are modified

## Rollback
- N/A (new file creation only)

## Implementation Note
This plan requires an implementation-capable agent (not Plan Mode) to create the file(s).