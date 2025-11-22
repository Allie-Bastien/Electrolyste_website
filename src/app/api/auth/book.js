import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, startTime, endTime } = req.body;
  if (!name || !email || !startTime || !endTime)
    return res.status(400).json({ error: "Missing fields" });

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: `Appointment with ${name}`,
      description: `Client email: ${email}`,
      start: { dateTime: startTime, timeZone: "America/Toronto" },
      end: { dateTime: endTime, timeZone: "America/Toronto" },
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: event,
    });

    res.status(200).json({ success: true, eventId: response.data.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create event" });
  }
}