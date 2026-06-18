// Communication & Memory: the life of a box (alloc, transfer, free).
module.exports = {
  direction: 'RIGHT',
  layoutOptions: { 'elk.layered.wrapping.strategy': 'OFF' },
  nodes: [
    { id: 'pool',  kind: 'store',  label: 'Pool' },
    { id: 'owner', kind: 'entity', label: 'Owned by the allocating entity' },
    { id: 'recv',  kind: 'entity', label: 'Owned by the receiving entity' },
  ],
  edges: [
    ['pool',  'owner', 'alloc → Some(box)', 'flow'],
    ['owner', 'recv',  'send (transfer)',   'flow'],
    ['owner', 'pool',  'free',              'flow'],
    ['recv',  'pool',  'free',              'flow'],
  ],
};
