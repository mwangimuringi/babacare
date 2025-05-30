"use client"; // Required for client-side hooks (useSearchParams)

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewAppointmentPage = () => {
  const [patientId, setPatientId] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const patientId = searchParams.get("patientId"); // Use searchParams.get() instead of router.query
    console.log("patientId", patientId); // Log the patientId to the console

    if (!patientId) {
      router.push("/patients");
    } else {
      setPatientId(patientId);
      console.log("patientId", patientId);
    }
  }, [searchParams, router]); // Depend on searchParams instead of router.query

  if (!patientId) {
    return <div>
      Loading...
      <p>This is the new appointment page.</p>
    </div>;
  }

  return (
    <div>
      <h1>New Appointment</h1>
      <p>Patient ID: {patientId}</p>
      <p>This is the new appointment page.</p>
      <p>You can access the patient page by clicking the button below.</p>
      <button onClick={() => router.push(`/patients/${patientId}`)}>
        Go to Patient Page
      </button>
    </div>
  );
};

export default NewAppointmentPage;
