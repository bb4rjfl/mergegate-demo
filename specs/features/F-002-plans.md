---
schema: mergegate/feature@1
id: F-002
title: Plans and order statuses
status: active
assertions:
  - id: A-F002-001
    claim: "The free plan allows 3 projects"
    type: const.equals
    source: src/plans.ts#PLANS.free.projects
    expect: 3
  - id: A-F002-002
    claim: "The free plan has 1 seat"
    type: const.equals
    source: src/plans.ts#PLANS.free.seats
    expect: 1
  - id: A-F002-003
    claim: "Pro costs $20"
    type: const.equals
    source: src/plans.ts#PLANS.pro.priceUsd
    expect: 20
  - id: A-F002-004
    claim: "Pro allows 50 projects"
    type: const.equals
    source: src/plans.ts#PLANS.pro.projects
    expect: 50
  - id: A-F002-005
    claim: "Order statuses are pending, paid, shipped, refunded"
    type: enum.members
    source: src/plans.ts#ORDER_STATUSES
    expect: { mode: exact, members: [pending, paid, shipped, refunded] }
---
Plan limits and order statuses as the README states them.
