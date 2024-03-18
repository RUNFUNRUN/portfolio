'use client';

import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { discordWebhook } from '../_actions/discordWebhook';

export const Form = () => {
  const [loading, setLoading] = useState(false);

  return (
    <form
      className='test-center'
      action={discordWebhook}
      onSubmit={() => setLoading(true)}
    >
      <Input
        isRequired
        size='lg'
        type='text'
        name='name'
        label='Name'
        variant='bordered'
        className='my-3 sm:my-6 lg:my-9 mx-auto max-w-lg'
      />
      <Input
        size='lg'
        type='email'
        name='email'
        label='Email'
        variant='bordered'
        className='my-3 sm:my-6 lg:my-9 mx-auto max-w-lg'
      />
      <Textarea
        isRequired
        size='lg'
        minRows={30}
        name='content'
        label='Content'
        labelPlacement='outside'
        variant='bordered'
        className='my-3 sm:my-6 lg:my-9 mx-auto max-w-4xl'
      />
      <Button
        type='submit'
        color='primary'
        radius='full'
        size='lg'
        className='my-3 sm:my-6 lg:my-9 w-40'
        isLoading={loading}
      >
        {loading ? '' : 'Submit'}
      </Button>
    </form>
  );
};
