# RadioScope V1.4 — Advanced Scanning Controls

Mobile-first hardware-free radio explorer, deployed as a static Progressive Web App. Plays public internet radio streams and links to public remote SDR interfaces. It **does not** scan arbitrary local RF signals using an iPhone.

## What's new in 1.4

- **Custom scan lists**: create up to 8 named lists holding up to 40 HTTPS-compatible saved stations each. On a station card tap **＋ List** to add/remove it from the active list. Manage lists under **My Library → Scan lists**. Changing a list during scanning stops the scan; tap Start scan again.
- **Verified favorites**: My Library → Verified includes starred stations that reached HTMLMediaElement `playing` at least once on this device. This is a playback observation, not a guarantee of audible content or current station uptime.
- **Scan source**: Current directory, My fast stations, My favorites, Verified favorites, Selected scan list.
- **Scan order**: Fast and reliable first (based on local observed startup) or As listed.
- **Connection limit**: 10, 20, or 30 seconds per attempted station; listening duration remains 15, 30, or 45 seconds after playback begins.
- **Activity**: My Library → Activity shows bounded local records for tuning, connecting, errors, timeouts, browser playback blocks and manually skipped stations; it never records actual audio. Clear locally when desired.
- **Profile upgrades**: saved profile now captures source, list reference, scan order, per-station connection limit, and listening duration. Legacy V1.3 profiles migrate with safe defaults.
- **Scanner stability**: native browser timers are now correctly bound and Hold/Resume after pausing can restart listening after successful playback.

## Install and use on iPhone

1. Open `https://raaioperations.github.io/radioscope/` in Safari; confirm **VERSION 1.4** in the top hero.
2. Tap **Listen** on a station. Wait until actual playback begins. Use the speaker test if unsure whether audio output works.
3. Tap **＋ List** on any station to create a default **My scan list**, or open **My Library → Scan lists** and create a named list first.
4. Save the desired stations and return to **Discover → Fast-Tune scan setup**. Set **Scan source → Selected scan list**, **Scan order**, and **Connection limit**.
5. Choose **LISTEN FOR** in the player (15/30/45 sec). Tap **Start scan**, **Hold**, **Resume**, **Next**, or **Stop scan**.
6. Use **My Library → Verified** or **Activity** to inspect observed station status. Save the scan setup as a named profile if needed.

## Storage and privacy

Favorites, recent stations, station health, scan profiles, scan lists, and activity log are kept in this browser's `localStorage`. Clearing Safari website data may erase them. The app has no account or upload system. Activity is capped at 120 entries; lists at 8×40 stations. Station directory requests and direct playback contact third-party stations. The optional microphone analyzer only handles microphone audio in the browser and does not record or transmit it.

## Limitations

- iOS can prevent automatic programmatic playback after the next-station transition. When the browser blocks playback, re-tap a Listen or Start scan button.
- Remote broadcaster startup latency cannot be made instantaneous or guaranteed. Local rankings reflect *this* device's browser observations only.
- Browser status `PLAYING` cannot guarantee actual audible output; test device volume, Bluetooth, AirPlay, and station content separately.
- Saved lists and activity remain local to each browser profile, and will not synchronize across devices.
- Remote RF scanning remains through *external* public SDR receiver sites, not a native RadioScope receiver.

## Local tests

```sh
node --test tests/fast_tune.test.cjs tests/scan_controls.test.cjs
python tests/test_audio.py
python tests/test_state_machine.py
python tests/fast_tune_browser.py
python tests/scan_controls_browser.py
```

Baseline V1 core regression can be run from the original V1 source tree (`node --test tests/core.test.js`). Browser tests use synthetic audio and a mock station directory; they do not replace real iPhone Safari acceptance testing.