import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/streams';

import StreamForm from '../../components/StreamForm';

import { create_stream_page } from './index.module.scss';

const StreamCreate = ({ createStream }) => {
  return (
    <div className={create_stream_page}>
      <h1>新增影片</h1>
      <StreamForm initialValues={{ title: '', description: '' }} onSubmit={createStream} />
    </div>
  );
};

export default connect(null, {
  createStream,
})(StreamCreate);
