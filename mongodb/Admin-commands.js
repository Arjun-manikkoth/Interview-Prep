// Get server status
db.serverStatus();

// Get current operations
db.currentOp();

// Kill specific operation
db.killOp(opid);

// Replica set status
rs.status();

// Sharding status
sh.status();
