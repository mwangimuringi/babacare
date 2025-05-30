import { useEffect, useState } from "react";

import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const { queryParam } = router.query; // Access query params like this
  
  // ...
}
const NewAppointmentPage = () => {
  const [patientId, setPatientId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const patientId = router.query.patientId as string;
    console.log("patientId", patientId);
    if (!patientId) {
      router.push("/patients");
    }
    setPatientId(patientId);
  }, [router.query.patientId]);

  if (!patientId) {
    return <div>Loading...</div>;
  }

  // const patient = await getPatientById(patientId);
  return <div>
    <h1>New Appointment</h1>
    <p>Patient ID: {patientId}</p>
    <p>This is the new appointment page.</p>
    <p>You can access the patient page by clicking the button below.</p>
    <button onClick={() => router.push(`/patients/${patientId}`)}>Go to Patient Page</button>
  </div>;
};

export default NewAppointmentPage;