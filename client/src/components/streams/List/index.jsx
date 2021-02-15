import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../../actions/streams';

import './index.scss';

const List = ({ streams, fetchStreams }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  return (
    <div className="streams-list">
      <h1>Streams</h1>
      {streams.map((stream) => {
        return (
          <div className="stream-item" key={stream.id}>
            <img src="https://img.icons8.com/metro/26/000000/camera.png" />
            <div className="stream-item-content">
              <h2 className="title">{stream.title}</h2>
              <h4 className="description">{stream.description}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(List);
