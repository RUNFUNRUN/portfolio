'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.preprocess(
    (value) =>
      typeof value === 'string' && value.trim() === '' ? undefined : value,
    z.email().optional(),
  ),
  content: z.string(),
});

type ResponseJson = {
  success: boolean;
};

export const discordWebhook = async (formData: FormData) => {
  try {
    if (!process.env.DISCORD_WEBHOOK_URL) {
      throw new Error('DISCORD_WEBHOOK_URL is not defined');
    }

    const { name, email, content } = schema.parse(
      Object.fromEntries(formData.entries()),
    );

    const result = await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Contact',
        content: email
          ? `name: ${name}\nemail: ${email}\n\`\`\`\n${content}\n\`\`\``
          : `name: ${name}\n\`\`\`\n${content}\n\`\`\``,
      }),
    });

    if (!result.ok) throw new Error('The request failed');
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('Zod validtion error:', err.message);
    } else if (err instanceof Error) {
      console.error('Error:', err.message);
    } else {
      console.error(err);
    }

    return { success: false } satisfies ResponseJson;
  }

  return { success: true } satisfies ResponseJson;
};
