'use client';

import { discordWebhook } from '@/actions/discord-webhook';
import { InterceptDialog } from '@/components/intercept-dialog';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Page = () => {
  const router = useRouter();

  const formAction = async (formData: FormData) => {
    const result = await discordWebhook(formData);
    if (result.success) {
      toast.success('Sent successfully!');
    } else {
      toast.error('Failed to send! Please send me a DM on Discord.');
    }
    router.back();
  };

  return (
    <InterceptDialog>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader className='grid gap-2'>
          <DialogTitle>Contact form</DialogTitle>
          <DialogDescription className='text-left'>
            If you would like a reply, please enter your email address.
            <br /> If not, it’s not required.
          </DialogDescription>
        </DialogHeader>
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
          <DialogFooter className='mt-6'>
            <Button type='submit' className='sm:w-28'>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </InterceptDialog>
  );
};

export default Page;
