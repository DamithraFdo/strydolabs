import React from 'react'
import { Button } from './button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Input } from './input'
import { Label } from './label'

type Props = {}

function ContactUs({}: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className='text-4xl font-[700]'>Contact Us</CardTitle>
        <CardDescription>Call us to get more details information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Full Name" />
              <Input id="email" type="email" placeholder="Email Address" />
              <Input id="phone" type="tel" placeholder="Phone Number" />
              <Input id="message" placeholder="Message" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type='submit'>Submit</Button>
      </CardFooter>
    </Card>
  )
}

export default ContactUs