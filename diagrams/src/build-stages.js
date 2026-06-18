// Tooling: the two build stages, `termina build` then `make`.
module.exports = {
  direction: 'RIGHT',
  layoutOptions: { 'elk.layered.wrapping.strategy': 'OFF' },
  nodes: [
    { id: 'src', kind: 'entity',  label: '.fin sources', sub: 'app/ + src/' },
    { id: 'cfg', kind: 'entity',  label: 'termina.yaml' },
    { id: 'tb',  kind: 'emitter', label: 'termina build' },
    { id: 'out', kind: 'channel', label: 'C sources + Makefile', sub: 'output/' },
    { id: 'mk',  kind: 'emitter', label: 'make' },
    { id: 'tc',  kind: 'channel', label: 'OSAL + toolchain' },
    { id: 'bin', kind: 'store',   label: 'executable or image' },
  ],
  edges: [
    ['src', 'tb', '', 'flow'],
    ['cfg', 'tb', '', 'flow'],
    ['tb', 'out', '', 'flow'],
    ['out', 'mk', '', 'flow'],
    ['tc', 'mk', '', 'flow'],
    ['mk', 'bin', '', 'flow'],
  ],
};
