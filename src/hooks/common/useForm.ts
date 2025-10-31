import React from "react";
import { useFormik } from "formik";
import type { FormikValues } from "formik";

function useForm<T extends FormikValues>(
  initialValues: T,
  onSubmit: (values: T) => void,
  validationSchema?: any
) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  return formik;
}

export default useForm;
