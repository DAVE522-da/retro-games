# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Browser-based retro games built as standalone HTML files — no build step, no dependencies, no framework. Each game is a single self-contained `.html` file using HTML5 Canvas + vanilla JavaScript.

## Running the Games

Open any `.html` file directly in a browser:
```
start shooter.html
start tictactoe.html
```

There is no build, no server, no package manager, and no test suite.

## Architecture

Every game follows the same pattern inside a single HTML file:

1. **Canvas setup** — fixed `800×600` canvas, centered via CSS flexbox
2. **State machine** — a `state` variable drives which screen is active (e.g. `'menu' | 'playing' | 'waveclear' | 'levelclear' | 'gameover'`)
3. **Game loop** — `requestAnimationFrame` calls `update()` then renders; fixed per-frame increments (not delta-time based)
4. **Input** — keyboard state stored in a `keys` object; mouse position tracked on `mousemove`
5. **Draw functions** — one function per entity type (`drawPlayer`, `drawEnemies`, etc.), all using `ctx` directly

### shooter.html specifics
- `getLevelConfig(lvl)` returns wave count, enemies-per-wave, speed multiplier, and allowed enemy types for any level
- Enemy types (`grunt`, `speeder`, `tank`) are defined in the `DEFS` object with size/hp/speed/color/pts
- Particles are stored in a flat array and updated each frame (alpha fade + velocity damping)
- Shoot cooldown and invincibility are frame counters decremented by 1 per frame

## Git & GitHub

- Remote: `https://github.com/DAVE522-da/retro-games`
- `.claude/` is gitignored

### Commit discipline
Commit and push after every meaningful unit of work — a new feature, a bug fix, a new game, a config change. Never batch unrelated changes into one commit. This ensures the project can always be reverted to a known-good state.

Commit message format:
- One short imperative subject line (e.g. `Add power-up system to shooter`)
- If needed, a blank line followed by a brief body explaining the why or notable details

Push immediately after every commit (`git push`) — no approval needed.
