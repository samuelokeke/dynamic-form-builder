# Dynamic form builder

A customizable and extensible dynamic form builder built with [React]. This tool enables users to generate and manage complex form structures through a simple UI or configuration schema. Supports field validation, conditional rendering, and real-time preview.

---

## ✨ Features

- 🧱 On-the-fly form field creation
- 🎯 Built-in validation rules (required, email, min/max, etc.)
- 🔄 Conditional logic & field visibility
- 🔍 Live preview of form as you build
- 📝 Export and import form schemas (JSON)

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/samuelokeke/dynamic-form-builder.git
cd dynamic-form-builder
npm install
```

---

## 📦 Technologies Used

- Framework: React Typescript
- State Management: Context API
- Styling: Tailwind CSS
- Form Handling: Hooks (useState, Native ChangeEvent & FormEvent)

---

## 📁 Project Structure

```
dynamic-form-builder/
├─── public/
├─── src/
│     ├─── assets/
│     ├─── components/
│     │     ├─── shared/
│     │     └─── ui/                 # Reusable form input components
│     │           └─── Card.tsx
│     ├─── contexts/
│     │     └─── FormContext.tsx     # Store management
│     ├─── lib/
│     │     └─── util.ts
│     ├─── types/                    # Schema builders, validators, helpers
│     ├─── App.tsx
│     ├─── data.json                # Form dynamic JSON data
│     ├─── index.css
│     ├─── main.tsx
│     └─── App.tsx
└─── README.md
```

## 📤 Exported JSON Schema Format

```js
{
  "title": "User Registration",
  "fields": [
    { "label": "First Name", "name": "firstName", "type": "text", "required": true },
    { "label": "Last Name", "name": "lastName", "type": "text", "required": true },
    { "label": "Email", "name": "email", "type": "email", "required": true },
    { "label": "Age", "name": "age", "type": "number" },
    { "label": "Subscribe to Newsletter", "name": "newsletter", "type": "checkbox" }
  ]
}

```

---

## 🧪 Testing (Development)

```bash
npm run dev
```

## 🧪 Production

```bash
npm run build
```

---

## 🧑‍💻 Author

Made with ❤️ by Samuel Okeke
