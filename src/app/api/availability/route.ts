import { getAvailableSlots } from "@/lib/availability";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") ?? "";
  const slots = await getAvailableSlots(date);
  return Response.json({ date, slots });
}
