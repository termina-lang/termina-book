// Conceptual diagram of the reactive model: emitters deliver events to tasks and
// handlers, which exchange messages through a channel and reach shared state
// through a resource. Generic (kinds, not instances).
//
// Ports: [id, role, side, label?]. The role drives the square fill (sink/in and
// the resource's provided interface are filled; out and access are hollow). The
// resource's provided port carries the interface name; the other ports rely on
// fill + edge style, so they need no text.
module.exports = {
  direction: 'RIGHT',
  aspectRatio: 1.9,
  legend: true,
  nodes: [
    { id: 'timer',   kind: 'emitter',  label: 'Periodic timer' },
    { id: 'irq',     kind: 'emitter',  label: 'Interrupt' },
    { id: 'task1',   kind: 'task',     label: 'Task',     ports: [['s1', 'sink', 'W'], ['a1', 'access', 'E']] },
    { id: 'handler', kind: 'handler',  label: 'Handler',  ports: [['sh', 'sink', 'W'], ['oh', 'out', 'E'], ['ah', 'access', 'E']] },
    { id: 'chan',    kind: 'channel',  label: 'Channel',  ports: [['ci', 'in', 'W'], ['co', 'out', 'E']] },
    { id: 'task2',   kind: 'task',     label: 'Task',     ports: [['i2', 'in', 'W'], ['a2', 'access', 'E']] },
    { id: 'res',     kind: 'resource', label: 'Resource', ports: [['ar', 'provides', 'W', 'IData'], ['ac', 'provides', 'W', 'IControl']] },
  ],
  edges: [
    ['timer', 's1', 'TimeVal', 'flow'],
    ['irq',   'sh', 'u32',     'flow'],
    ['oh',    'ci', 'T',       'flow'],
    ['co',    'i2', 'T',       'flow'],
    ['a1',    'ar', '',        'access'],   // task -> IData
    ['a2',    'ar', '',        'access'],   // task -> IData
    ['ah',    'ac', '',        'access'],   // handler -> IControl
  ],
};
