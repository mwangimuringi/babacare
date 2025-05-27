import Image from "next/image";

import { getPatient } from "@/lib/actions/patient.actions";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { SearchParamProps } from "@/types/index.d"; 
import { useRouter } from "next/router";
import { useEffect } from "react";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="top-container max-w-[860px] flex-1 justify-between">
          <div className="patient-info">
            <h1 className="patient-name text-2xl font-bold">
              {patient?.firstName} {patient?.lastName}
            </h1>
            <p className="patient-id text-xl font-bold">
              {patient?.$id}
            </p>
          </div>

          <div className="search-container">
            <Image
              src={`/assets/icons/search.svg`}
              height={24}
              width={24}
              alt="search"
              className="search-icon"
            />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>
          </div>
        
        {/* Appointment Form */}
        <AppointmentForm />
      </section>
    </div>
  );
{"}"};

export default Appointment;