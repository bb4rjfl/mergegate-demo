---
schema: mergegate/feature@1
id: F-001
title: Refund window
status: active
code_refs:
  - path: src/refund.ts
    symbols: [REFUND_WINDOW_DAYS, canRefund]
assertions:
  - id: A-F001-001
    claim: "Orders can be refunded within 7 days of purchase"
    type: const.equals
    source: src/refund.ts#REFUND_WINDOW_DAYS
    expect: 7
---
Orders can be refunded within 7 days of purchase (README, docs/PRD-refunds.md).
