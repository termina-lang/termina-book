// Tutorial: architecture of the ICU software demo (instance diagram).
// Nodes are `instance : Class` part usages. Mirrors app.fin of the tutorial.
module.exports = {
  direction: 'RIGHT',
  aspectRatio: 1.5,
  legend: true,
  nodes: [
    { id: 'timer', kind: 'emitter', label: 'hk_timer : PeriodicTimer' },
    { id: 'kirq',  kind: 'emitter', label: 'kbd_irq : Interrupt' },

    { id: 'hktask', kind: 'task', label: 'hk_task : CHKTask',
      ports: [['hkt_sink', 'sink', 'W'], ['hkt_acc', 'access', 'E']] },
    { id: 'mgr', kind: 'task', label: 'manager_task : CManagerTask',
      ports: [['mgr_in', 'in', 'W'], ['mgr_tm', 'access', 'E'], ['mgr_pool', 'access', 'E']] },
    { id: 'kbd', kind: 'handler', label: 'kbd_handler : CKbdIRQHandler',
      ports: [['kbd_sink', 'sink', 'W'], ['kbd_out', 'out', 'E'], ['kbd_pool', 'access', 'E'], ['kbd_sys', 'access', 'E']] },

    { id: 'hksub', kind: 'resource', label: 'hk_subsystem : CHKSubsystem',
      ports: [['hks_prov', 'provides', 'W'], ['hks_sdp', 'access', 'E'], ['hks_sensor', 'access', 'E'], ['hks_tm', 'access', 'E']] },
    { id: 'sdp', kind: 'resource', label: 'sys_data_pool : CSystemDataPool',
      ports: [['sdp_prov', 'provides', 'W']] },
    { id: 'sensor', kind: 'resource', label: 'emu_sensor_array : CEmuSensorArray',
      ports: [['sensor_prov', 'provides', 'W']] },
    { id: 'tm', kind: 'resource', label: 'tm_channel : CTMChannel',
      ports: [['tm_prov', 'provides', 'W'], ['tm_sys', 'access', 'E']] },
    { id: 'sysentry', kind: 'resource', label: 'system_entry : SystemAPI',
      ports: [['sys_prov', 'provides', 'W']] },

    { id: 'tcpool', kind: 'pool', label: 'tc_pool : Pool<TCDescriptor; 10>',
      ports: [['pool_prov', 'provides', 'W']] },
    { id: 'tcchan', kind: 'channel', label: 'tc_channel : MsgQueue<box TCDescriptor; 10>',
      ports: [['tc_in', 'in', 'W'], ['tc_out', 'out', 'E']] },
  ],
  edges: [
    ['timer',    'hkt_sink', 'TimeVal',          'flow'],
    ['kirq',     'kbd_sink', 'u32',              'flow'],
    ['kbd_out',  'tc_in',    'box TCDescriptor', 'flow'],
    ['tc_out',   'mgr_in',   'box TCDescriptor', 'flow'],

    ['hkt_acc',  'hks_prov',    '', 'access'],
    ['hks_sdp',  'sdp_prov',    '', 'access'],
    ['hks_sensor', 'sensor_prov', '', 'access'],
    ['hks_tm',   'tm_prov',     '', 'access'],
    ['mgr_tm',   'tm_prov',     '', 'access'],
    ['mgr_pool', 'pool_prov',   '', 'access'],
    ['kbd_pool', 'pool_prov',   '', 'access'],
    ['kbd_sys',  'sys_prov',    '', 'access'],
    ['tm_sys',   'sys_prov',    '', 'access'],
  ],
};
