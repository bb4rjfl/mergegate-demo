# mergegate-demo

A tiny shop backend used to show [MergeGate](https://mergegate.tacita.cloud): docs that state values from
the code, and a pull request check that fails when a PR makes one of those statements false.

## What the docs promise

- Orders can be refunded within **7 days** of purchase (`src/refund.ts`).
- The free plan allows **3 projects** and **1 seat**; Pro allows **50 projects** and **10 seats** for **$20** (`src/plans.ts`).
- Order statuses: `pending`, `paid`, `shipped`, `refunded`.
- The server listens on port **8080** unless `PORT` is set; sessions last **30 minutes** unless `SESSION_TTL_MINUTES` is set.

Each of these is pinned by a spec in [`specs/features/`](specs/features). See the open pull request
"Extend refunds to 14 days" for what MergeGate says when one of them changes.
