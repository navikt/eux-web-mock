const os = require('os');
const _ = require('lodash');
const moment = require('moment');
const branch = require('git-branch');
const shell = require('shelljs');

moment.locale('nb');

const platformNIC = () => {
  const interfaces = os.networkInterfaces();
  switch (process.platform) {
    case 'darwin':
      return interfaces.lo0;
    case 'linux':
      return interfaces.ens192 ? interfaces.ens192 : interfaces.eno16780032;
    default: // win32
      return interfaces.Ethernet0 ? interfaces.Ethernet0 : interfaces['Wi-Fi'];
  }
};


module.exports.getIpAdress = () => {
  const nic = platformNIC();
  const ipv4 = _.find(nic, (item) => (item.family === 'IPv4'));
  return ipv4.address;
};

const namespace = 'MOCK SERVER';
const cluster = `NodeJS ${process.version}`;
const gitShellExec = shell.exec('git rev-parse HEAD');
const longVersionHash = gitShellExec.stdout.trim();
let branchName = process.env.BRANCH_NAME || 'unknown';
if (branchName === 'unknown') {
  branchName = branch.sync(process.cwd());
}
const gosysURL = 'https://wasapp-t8.adeo.no/gosys/';
const veraURL = 'https://vera.adeo.no/#/log?application=eux';
const serverInfo = {
  namespace,
  cluster,
  branchName,
  longVersionHash,
  gosysURL,
  veraURL,
};

module.exports.hentServerInfo = (req, res) => res.json(serverInfo);
