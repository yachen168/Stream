import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/streams';

import AdminButtons from '../AdminButtons';
import CreateLink from '../../components/CreateLink';

import CameraIcon from '../../images/camera.png';
import styles from './index.module.scss';

const StreamList = ({ streams, fetchStreams, currentUserId, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdminButtons = (stream) => {
    return stream.userId === currentUserId ? (
      <AdminButtons stream={stream} onDelete={() => {}} />
    ) : null;
  };

  const renderCreateLink = () => {
    return isSignedIn ? <CreateLink /> : null;
  };

  return (
    <div className={styles.streams_list}>
      <h1>影片清單</h1>
      {streams.map((stream) => {
        return (
          <div className={styles.stream_item} key={stream.id}>
            <img src={CameraIcon} />
            <div className={styles.stream_item_content}>
              <h2 className={styles.title}>{stream.title}</h2>
              <h4 className={styles.description}>{stream.description}</h4>
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
