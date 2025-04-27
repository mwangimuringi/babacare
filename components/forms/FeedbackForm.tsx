import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { getFeedbackSchema } from "@/lib/validation";
import { Feedback } from "@/types/appwrite.types";

import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { Form } from "../ui/form";
import { FormFieldType } from "@/types";

/**
 * FeedbackForm Component
 * @param userId - ID of the user submitting the feedback
 * @param patientId - ID of the patient for whom the feedback is being submitted
 * @param type - Type of form (create, update)
 * @param feedback - Existing feedback data (optional)