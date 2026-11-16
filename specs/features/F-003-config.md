---
schema: mergegate/feature@1
id: F-003
title: Server defaults
status: active
assertions:
  - id: A-F003-001
    claim: "The server listens on port 8080 unless PORT is set"
    type: env.default
    source: src/config.ts
    expect: { name: PORT, value: "8080" }
  - id: A-F003-002
    claim: "Sessions last 30 minutes unless SESSION_TTL_MINUTES is set"
    type: env.default
    source: src/config.ts
    expect: { name: SESSION_TTL_MINUTES, value: "30" }
---
Server defaults as the README states them.
