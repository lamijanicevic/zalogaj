# Zalogaj · demo „kuhinja“ za časove 03 i 04

UNINP Mobile Studio · Restoran React

Mini aplikacija za dostavu hrane na kojoj se u času 03 uživo uče četiri osnovne stvari u Reactu:

| U restoranu | U Reactu | U kodu |
|---|---|---|
| 📖 Recept | komponenta | `function FoodCard()` |
| 🧾 Narudžbina | props | `<FoodCard name="Pica" price={890} />` |
| 🖊️ Tabla u kuhinji | state | `useState(false)` |
| 🔔 Zvono | event | `onPress={() => …}` |
| 🍽️ Novi tanjir | re-render | React to radi sam |

> Gost pozvoni 🔔 → kuvar prepravi tablu 🖊️ → iz kuhinje izađe novi tanjir 🍽️

Klijent iz priče je **Bumbar Labs** (fiktivni klijent studija). Kad Bumbar „zazuji“, stiže novi zahtev.

---

## Pokretanje

Potrebno: Node.js LTS, Expo Go na telefonu (iPhone: i besplatan Expo nalog).

```bash
npm install          # dobavljač donese namirnice u node_modules
npx expo start       # pozovi konobara (Metro); skeniraj QR
```

- **Android:** Expo Go → Scan QR code.
- **iPhone:** prvo `npx expo login` na laptopu i prijava istim nalogom u Expo Go, pa QR običnom kamerom.
- Ne radi na fakultetskoj mreži? `npx expo start --tunnel` ili hotspot sa telefona.
- Brzo na laptopu, bez telefona: `npx expo start --web` (pritisni `w`).

Projekat: Expo SDK 57, React 19.2, React Native 0.86, Expo Router, TypeScript. Početni ekran je `src/app/index.tsx`.

---

## Grane (redosled časa)

| Grana | Šta je unutra | Kada |
|---|---|---|
| `cas-03-start` | Home sa tri kartice napisane copy-paste (namerno loše) | početak live koda, čas 03 |
| `cas-03-solution` | `FoodCard` sa props, tipom, srcem i korpom | kraj live koda / rezerva ako demo zapne |
| `cas-04-primer` | FitStart `WorkoutCard` na nivou Zlato | primer za tebe, za obilazak timova u sprintu |
| `master` | isto kao `cas-03-solution` | |

```bash
git switch cas-03-start      # pre časa
git switch cas-03-solution   # ako live kod zapne duže od 2 minuta
```

---

## Scenario live koda (čas 03, minut 14–36)

1. **`cas-03-start`:** pokaži tri kopirane kartice. Pitaj: „Bumbar Labs hoće zaobljenije ivice. Koliko mesta menjam? A za 200 kartica?“
2. Napravi `src/components/FoodCard.tsx`, iseci jednu karticu unutra, zameni tekstove sa `{name}`, `{price}`, `{time}`, `{emoji}`.
3. Na Home ekranu naruči tri puta. Promeni `borderRadius` na JEDNOM mestu i pokaži telefon.
4. Dodaj tip `FoodCardProps`, namerno izostavi `name` u jednoj narudžbini → crvena linija u editoru.
5. **Predict P1, P2, P3** i planirana greška sa zvonom: kod je u folderu `primeri/` (kopiraš ga u ekran kad ti treba).
6. Dodaj srce (`liked`) i korpu (`qty`). Klikni srce na jednoj kartici: „Zašto se druge dve nisu upalile?“ → svaka porcija ima svoju tablu.

## Folder `primeri/`

Fajlovi nisu deo aplikacije (isključeni su iz TypeScript provere). Kopiraš sadržaj u `src/app/index.tsx` kad ti treba.

| Fajl | Šta pokazuje | Rezultat |
|---|---|---|
| `P1-tekst-u-view.tsx` | tekst direktno u `View` | crveni ekran na telefonu |
| `P2-navodnici.tsx` | `price="890"` umesto `price={890}` | `890100 RSD` |
| `P3-obicna-promenljiva.tsx` | `let liked` umesto `useState` | srce se ne pali, konzola menja vrednost |
| `zvono-greska.tsx` | `onPress={setQty(qty + 1)}` | „Too many re-renders“ |
| `code-review-BookCard.tsx` | dve greške za code review arenu (čas 04) | rešenje je u komentaru |

> Napomena: P1 i „Too many re-renders“ se pravilno vide samo na telefonu (Expo Go). U web pregledu React Native Web je blaži.

## Tajni zahtev (čas 04, ~24. minut sprinta)

> **Bumbar Labs:** „Brend se menja. Sve kartice: ivice zaobljenije, pozadina svetloljubičasta. Odmah.“

U `FoodCard.tsx` je to promena dve linije u `styles.card`:

```ts
backgroundColor: '#F1EBFF',
borderRadius: 20,
```

Ko ima komponentu, menja jedno mesto. Ko je kopirao kartice, menja svako.

---

## Kad ne radi

| Šta vidiš | Rešenje |
|---|---|
| QR se skenira, pa večno učitava | ista Wi-Fi mreža, ili `npx expo start --tunnel`, ili hotspot |
| „running scripts is disabled“ (Windows) | Command Prompt umesto PowerShell-a, ili `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| „Project is incompatible with this version of Expo Go“ | ažuriraj Expo Go iz prodavnice |
| „Sign in required“ (iPhone) | `npx expo login` + isti nalog u Expo Go, pa ponovo `npx expo start` |
| promena se ne vidi na telefonu | sačuvaj fajl; u terminalu pritisni `r` |
