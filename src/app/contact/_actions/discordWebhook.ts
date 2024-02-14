'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  name: z.string({
    invalid_type_error: 'Invalid Name',
  }),
  email: z
    .string({
      invalid_type_error: 'Invalid Email',
    })
    .optional(),
  content: z.string({
    invalid_type_error: 'Invalid Content',
  }),
});

export const discordWebhook = async (formData: FormData) => {
  try {
    if (!process.env.DISCORD_WEBHOOK_URL) {
      throw new Error('DISCORD_WEBHOOK_URL is not defined');
    }
    const { name, email, content } = schema.parse(Object.fromEntries(formData.entries()));

    await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Contact',
        content: email
          ? 'name: ' + name + '\n' + 'email: ' + email + '\n```\n' + content + '\n```'
          : 'name: ' + name + '\n' + '```\n' + content + '\n```',
      }),
    });
    console.log('Discord webhook sent');
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('Zod validtion error:', err.errors);
    } else {
      console.error('Unexpected error:', err);
    }
    console.log('Discord webhook failed');
    redirect('/contact/result?success=false');
  }
  redirect('/contact/result?success=true');
};
