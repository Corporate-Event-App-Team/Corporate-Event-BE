const cluster = require('cluster');
const CPUs = require('os').cpus();

if (cluster.isMaster) {
  // create an instance for each CPU core
  CPUs.forEach(() => cluster.fork());

  cluster.on('listening', worker =>
    console.log('Cluster %d connected.', worker.process.pid),
  );

  cluster.on('disconnect', worker =>
    console.log('Cluster %d disconnected.', worker.process.pid),
  );

  cluster.on('exit', worker =>
    console.log('Cluster %d exited.', worker.process.pid),
  );
} else require('./index'); // start serve on each instance
