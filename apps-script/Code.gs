const SPREADSHEET_ID = "PASTE_YOUR_SPREADSHEET_ID_HERE";
const SHEET_NAME = "Painting Signups";

function doGet() {
  return jsonOutput_({
    ok: true,
    message: "Painting signup web app is running.",
  });
}

function doPost(e) {
  const payload = normalizePayload_(e);
  const sheet = getSheet_();

  ensureHeader_(sheet);
  sheet.appendRow([
    new Date(),
    payload.full_name,
    payload.phone_number,
    payload.whatsapp_id,
    payload.locale,
    payload.source,
  ]);

  return jsonOutput_({
    ok: true,
    message: "Signup saved.",
  });
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  return sheet || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    "timestamp",
    "full_name",
    "phone_number",
    "whatsapp_id",
    "locale",
    "source",
  ]);
}

function normalizePayload_(e) {
  const params = e && e.parameter ? e.parameter : {};

  return {
    full_name: String(params.full_name || "").trim(),
    phone_number: String(params.phone_number || "").trim(),
    whatsapp_id: String(params.whatsapp_id || "").trim(),
    locale: String(params.locale || "de").trim(),
    source: String(params.source || "bloom-birthday-invite").trim(),
  };
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
