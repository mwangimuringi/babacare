import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  return <div>
    <h1>New Appointment</h1>
    <p>Patient ID: {patientId}</p>
    <p>This is the new appointment page.</p>
    <p>You can access the patient page by clicking the button below.</p>
    <button onClick={() => router.push(`/patients/${patientId}`)}>Go to Patient Page</button>
  </div>;
};

export default NewAppointmentPage;