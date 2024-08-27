import Image from "next/image";
import { redirect } from "next/navigation";

import { getUser } from "@/lib/actions/patient.actions";
import RegisterForm from "@/components/forms/RegisterForm";
import { SearchParamProps } from "@/types/index.d"; // Correct import path

const Register = async ({ params }: SearchParamProps) => {
  // Destructure userId from params
  const { userId } = params;

  // Fetch user data
  const user = await getUser(userId);

  // Optional: Redirect if a patient is already registered
  // const patient = await getPatient(userId);
  // if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={`/assets/icons/logo-full.svg`}
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          {/* Render the RegisterForm component with the fetched user */}
          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 BabaCare</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="register"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;