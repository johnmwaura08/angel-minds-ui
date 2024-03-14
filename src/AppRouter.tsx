import { Routes, Route } from "react-router";
import { PersonalInfo } from "components/intakeAssessment/PersonalInfo";
import { TreatmentHistory } from "components/intakeAssessment/TreatmentHistory";

export const AppRouter = () => {
  return (
    <Routes>
      {/*
TODO: Add descendant routes for intake assessment
      */}
      <Route index element={<PersonalInfo />} />
      <Route element={<PersonalInfo />} path="/intake-assessment/personal" />
      <Route
        element={<TreatmentHistory />}
        path="/intake-assessment/treatment-history"
      />

      {/* <Route element={<LoginMain />} path="/login" />
      <Route element={<ChangePasswordForm />} path="/change-password" /> */}
    </Routes>
  );
};
