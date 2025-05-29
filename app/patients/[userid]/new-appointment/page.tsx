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
  return <div>New Appointment Page</div>;
};

export default NewAppointmentPage;