export const PLANS = {
  free: { projects: 3, seats: 1, priceUsd: 0 },
  pro: { projects: 50, seats: 10, priceUsd: 20 },
} as const;

export const ORDER_STATUSES = ['pending', 'paid', 'shipped', 'refunded'] as const;
