import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/streams';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { create_stream_page } from './index.module.scss';

const validationSchema = yup.object({
  title: yup.string('Enter title').required('Title is required'),
  description: yup.string('Enter description').required('Description is required'),
});

const StreamCreate = ({ createStream }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createStream(values);
    },
  });

  return (
    <div className={create_stream_page}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          type="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default connect(null, {
  createStream,
})(StreamCreate);
