import { useState } from "react";
import { useForm } from "@remix-run/react";
import { useNavigate } from "react-router-dom";
import { useFetcher } from "@remix-run/react";
import { useFetcher as useFetcher2 } from "@remix-run/react";
import { useFetcher as useFetcher3 } from "@remix-run/react";                       


import { useFetcher as useFetcher4 } from "@remix-run/react";
import { useFetcher as useFetcher5 } from "@remix-run/react";
import { useFetcher as useFetcher6 } from "@remix-run/react";

readonly fetcher = useFetcher();
readonly fetcher2 = useFetcher2();
readonly fetcher3 = useFetcher3();



const fetcher4 = useFetcher4();
const fetcher5 = useFetcher5();

return (
  <div>
    <h1>New Appointment</h1>
    <form method="post">
      <div>
        <label htmlFor="patient">Patient</label>
        <input
          name="patient"
          id="patient"
          type="text"
          value={data.patient}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="doctor">Doctor</label>
        <input
          name="doctor"
          id="doctor"
          type="text"
          value={data.doctor}
          onChange={handleChange}
        />