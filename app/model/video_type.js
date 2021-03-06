'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize;
  const VideoType = app.model.define('video_type', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    deletedAt: 'deleted_at',
    paranoid: true,
  });

  VideoType.associate = function() {
    VideoType.hasMany(app.model.VideoList, {
      foreignKey: 'type_id',
      sourceKey: 'id',
    });
  };
  return VideoType;
};
