import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  IdleButtons,
  QueButtons,
  ActiveButtons,
  LaunchingButtons,
  RunningButtons,
  TerminatingButtons,
  AuthButtons,
} from './variants';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Variants',
};

const IdleTemplate = (args) => {
  return (
    <Router>
      <IdleButtons {...args} />
    </Router>
  )
};
export const Default = IdleTemplate.bind({});
Default.component = IdleButtons;
Default.args = {
  id: 0,
  state: {
    value: 'idle'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};

export const Idle = IdleTemplate.bind({});
Idle.component = IdleButtons;
Idle.args = {
  id: 0,
  state: {
    value: 'idle'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};

const QueTemplate = (args) => {
  return (
    <Router>
      <QueButtons {...args} />
    </Router>
  )
};

export const Que = QueTemplate.bind({});
Que.component = QueButtons;
Que.args = {
  id: 1,
  state: {
    value: 'idle'
  },
  qState: {
    context: {
      que: [
        0,
      ],
      selected: 0,
    }
  }
};

const ActiveTemplate = (args) => {
  return (
    <Router>
      <ActiveButtons {...args} />
    </Router>
  )
};

export const Active = ActiveTemplate.bind({});
Active.component = ActiveButtons;
Active.args = {
  id: 0,
  state: {
    value: 'idle'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};



const LaunchTemplate = (args) => {
  return (
    <Router>
      <LaunchingButtons {...args} />
    </Router>
  )
};
export const Launching = LaunchTemplate.bind({});
Launching.component = LaunchingButtons;
Launching.args = {
  id: 0,
  authenticated: false,
  state: {
    value: 'starting',
    context: {
      tooltip: 'Starting',
    }
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};



const RunningTemplate = (args) => {
  return (
    <Router>
      <RunningButtons {...args} />
    </Router>
  )
};
export const Running = RunningTemplate.bind({});
Running.component = RunningButtons;
Running.args = {
  id: 0,
  state: {
    value: 'running'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};

const TerminatingTemplate = (args) => {
  return (
    <Router>
      <TerminatingButtons {...args} />
    </Router>
  )
};
export const Terminating = TerminatingTemplate.bind({});
Terminating.component = TerminatingButtons;
Terminating.args = {
  id: 0,
  state: {
    value: 'terminating'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};

export const Killed = TerminatingTemplate.bind({});
Killed.component = TerminatingButtons;
Killed.args = {
  id: 0,
  state: {
    value: 'killed'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};

const AuthTemplate = (args) => {
  return (
    <Router>
      <AuthButtons {...args} />
    </Router>
  )
};
export const Authenticating = AuthTemplate.bind({});
Authenticating.component = TerminatingButtons;
Authenticating.args = {
  id: 0,
  state: {
    value: 'idle',
    context: {
      tooltip: 'Authenticating...',
    }
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};
