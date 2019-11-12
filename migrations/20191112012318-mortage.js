'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('mortgage', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    property_name: {
      type: 'string',
      length: 100
    },
    property_value: {
      type: 'int'
    },
    down_payment: { type: 'int' },
    interest_rate: {
      type: 'decimal'
    },
    loan_term: {
      type: 'int'
    },
  }, function (err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function (db, callback) {
  db.dropTable('mortgage', callback);
};

exports._meta = {
  "version": 1
};
