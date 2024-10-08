
import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { DataTable } from "@/components/tables/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { columns } from "@/components/tables/columns";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src={`/assets/icons/logo-full.svg`}
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

          {/* Getting data from backend */}
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;


// import Image from "next/image";
// import Link from "next/link";
// import { StatCard } from "@/components/StatCard";
// import { DataTable } from "@/components/tables/DataTable";
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
// import { columns } from "@/components/tables/columns";

// // Define the structure of the appointments data
// interface AppointmentData {
//   scheduledCount: number;
//   pendingCount: number;
//   cancelledCount: number;
//   documents: any[]; // Adjust type as necessary
// }

// const AdminPage = async () => {
//   // Fetch data from the backend
//   let appointments: AppointmentData | null = null;

//   try {
//     appointments = await getRecentAppointmentList();
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//   }

//   // Default values for when appointments data is not available
//   const defaultAppointments: AppointmentData = {
//     scheduledCount: 0,
//     pendingCount: 0,
//     cancelledCount: 0,
//     documents: [],
//   };

//   // Use default values if appointments is null or undefined
//   const data = appointments || defaultAppointments;

//   return (
//     <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//       <header className="admin-header">
//         <Link href="/" className="cursor-pointer">
//           <Image
//             src={`/assets/icons/logo-full.svg`}
//             height={32}
//             width={162}
//             alt="logo"
//             className="h-8 w-fit"
//           />
//         </Link>
//         <p className="text-16-semibold">Admin Dashboard</p>
//       </header>

//       <main className="admin-main">
//         <section className="w-full space-y-4">
//           <h1 className="header">Welcome 👋</h1>
//           <p className="text-dark-700">
//             Start the day with managing new appointments
//           </p>
//         </section>

//         {/* Render StatCards with fallback data */}
//         <section className="admin-stat">
//           <StatCard
//             type="appointments"
//             count={data.scheduledCount}
//             label="Scheduled appointments"
//             icon={"/assets/icons/appointments.svg"}
//           />
//           <StatCard
//             type="pending"
//             count={data.pendingCount}
//             label="Pending appointments"
//             icon={"/assets/icons/pending.svg"}
//           />
//           <StatCard
//             type="cancelled"
//             count={data.cancelledCount}
//             label="Cancelled appointments"
//             icon={"/assets/icons/cancelled.svg"}
//           />
//         </section>

//         {/* Render DataTable with fallback data */}
//         <DataTable columns={columns} data={data.documents} />
//       </main>
//     </div>
//   );
// };

// export default AdminPage;
