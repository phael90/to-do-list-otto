import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
} from "./NewTaskForm.styles";
import { Formik } from "formik";

const NewTaskForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ taskName: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.taskName) {
          errors.taskName = "This field is required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        handleSubmit(values.taskName);
      }}
    >
      {({ isValid, dirty, errors, touched }) => (
        <StyledForm>
          <StyledLabel htmlFor="taskName">New task name:</StyledLabel>
          <StyledInput name="taskName" />
          {errors.taskName && touched.taskName && (
            <StyledErrorMessage name="taskName">
              {errors.taskName}
            </StyledErrorMessage>
          )}

          <StyledButton disabled={!dirty || !isValid} type="submit">
            Add Task
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default NewTaskForm;
