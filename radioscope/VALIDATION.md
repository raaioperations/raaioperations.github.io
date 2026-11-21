# RadioScope V1.3 — validation

## Verified locally

- Original V1 source logic: **10/10 passed** (`node --test /mnt/data/radioscope-v1/tests/core.test.js`). The V1.3 scanner is separately tested, because it replaces the original fixed scanner implementation.
- V1.3 Fast-Tune logic: **7/7 passed** (connect timer, post-playing dwell, failure skip, Hold/Resume, stale callbacks, single-station backoff, local health ranking, invalid saved data).
- V1.3 desktop/mobile browser UI: passed with mock radio directory + generated WAV (local fast observation, filter, named profile save and restore, no uncaught errors, no mobile horizontal overflow).
- Existing V1.2 audio regression: passed with synthetic PCM/WAV, including slow-start and recovery to PLAYING, broken stream transitions to STREAM ERROR.
- JS syntax: `node --check script.js` passed (script extracted for validation only).

## Not yet verified

- Live broadcaster start times on iOS Safari, slow mobile networks, interruptions/CarPlay/AirPlay/background audio.
- Actual stream bitrate or continuous uptime.
- Cross-browser background scan timers or iOS limits on automatic next-station playback.
- Remote SDR reception inside the RadioScope app (currently external links only).

## Acceptance gate on user phone

1. Open Safari and confirm Version 1.3.
2. Tap Listen on a working station; wait for PLAYING.
3. Confirm a local observed connection-time label appears, and fast stations become available under Fast on this device if measurement is below 8 seconds.
4. Stop manual playback, choose a scan source and 15/30/45s listening time, tap Start scan. Verify the scan stays on a station for the selected period **after** audio starts. Slow/unavailable streams should skip after up to 20s.
5. Save and reload a profile, confirm source and listening time persist.