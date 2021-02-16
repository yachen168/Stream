import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styles from './index.module.scss';

const validationSchema = yup.object({
  title: yup.string('Enter title').required('Title is required'),
  description: yup.string('Enter description').required('Description is required'),
});

const StreamForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form className={styles.stream_form} onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        name="title"
        label="Title"
        value={formik.values.title || ''}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        fullWidth
        name="description"
        label="Description"
        type="description"
        value={formik.values.description || ''}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default StreamForm;
