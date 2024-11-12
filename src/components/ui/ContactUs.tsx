'use client'
import React, { FormEvent } from 'react'
import { Button } from './button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Input } from './input'
import { Textarea } from './textarea'
import { Loader2 } from 'lucide-react'

function ContactUs() {
  const [sending, setSending] = React.useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setSending(true)
    const response = await fetch('https://formsubmit.co/strydolabs@gmail.com', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if(response.ok) {
      setSending(false)
      console.log('Data:', data)
      return
    }
  }

  return (
    <Card className="md:w-full w-5/6">
      <CardHeader>
        <CardTitle className='text-4xl font-[700]'>Contact Us</CardTitle>
        <CardDescription>Call us to get more details information.</CardDescription>
      </CardHeader>
      <CardContent>
        {sending ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <Loader2 className='animate-spin'/>
            <p>Loading ...</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" name='name' placeholder="Full Name" />
                <Input id="email" name='email' type="email" placeholder="Email Address" />
                <Input id="phone" name='phone' type="tel" placeholder="Phone Number" />
                <Textarea id="message" name='message' placeholder="Message" />
                <Button type='submit'>Submit</Button>
              </div>
            </div>
          </form>
        )
        }
      </CardContent>
    </Card>
  )
}

export default ContactUs