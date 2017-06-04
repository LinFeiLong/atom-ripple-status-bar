var xrp;

xrp = null;

module.exports = {
  config: {
    display: {
      type: 'string',
      'default': 'right',
      'enum': ['left', 'right']
    },
    refresh: {
      type: 'integer',
      'default': 60
    }
  },
  activate: function() {
  },
  deactivate: function() {
    if (xrp != null) {
      xrp.destroy();
    }

    return xrp = null;
  },
  consumeStatusBar: function(statusBar) {
    var RippleStatusBarView;
    RippleStatusBarView = require('./ripple-status-bar-view');
    xrp = new RippleStatusBarView();
    xrp.initialize(statusBar);
    return xrp.attach();
  }
};
