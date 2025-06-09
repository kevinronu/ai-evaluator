# EvaluAItor - AI Project Proposal Evaluator

AI Project Proposal Evaluator is a web application designed to objectively assess and rank project proposals using artificial intelligence. It allows users to upload multiple project documents and receive a structured evaluation highlighting the top 5 candidates and the overall best proposal—backed by a transparent, technical justification.

This tool is particularly useful in public sector decision-making, where it can help reduce corruption by providing consistent, unbiased assessments based on defined criteria. Future iterations aim to incorporate blockchain integration for immutable public records and audit trails.

🚀 **Live Demo**: [ai-evaluator-nu.vercel.app](https://ai-evaluator-nu.vercel.app/)

## ✨ Features

- 📥 Upload multiple project documents at once
- 🧠 Uses OpenAI's LLM with vector store capabilities
- 📊 Outputs a structured JSON with executive summary and per-proposal breakdown
- 🏆 Automatically selects and explains the best proposal
- 🌐 Fully server-side rendered with Astro and TypeScript
- 📦 Hosted on [Vercel](https://vercel.com)

## 🖼️ Screenshot

![EvaluAItor Screenshot](https://github.com/kevinronu/ai-evaluator/blob/main/screenshot.webp?raw=true)

## 📁 Tech Stack

| Layer       | Technology     |
|-------------|----------------|
| Frontend    | Astro + TypeScript |
| AI Backend  | OpenAI API (Assistants + File Search Tool) |
| Deployment  | Vercel         |
| Future Scope| Blockchain (for audit traceability) |

## ⚙️ Setup and Installation

1. **Clone this Repository:**
   ```shell
   git clone git@github.com:kevinronu/ai-evaluator.git
   cd ai-evaluator
   ```

2. **Install dependencies:**:
   ```shell
   npm install
   ```

3. **Copy Configuration File:**
   Duplicate the `*.env.example` file and rename it to `.env`:

   ```shell
   cp .env.example .env
   ```

   Edit .env

   ```env
   OPENAI_API_KEY=your-key-here
   ```

4. **Run the development server:**
   ```shell
   npm run dev
   ```

## 🧪 Demo Data

This repo includes two mock proposals in the `mock-proposals/` folder for quick testing:

- `mock-proposals/proposal-1.pdf`
- `mock-proposals/proposal-2.pdf`

To try the evaluator without your own files:

1. Go to the main page.
2. Use the file upload to select both mock proposals.
3. Enter any project name.
4. Click “Evaluate” to see how the AI processes and ranks the proposals.

## 📦 API Behavior

The server handles uploads and evaluation via a form-based flow:

1. User uploads files and provides a project name.
2. Files are sent to OpenAI.
3. A prompt is crafted to instruct the AI to:
   - Evaluate proposals
   - Rank the top 5
   - Choose the best
   - Output structured JSON per schema
4. The result is rendered server-side and displayed to the user.

## 📚 Future Improvements

- 🔗 **Blockchain integration** for immutable public audits
- ✅ **Evaluation result certification** using digital signatures
- 🌍 **Multilingual support**
- 📊 **Rich visual summaries and charts**
- 📜 **PDF export** of evaluation reports

## 📄 License

MIT © [Kevin Robles](https://www.linkedin.com/in/kevinronu/)

Built with ❤️ using [Astro](https://astro.build) and [OpenAI](https://openai.com).