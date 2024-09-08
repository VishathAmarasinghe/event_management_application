import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import { log } from "console";
import React from "react";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  console.log(userId);
  return (
    <>
      <section>
        <section className="bg-[#f5f5e9] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <h3 className="wrapper h3-bold text-center sm:text-left">
            Create Event
          </h3>
        </section>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
