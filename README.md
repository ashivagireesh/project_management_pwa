# Project Management PWA

React PWA for project management with:

- Google Apps Script backend
- Google Sheets database
- Installable mobile-friendly UI
- Local demo fallback

## Local Development

```sh
npm install
cp .env.example .env
npm run dev
```

Open the Vite URL shown in the terminal.

## Production Build

```sh
npm run build
npm run preview
```

The deployable static app is generated in:

```text
dist/
```

## Hosting

You can deploy `dist/` to:

- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages

Set this environment variable in the hosting provider:

```text
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzn54_34o0P3s0Hk5cLEo-iLYVSAs62g0Suk0zDgH9mMKFkZMkhqw0L8Sf_JNOR91e5TA/exec
```

## Mobile Install

Open the hosted URL on mobile:

- Android Chrome: menu > Install app / Add to Home screen
- iPhone Safari: Share > Add to Home Screen

## Direct Mobile Package

This project also includes an Android Capacitor wrapper. It bundles the React build into a native Android app, so the phone does not need a local Vite server.

```sh
npm run mobile:sync
npm run android:apk
```

The debug APK will be created at:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

If the APK build says `SDK location not found`, install Android Studio, open it once, install the Android SDK, then run:

```sh
echo "sdk.dir=$HOME/Library/Android/sdk" > android/local.properties
npm run android:apk
```

For iPhone, a direct wrapped app requires full Xcode installed from the App Store and an Apple signing setup. Without that, use the hosted PWA option for iPhone.
