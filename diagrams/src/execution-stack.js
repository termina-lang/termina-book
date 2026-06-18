// Platforms & OSAL: the four-layer execution stack of a deployed application.
module.exports = {
  direction: 'DOWN',
  layoutOptions: { 'elk.layered.wrapping.strategy': 'OFF' },
  nodes: [
    { id: 'app',  kind: 'entity',  label: 'Application', sub: 'C code generated from the Termina program' },
    { id: 'osal', kind: 'channel', label: 'OSAL', sub: 'Tasks · Queues · Timers · Locks · System services' },
    { id: 'os',   kind: 'store',   label: 'Operating system', sub: 'RTEMS · FreeRTOS · POSIX emulator' },
    { id: 'hw',   kind: 'emitter', label: 'Hardware', sub: 'Target processor and devices' },
  ],
  edges: [
    ['app', 'osal', '', 'flow'],
    ['osal', 'os', '', 'flow'],
    ['os', 'hw', '', 'flow'],
  ],
};
