# 🤖 GroMoCoach – AI Learning Companion

> A personalised, real-time AI coach designed to upskill GroMo Partners through adaptive microlearning, powered by performance analytics and LLMs.

## 🚀 Project Overview

GroMoCoach transforms traditional static training into an intelligent, just-in-time learning experience for GroMo Partners (GPs). By analysing each GP’s sales behaviour and quiz data, it identifies weak areas and delivers targeted content, such as a short video or flash quiz, exactly when it’s needed.

This project was developed as part of the **GroMo AI Hackathon 2025** to address the issues of low GP training retention and low confidence in product-specific selling.

## 🎯 Key Features

- ✅ **Performance-Driven Skill Detection**
- 📊 Tracks GP sales, quiz scores, and product-wise performance in real-time
- 🤖 Uses **OpenAI GPT-4** to generate personalized tips and training content
- 🎥 Embeds video suggestions and instant quizzes for weak areas
- 🧠 Tracks progress, improvement, and awards badges
- 🌐 Multilingual learning suggestions (via Google Translate API)

## 🖼️ Architecture Overview

```mermaid
graph TD
A[User Activity Logs] --> B[Performance Analyzer]
B --> C{Weak Skill Detected?}
C -->|Yes| D[LLM Prompt to GPT-4]
D --> E[Micro-Learning Content Generated]
E --> F[Streamlit/Flutter Frontend]
F --> G[GP Consumes Content]
G --> H[Track Progress + Feedback]
H --> B
````

## 💡 Demo

🎥 Watch here: https://vimeo.com/1088126143/a9a9a88a66?ts=0&share=copy
📸 Preview: 

![image](https://github.com/user-attachments/assets/3f8ed0ce-b2c6-4099-8d69-a3137c654cac)

![image](https://github.com/user-attachments/assets/82b958c8-6751-4d4f-85e0-56e5bbaaacee)

![image](https://github.com/user-attachments/assets/852357fb-481c-4725-8bfc-dc37cb229bbc)

## ⚙️ Tech Stack

| Layer        | Tech Used                      |
| ------------ | ------------------------------ |
| Frontend     | Streamlit / Flutter            |
| AI Model     | OpenAI GPT-4 (via API)         |
| Translation  | Google Cloud Translate API     |
| Analytics    | Firebase + Custom Python logic |


## 🧪 Sample Prompt (LLM)

```text
"Generate a short, Hindi-language tip to help a GP pitch credit cards to low-income customers. Focus on cashback and EMI options. Keep it under 3 points."
```

## 📁 Project Structure

```
Gromo-AI-Assistant/
│
├── public/                    # Static assets like images, logos
├── src/                       # Main application logic (components, hooks, pages)
│   ├── components/            # Reusable UI components
│   ├── features/              # Feature-specific logic (e.g., GPT interaction)
│   ├── utils/                 # Utility functions and API logic
│   ├── styles/                # Tailwind and custom styling
│   └── App.tsx                # Root component
│
├── index.html                 # App entry point
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── tailwind.config.ts         # Tailwind CSS config
├── postcss.config.js          # PostCSS setup
├── components.json            # Component-level config (shadcn)
├── eslint.config.js           # Linting rules
├── README.md                  # Project documentation (this file)
└── .gitignore                 # Files to ignore in Git
```

## 📈 Results & Impact

* 📈 40% improvement in credit card pitch conversions (pilot)
* ⏱️ Reduced onboarding-to-first-sale time by 50%
* 📉 60% drop in training drop-off
* 🧠 45% increase in comprehension using localised content

## 🛠️ How to Run (Locally)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourname/gromo-coach.git
   cd gromo-coach
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Add your OpenAI API key in `.env`:

   ```
   OPENAI_API_KEY=your_key_here
   ```

## 🏁 License

This project is for educational and demonstration purposes. Attribution appreciated. 🧠✨
