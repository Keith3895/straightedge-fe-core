![Build](https://travis-ci.org/Keith3895/financeTracker.svg?branch=master)
[![npm](https://img.shields.io/badge/npm-6.14.4-green.svg)](https://www.npmjs.com/)

# Straightedge-fe-core

Straightedge-fe is the event sniffer and event logger module for straightedge. The module hooks with the DOM and triggers events on the window object of the DOM. These events are meant only for [straight-edge-fe]().

### Installation
The Install instructions are only to install the source code and to run it locally for development. When the Straightedge modules import this as a dependency the installation steps are not the same.
1) clone the repository:
    - https:
    ``https://github.com/Keith3895/straightedge.git``
    - ssh:
    ``git@github.com:Keith3895/straightedge.git``
2) install dependencies:
    ``npm install``
3) build the application:
    ``npm run build-js``
4) copy the generated ``bundle.js`` file and paste it in the chrome console of the application you want to trace.
5) To start the trace run the command ``straightedgefe.run()`` in the chrome console.
6) run the command ``straightedgefe.stop()`` in the chrome console to end the trace. the command will show the trace as the result.

### Contribution
The detailed code explanation and contribution documentation are listed in the [contrib]() folder.

### RoadMap
- CI/CD build automation.
- TDD-esque development.
- switching to webpack.
- CDN deployments.


### License
GNU General Public License v3.0 or later

See [COPYING](./COPYING) file to see the full text.