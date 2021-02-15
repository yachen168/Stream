import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/streams';

import AdminButtons from '../../components/AdminButton';
import CreateLink from '../../components/CreateLink';

import CameraIcon from '../../images/camera.png';
import './index.scss';

const StreamList = ({ streams, fetchStreams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdminButtons = (stream) => {
    return stream.userId === currentUserId ? (
      <AdminButtons onEdit={() => {}} onDelete={() => {}} />
    ) : null;
  };

  const renderCreateLink = () => {
    return isSignedIn ? <CreateLink /> : null;
  };

  return (
    <div className="streams-list">
      <h1>影片清單</h1>
      {streams.map((stream) => {
        return (
          <div className="stream-item" key={stream.id}>
            <img src={CameraIcon} />
            <div className="stream-item-content">
              <h2 className="title">{stream.title}</h2>
              <h4 className="description">{stream.description}</h4>
            </div>
            {renderAdminButtons(stream)}
          </div>
        );
      })}
      {renderCreateLink()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(StreamList);
