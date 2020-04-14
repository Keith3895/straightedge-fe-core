![Build](https://travis-ci.org/Keith3895/financeTracker.svg?branch=master)
[![npm](https://img.shields.io/badge/npm-6.14.4-green.svg)](https://www.npmjs.com/)
[![CodeFactor](https://www.codefactor.io/repository/github/keith3895/straightedge/badge)](https://www.codefactor.io/repository/github/keith3895/straightedge)
# Straightedge-fe

Straightedge-fe is the event sniffer and event logger tool for straightedge. The tool will generate a JSON object which will be a 
symbolic notation of the activities performed by the user.

### Installation
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