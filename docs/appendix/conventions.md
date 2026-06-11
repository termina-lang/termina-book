# Appendix D: Naming Conventions

The language does not enforce the following conventions, but the examples of
this book, the demo applications, and the on-board software written in
Termina all follow them. A consistent scheme makes the role of each
identifier visible at the point of use.

| Element | Convention | Examples |
|:--------|:-----------|:---------|
| Task, handler, and resource classes | `C` prefix, PascalCase, kind suffix where it helps | `CHKTask`, `CKbdIRQHandler`, `CTMChannel` |
| Interfaces | `I` prefix, PascalCase | `ITMChannel`, `ICounter`, `ISensorArray` |
| Structs and enums | PascalCase | `TCDescriptor`, `MissionOBT`, `CharDevIrqStatus` |
| Enum variants | PascalCase | `RxComplete`, `IrqError` |
| Instances | snake_case, no prefix | `hk_task`, `tm_channel`, `sample_pool` |
| Functions, procedures, methods, actions | snake_case | `accept_tc`, `do_housekeeping` |
| Fields and variables | snake_case | `interval_control`, `tc_pool_port` |
| `const` globals | UPPER_SNAKE_CASE | `TM_POOL_ALLOC_FAILURE` |
| `constexpr` size constants | UPPER_SNAKE_CASE | `SDP_NUM_PARAMS`, `SENSOR_ARRAY_SIZE` |
| Unused parameters | leading underscore | `_current_time`, `_vector` |

## Port names

A port is named after what it connects to, with a suffix that recalls its
role:

| Port kind | Convention | Examples |
|:----------|:-----------|:---------|
| Access port to a service | interface name without the `I`, snake_case, `_port` suffix | `tm_channel_port`, `counter_port` |
| Access port to a pool | content type plus `_pool_port` | `tc_pool_port` |
| Input port | `in_` prefix or `_input` suffix | `in_tc_channel`, `tc_message_queue_input` |
| Output port | `_out` or `_output` suffix | `tc_channel_out`, `frame_ready_output` |
| Sink port | event name, `_ev` or descriptive | `timer`, `irq`, `system_init_ev` |

## Interface granularity

Service interfaces with a single natural implementor carry a plain noun
(`ITMChannel`, `IHKSubsystem`). Capability interfaces that several classes
may implement combine the noun with the capability (`ICharDevSend`,
`ICharDevNotifyIrq`); a driver typically provides several of them, and each
client is wired only to the facet it needs.

## Modules

Module files and directories use snake_case, and the directory structure
mirrors the import path: `src/resources/tm_channel.fin` is imported as
`resources.tm_channel`. Modules are grouped by component kind: `common/` for
shared types, `lib/` for functions, and `resources/`, `tasks/`, `handlers/`
for the classes.
