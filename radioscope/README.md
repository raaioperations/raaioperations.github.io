# RadioScope V1.3 — Fast-Tune

Hardware-free mobile-first internet radio explorer. Deploy this folder under an HTTPS path (e.g. `/radioscope/`).

## How to use on iPhone

1. Open the deployed site in Safari; check `RADIO EXPLORER / VERSION 1.3`.
2. Tap **Listen** on a station. Once the browser signals audio playback, RadioScope records the observed connection time locally and marks genuinely fast-starting stations with a lightning label.
3. **Fast on this device** filters the station directory to streams measured to start within approximately 8 seconds on this browser (and meeting the reliability threshold). No fast entries are shown until at least one successful observation.
4. Expand **Fast-Tune scan setup** to select Current directory, My fast stations, or My favorites. Select the listening duration (15/30/45 sec) in the sticky player. Type a profile name and tap **Save profile**; up to eight named profiles are stored on this device. Selecting a profile restores its source and duration.
5. Tap **Start scan** in the player. Scanning attempts a station for up to 20 seconds; once the `playing` event occurs the chosen *listening* timer begins. Failed or timed-out stations are skipped. **Hold** freezes scan rotation; **Resume** restarts the applicable deadline. On iOS, automatic next-station playback may require a new tap due to Safari media policies; the scanner stops and reports this.
6. **Stop scan** to listen manually. The speaker-check tone still works without internet.

## Important limitations

- This app plays publicly listed *internet* radio streams and links to public remotely operated SDRs. It cannot receive arbitrary nearby radio signals without a compatible RF receiver.
- A `playing` media event and its measured startup delay are browser observations; they cannot certify audible content, station uptime or Internet performance elsewhere. Streams may redirect, buffer, go offline or disallow autoplay.
- `Fast` ranking is local to this browser/device, not a global station rating. Observations are stored in localStorage and capped at 200 entries; profiles capped at eight. Clearing browser data clears them.
- Scan source is a snapshot of the current directory, fast subset or favorites at **Start scan**; changing settings stops the existing scan, then requires Start again.
- When Safari blocks programmatic playback, tap Listen or Start scan to continue. To preserve user choice, playback is never proxied through a paid or unauthorized stream service.

## Source layout

- `index.html`: CSS, accessible UI, discovery logic, Fast-Tune state machine, playback, microphone analyzer
- `sw.js`: offline app-shell cache, excluding external streams and APIs
- `manifest.webmanifest`, `assets/icon.svg`: PWA shell
- `tests/fast_tune.test.cjs`: deterministic scanner/health/settings tests
- `tests/fast_tune_browser.py`: simulated desktop/mobile UI + audio + profile tests
- `tests/test_audio.py`, `tests/test_state_machine.py`: inherited audio regression checks

## Local test commands

```sh
node --test tests/fast_tune.test.cjs
python tests/fast_tune_browser.py
python tests/test_audio.py
python tests/test_state_machine.py
```

Browser tests use synthetic WAV and fixture radio directory responses. They do not confirm third-party audio on an actual iPhone.