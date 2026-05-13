import { sql } from "@vercel/postgres";

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      read BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function saveMessage(name: string, email: string, message: string) {
  await initDb();
  await sql`
    INSERT INTO messages (name, email, message)
    VALUES (${name}, ${email}, ${message})
  `;
}

export async function getMessages() {
  await initDb();
  const { rows } = await sql`
    SELECT id, name, email, message, read, created_at
    FROM messages
    ORDER BY created_at DESC
  `;
  return rows;
}

export async function markAsRead(id: number) {
  await sql`UPDATE messages SET read = TRUE WHERE id = ${id}`;
}
