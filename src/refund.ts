/** How long after purchase an order can be refunded. The PRD and the README both state this value. */
export const REFUND_WINDOW_DAYS = 14;

export function canRefund(purchasedAt: Date, now: Date): boolean {
  return now.getTime() - purchasedAt.getTime() <= REFUND_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}
