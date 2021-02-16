import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/streams';

import StreamForm from '../../components/StreamForm';

const StreamEdit = ({ match, stream, fetchStream, editStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const onSubmit = (formData) => {
    editStream(match.params.id, formData);
  };

  if (!stream) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>編輯影片</h1>
        <StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmit={onSubmit} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchStream,
  editStream,
})(StreamEdit);
