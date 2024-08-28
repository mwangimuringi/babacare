// Import necessary types
import { Appointment, Gender, Status } from './appwrite.types';

// Declare other types and interfaces
export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

export interface User extends CreateUserParams {
  $id: string;
}

export interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies?: string;
  currentMedication?: string;
  familyMedicalHistory?: string;
  pastMedicalHistory?: string;
  identificationType?: string;
  identificationNumber?: string;
  identificationDocument?: File; // Updated to File
  privacyConsent: boolean;
}

export type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note?: string; // Optional
};

export type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Partial<Appointment>; // Use Partial if only some fields are updated
  type: "create" | "schedule" | "cancel";
};

// Ensure Appointment includes all fields
export interface Appointment {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note?: string;
  cancellationReason?: string;
  // include other fields as needed
}
