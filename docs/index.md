# The Termina Book

**Termina** is a domain-specific programming language for reactive, real-time
embedded software. It provides memory safety, bounded execution, and timing
analyzability as properties of the language itself, and it transpiles to
MISRA-compliant C that runs on RTEMS, FreeRTOS, and POSIX systems.

[Get started](started/install.md){ .md-button .md-button--primary }
[Build your first application](tutorial.md){ .md-button }

## A first taste

A Termina application is a set of components that react to events. The
following task prints a message once per second, driven by a periodic timer:

```termina
task class CHelloWorldTask {

    timer_port : sink TimeVal triggers timeout;

    system_port : access SystemAPI;

    action timeout(&priv self, _current_time : TimeVal) -> Status<i32> {

        let msg : [char; 128] = "Hello, Real-Time World!";
        let ret : Status<i32> = Success;

        self->system_port.println(128, &msg);

        return ret;

    }

};
```

The chapter [Hello, Real-Time World!](started/hello-world.md) builds and runs
this program step by step.

## How the book is organized

| Part | What it covers |
|:-----|:---------------|
| [Getting Started](started/install.md) | Installing the toolchain and running a first program. |
| [Building Our First Application](tutorial.md) | A guided tour: a complete on-board control application, from empty project to running system. |
| [Language Basics](basics/types.md) | Types, variables, expressions, control flow, functions, and references. |
| [The Reactive Model](reactive/overview.md) | Tasks, handlers, and resources: the components of a Termina system. |
| [Communication and Memory](comm/ports-and-channels.md) | Ports, channels, message passing, and deterministic memory management. |
| [The Application Module](wiring/application-module.md) | Assembling the system: instances, connections, and annotations. |
| [Memory-Mapped I/O](advanced/memory-mapped-io.md) | Writing device drivers with located fields. |
| [Platforms and the OSAL](platforms/osal.md) | The execution stack and the supported target platforms. |
| [Tooling](tooling/project-structure.md) | Project layout, the build system, and debugging. |
| [Appendix](appendix/keywords.md) | Reference tables: keywords, operators, built-in types, conventions. |

## Project links

- [The transpiler](https://github.com/termina-lang/termina), the
  [OSAL](https://github.com/termina-lang/termina-osal), and the
  [Docker image](https://github.com/termina-lang/docker-termina) on GitHub.
- The [Termina extension](https://marketplace.visualstudio.com/items?itemName=termina-lang.termina)
  for Visual Studio Code.
