import { getToken } from "next-auth/jwt";
import { google } from "googleapis";

export default async function handler(req, res) {
  const token = await getToken({ req });
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const { summary, description, startTime, endTime } = req.body;

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: token.accessToken });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  try {
    const event = {
      summary,
      description,
      start: { dateTime: startTime, timeZone: "America/Toronto" },
      end: { dateTime: endTime, timeZone: "America/Toronto" },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    res.status(200).json({ event: response.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}