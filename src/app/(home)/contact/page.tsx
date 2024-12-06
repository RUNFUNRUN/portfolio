'use client';

import { discordWebhook } from '@/actions/discord-webhook';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const runtime = 'edge';

const Page = () => {
  const router = useRouter();

  const formAction = async (formData: FormData) => {
    const result = await discordWebhook(formData);
    if (result.success) {
      toast.success('Sent successfully!');
    } else {
      toast.error('Failed to send! Please send me a DM on Discord.');
    }
    router.push('/');
  };

  return (
    <>
      <CardContent className='sm:max-w-[600px]'>
        <CardHeader className='grid gap-2 px-0 text-lg'>
          <CardTitle className='flex justify-between'>
            <span>Contact form</span>
            <Link href='/' className='underline'>
              Go home
            </Link>
          </CardTitle>
          <CardDescription className='text-left'>
            If you would like a reply, please enter your email address.
            <br /> If not, it’s not required.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <div className='grid gap-4'>
            <div className='space-y-1'>
              <Label htmlFor='name'>
                Name
                <span className='ml-1 text-muted-foreground'>(required)</span>
              </Label>
              <Input id='name' name='name' required />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='email'>E-mail</Label>
              <Input id='email' name='email' type='email' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='content'>
                Content
                <span className='ml-1 text-muted-foreground'>(required)</span>
              </Label>
              <Textarea id='content' name='content' rows={5} required />
            </div>
          </div>
          <CardFooter className='mt-6 p-0 sm:justify-end'>
            <Button type='submit' className='w-full sm:w-28'>
              Submit
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </>
  );
};

export default Page;
