module.exports = {
  name: 'angularlogos',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angularlogos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
