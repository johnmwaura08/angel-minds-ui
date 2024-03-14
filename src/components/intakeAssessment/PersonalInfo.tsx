import { Button, Grid, Typography } from "@mui/material";
import { Form, Field } from "react-final-form";

import { useIntakeAssessmentStyles } from "./useIntakeAssesmentStyles";
import { IAngelMindsSelectOption } from "components/InputControls/types";
import { TextAreaAdapter } from "components/formAdaptors/TextAreaAdapter";
import { TextFieldAdapter } from "components/formAdaptors/TextFieldAdapter";
import { SelectFieldAdapter } from "components/formAdaptors/selectFieldAdapter";
import { useNavigate } from "react-router-dom";
import {
  AngelMindsHelperFunctions,
  ToastTypeEnum,
} from "components/utils/util";
import React from "react";

interface IPersonalInfoAndPresentingProblem {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  ethnicity: string;
  maritalStatus: string;
  phone: string;
  alternatePhone: string;
  email: string;
  referredBy: string;
  therapistPreference: string;
  presentLifeStressors: string;
  problemDescription: string;
  attemptedSolutionsOfPresentingProblem: string;
  clientExpectations: string;
  clientStrengths: string;
  clientNeeds: string;
  clientInterests: string;
  caseNumber: string;
}

// const defaultValues: IPersonalInfoAndPresentingProblem = {
//   firstName: "",
//   lastName: "",
//   dateOfBirth: "",
//   gender: "",
//   ethnicity: "",
//   maritalStatus: "",
//   phone: "",
//   alternatePhone: "",
//   email: "",
//   referredBy: "",
//   therapistPreference: "",
//   presentLifeStressors: "",
//   presentingProblem: "",
//   attemptedSolutionsOfPresentingProblem: "",
//   clientExpectations: "",
//   clientStrengths: "",
//   clientNeeds: "",
//   clientInterests: "",
//   caseNumber: "",
// };

const genderOptions = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Other",
    value: "Other",
  },
  {
    label: "Prefer not to say",
    value: "Prefer not to say",
  },
] as IAngelMindsSelectOption[];

const maritalStatusOptions = [
  {
    label: "Single",
    value: "Single",
  },
  {
    label: "Married",
    value: "Married",
  },
  {
    label: "Divorced",
    value: "Divorced",
  },
  {
    label: "Widowed",
    value: "Widowed",
  },
  {
    label: "Separated",
    value: "Separated",
  },
  {
    label: "Other",
    value: "Other",
  },
] as IAngelMindsSelectOption[];

const therapistPreferenceOptions = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "No Preference",
    value: "No Preference",
  },
] as IAngelMindsSelectOption[];

export const PersonalInfo = () => {
  const classes = useIntakeAssessmentStyles();
  const navigate = useNavigate();

  const [formState, setFormState] =
    React.useState<IPersonalInfoAndPresentingProblem>({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      ethnicity: "",
      maritalStatus: "",
      phone: "",
      alternatePhone: "",
      email: "",
      referredBy: "",
      therapistPreference: "",
      presentLifeStressors: "",
      problemDescription: "",
      attemptedSolutionsOfPresentingProblem: "",
      clientExpectations: "",
      clientStrengths: "",
      clientNeeds: "",
      clientInterests: "",
      gender: "",
      caseNumber: "22VQ65HY",
    });

  const onSubmit = async (values: IPersonalInfoAndPresentingProblem) => {
    console.log("values", values);

    await Promise.resolve(() => setTimeout(() => {}, 300));
    AngelMindsHelperFunctions.toaster(
      ToastTypeEnum.Success,
      "Form saved successfully"
    );
    navigate("/intake-assessment/treatment-history");
  };
  return (
    <div>
      {/**
       * todo - form title different size in different view ports
       */}

      <Grid display="flex">
        <Typography variant="h6" component="h4" gutterBottom>
          ADULT PSYCHOSOCIAL EVALUATION
        </Typography>
        {!AngelMindsHelperFunctions.stringIsNullOrEmpty(
          formState.caseNumber
        ) && (
          <Typography variant="h6" component="h4" gutterBottom marginLeft={12}>
            CASE #:{" "}
            <span
              style={{
                color: "#33A6DE",
              }}
            >
              <strong>GWFF123474</strong>
            </span>
          </Typography>
        )}
      </Grid>
      <Form
        onSubmit={async (values) => {
          await onSubmit(values);
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          ethnicity: "",
          maritalStatus: "",
          phone: "",
          alternatePhone: "",
          email: "",
          referredBy: "",
          therapistPreference: "",
          presentLifeStressors: "",
          presentingProblem: "",
          attemptedSolutionsOfPresentingProblem: "",
          clientExpectations: "",
          clientStrengths: "",
          clientNeeds: "",
          clientInterests: "",
        }}
        validate={(values: IPersonalInfoAndPresentingProblem) => {
          const errors = {};
          console.error("values", values);
          return errors;
        }}
        render={({
          handleSubmit,
          errors,
          form,
          submitting,
          pristine,
          values,
        }) => {
          console.log(form, submitting, pristine, values, errors);
          return (
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Grid container className={classes.container} spacing={2}>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="firstName"
                    component={TextFieldAdapter}
                    inputLabel="First Name"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "First Name",
                    }}
                  />
                </Grid>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="lastName"
                    component={TextFieldAdapter}
                    inputLabel="Last Name"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "Last Name",
                    }}
                  />
                </Grid>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="dateOfBirth"
                    type="date"
                    component={TextFieldAdapter}
                    inputLabel="D.O.B"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "D.O.B",
                    }}
                  />
                </Grid>
                <Grid item>
                  <div className={classes.select}>
                    <Field
                      fullWidth
                      name="gender"
                      isRequired
                      component={SelectFieldAdapter}
                      label="Object Type"
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                        "aria-label": "Sex",
                      }}
                      inputLabel="Sex"
                      options={genderOptions}
                    />
                  </div>
                </Grid>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="ethnicity"
                    component={TextFieldAdapter}
                    inputLabel="Ethnicity"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "Ethnicity",
                    }}
                  />
                </Grid>
                <Grid item>
                  <div className={classes.select}>
                    <Field
                      fullWidth
                      name="maritalStatus"
                      isRequired
                      component={SelectFieldAdapter}
                      label="Marital Status"
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                        "aria-label": "Marital Status",
                      }}
                      inputLabel="Marital Status"
                      options={maritalStatusOptions}
                    />
                  </div>
                </Grid>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="email"
                    component={TextFieldAdapter}
                    inputLabel="Email"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "Email",
                    }}
                  />
                </Grid>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="phone"
                    component={TextFieldAdapter}
                    inputLabel="Phone"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "Phone",
                    }}
                  />
                </Grid>
                <Grid item className={classes.quarterField}>
                  <Field
                    fullWidth
                    name="alternatePhone"
                    component={TextFieldAdapter}
                    inputLabel="ALternate Phone"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                      "aria-label": "ALternate Phone",
                    }}
                  />
                </Grid>
                <Grid item>
                  <div className={classes.select}>
                    <Field
                      fullWidth
                      name="therapistPreference"
                      isRequired
                      component={SelectFieldAdapter}
                      label="What is your preference? (i.e Male/Female Therapist)"
                      InputProps={{
                        classes: {
                          input: classes.input,
                        },
                        "aria-label":
                          "What is your preference? (i.e Male/Female Therapist)",
                      }}
                      inputLabel="What is your preference? (i.e Male/Female Therapist)"
                      options={therapistPreferenceOptions}
                    />
                  </div>
                </Grid>
                <Grid item className={classes.halfField}>
                  <Field
                    fullWidth
                    name="presentLifeStressors"
                    component={TextAreaAdapter}
                    label="Present Life Situation(s)/Stressors"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="Present Life Situation(s)/Stressors"
                  />
                </Grid>
                <Grid
                  container
                  className={classes.container}
                  spacing={2}
                ></Grid>
              </Grid>
              <Typography variant="h6" component="h4" gutterBottom>
                PRESENTING PROBLEM:
              </Typography>
              <Grid container className={classes.container} spacing={2}>
                <Grid item className={classes.fullField}>
                  <Field
                    fullWidth
                    name="problemDescription"
                    component={TextAreaAdapter}
                    label="What is the problem you are seeking help with? (Mental Health/Substance Abuse Issues) (Including date of onset and history)"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="What is the problem you are seeking help with? (Mental Health/Substance Abuse Issues) (Including date of onset and history)"
                  />
                </Grid>
                <Grid item className={classes.halfField}>
                  <Field
                    fullWidth
                    name="attemptedSolutionsOfPresentingProblem"
                    component={TextAreaAdapter}
                    // label="What has been done previously to resolve this problem?"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="What has been done previously to resolve this problem?"
                  />
                </Grid>
                <Grid item className={classes.halfField}>
                  <Field
                    fullWidth
                    name="clientExpectations"
                    component={TextAreaAdapter}
                    // label="What has been done previously to resolve this problem?"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="What does client want and expect in terms of services?"
                  />
                </Grid>
                <Grid item className={classes.halfField}>
                  <Field
                    fullWidth
                    name="clientStrengths"
                    component={TextAreaAdapter}
                    // label="What has been done previously to resolve this problem?"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="What does client think are their strengths?"
                  />
                </Grid>
                <Grid item className={classes.halfField}>
                  <Field
                    fullWidth
                    name="clientNeeds"
                    component={TextAreaAdapter}
                    // label="What has been done previously to resolve this problem?"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="What does client think are their needs?"
                  />
                </Grid>
                <Grid item className={classes.halfField}>
                  <Field
                    fullWidth
                    name="clientInterests"
                    component={TextAreaAdapter}
                    // label="What has been done previously to resolve this problem?"
                    inputProps={{ maxLength: 4000 }}
                    inputLabel="What abilities and interests does the client have?"
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="flex-end"
                style={{
                  paddingBottom: 10,
                }}
              >
                <div className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    // style={{ width: 150 }}
                    className={classes.saveAndRequestButton}
                    onClick={() => {
                      handleSubmit();
                    }}
                    disabled={submitting || pristine}
                    sx={{
                      mr: 2,
                      mb: 5,
                    }}
                  >
                    Save And Continue
                  </Button>
                  <Button
                    onClick={() => {
                      // handleCancelButtonClicked();
                      form.reset();
                    }}
                    variant="contained"
                    color="error"
                    sx={{
                      mr: 2,
                      mb: 5,
                    }}
                  >
                    Clear Form
                  </Button>
                </div>
              </Grid>
            </form>
          );
        }}
      />
    </div>
  );
};

// clientExpectations: string;
//   clientStrengths: string;
//   clientNeeds: string;
//   clientInterests: string;
