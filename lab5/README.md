# Laboratory Work 5 - PrimeVue & Plugins

## Project Setup
1. `npm install`
2. `npm run dev`

## Structure
- **Header**: Navigation
- **Hero**: Introduction
- **Problem-Solution**: Marketing section
- **Benefits**: Features list
- **How It Works**: Steps
- **Pricing**: 3 Plans + Calculator
- **Reviews**: Testimonials
- **FAQ**: Accordion
- **Contact**: Form with validation and masking
- **Footer**: Detailed footer

## PrimeVue Configuration
Configured in `main.js` using Aura theme and `ToastService`.
Components used: `Card`, `Button`, `InputText`, `InputNumber`, `InputMask`, `Textarea`, `Checkbox`, `Toast`, `Accordion`, `Menu`, `Dialog`, etc.

## CopyToClipboardPlugin
A custom plugin registered in `main.js`.
It injects a global `copyToClipboard` function (and `$copyToClipboard`).
Used in:
1. **Pricing Section**: When clicking "Select Plan", copies plan details.
2. **Contact Section**: When submitting, copies email (demo scenario).
3. **Footer**: Use copy on support email.
