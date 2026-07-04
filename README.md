# Countries App

An Ionic/Angular application that displays a responsive countries grid with flags, localized country names, and multi-language support (English, Hindi, Gujarati) powered by [ngx-translate](https://ngx-translate.org/).

## Features

- 🌍 Responsive CSS Grid layout showing country flags and names
- 🇮🇳 Multi-language support — English, Hindi (हिन्दी), Gujarati (ગુજરાતી)
- 🔄 Runtime language switching
- 🏳️ Flag images served via [flagcdn.com](https://flagcdn.com/)

## Tech Stack

- [Angular](https://angular.dev/) 18+
- [Ionic Framework](https://ionicframework.com/)
- [@ngx-translate/core](https://ngx-translate.org/) — i18n engine
- [@ngx-translate/http-loader](https://ngx-translate.org/) — loads translation JSON files at runtime

## Prerequisites

- Node.js (LTS recommended)
- Angular CLI
- Ionic CLI (`npm i -g @ionic/cli`)

> **Note:** `@ngx-translate/core` v18 requires Angular 18 or newer.

## Installation

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

Install the translation packages (if not already present):

```bash
npm i @ngx-translate/core @ngx-translate/http-loader
```

## i18n Setup

Translation files live under `src/assets/i18n/` as JSON files, one per language:

```
src/assets/i18n/
├── en.json
├── hi.json
└── gu.json
```

`ngx-translate` is configured in `app.config.ts`:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: "/assets/i18n/",
        suffix: ".json",
      }),
      fallbackLang: "en",
      lang: "en",
    }),
  ],
};
```

Register the languages you support in your root component:

```typescript
import { Component, inject } from "@angular/core";
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(["en", "hi", "gu"]);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
```

Use translations in templates with the `translate` pipe or directive:

```html
<h1>{{ 'HOME.TITLE' | translate }}</h1>
<p translate>HOME.DESCRIPTION</p>
```

## Countries Data

Country data (code, name, flag URL) is stored as a structured JSON array, e.g.:

```json
[
  {
    "code": "IN",
    "name": "India",
    "flag": "https://flagcdn.com/w320/in.png"
  }
]
```

Flag images are fetched from `https://flagcdn.com/w320/{country-code}.png`.

## Running the App

```bash
ionic serve
```

or, for Angular directly:

```bash
ng serve
```

## Building

```bash
ionic build
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── countries-grid/     # Grid displaying country cards
│   ├── models/
│   │   └── country.model.ts    # Country interface
│   └── app.config.ts           # ngx-translate + app providers
└── assets/
    └── i18n/                   # Translation JSON files (en, hi, gu)
```

## License

MIT
