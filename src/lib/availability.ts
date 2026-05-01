export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];

export type SlotAvailability = {
  slot: TimeSlot;
  available: boolean;
};

export async function getAvailableSlots(
  _date: string
): Promise<SlotAvailability[]> {
  return TIME_SLOTS.map((slot) => ({ slot, available: true }));
}
