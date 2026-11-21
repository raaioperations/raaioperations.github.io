# RadioScope V1.4 — Validation Report

## Verified before GitHub publication

- **V1 core baseline:** 10/10 logic regression tests pass (original V1 suite).
- **V1.3 + V1.4 logic:** 14/14 pass (7 legacy Fast-Tune tests; 7 additional scan controls, storage sanitization, migration and Hold/Resume tests).
- **V1.2 audio browser regression:** Desktop and iPhone-sized Chromium pass WAV speaker test and actual synthesized HTMLAudioElement playback. Unsupported stream displays error.
- **V1.2 slow/failure regression:** Delayed synthetic stream correctly buffers before PLAYING; slow warning recovers; failed stream displays STREAM ERROR.
- **V1.3 Fast-Tune browser:** Desktop and mobile pass fast label, fast filter, profile save/restore, playback, no horizontal overflow or uncaught JS errors.
- **V1.4 advanced-controls browser:** Desktop and mobile pass create/select list, station add/remove, browser-observed verified favorite, activity history, scan Start/Stop, saved order/timeout/profile and reopen with persisted data, no horizontal overflow or uncaught JS errors.
- **Browser-native timer defect:** The native `setTimeout`/`clearTimeout` calls are now wrapped; prior Chromium `Illegal invocation` regression test passes.
- **V1.4 Hold/Resume:** Deterministic test confirms a held scan whose audio was paused transitions back to connecting, then starts full listening dwell when audio resumes.

## Still requires iPhone acceptance

- Real Safari 1.4 scanning with actual broadcaster streams, selected lists, and variable network conditions.
- Backgrounding and AutoPlay restrictions, Bluetooth output, interruptions, CarPlay/AirPlay and long-duration scanning.
- Browser storage survival across iOS low-storage purging / private browsing.
- Station uptime and latency outside synthetic/observed local tests.

## Scope boundary

RadioScope V1.4 plays internet audio streams; it is not a general local RF receiver, does not decrypt encrypted transmissions, and does not embed unlicensed third-party scanner audio feeds.