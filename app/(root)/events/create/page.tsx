import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import { log } from 'console';
import React from 'react'

const CreateEvent = () => {
    const {sessionClaims}=auth();

    const userId=sessionClaims?.userId as string

    console.log(userId)
  return (
    <>
    <section>
        <h3 className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            Event
        </h3>
    </section>
    <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
    </div>
    </>
  )
}

export default CreateEvent