# 🤖 AI Mock Interview Platform (Voice-Enabled)

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vapi](https://img.shields.io/badge/Vapi.ai-Voice_Agent-orange?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini_AI-LLM-blue?style=for-the-badge)

### [🔴 LIVE DEMO ](https://ai-mock-interviews-6pv3.vercel.app/)
*(Click above to try the AI Interviewer)*

---

### 🚀 **Overview**
This is a real-time **AI Mock Interviewer** that conducts technical interviews using **Voice AI**.
Unlike standard text chatbots, this application uses **Vapi.ai** to create a conversational voice agent that:
1.  **Speaks** technical questions to the candidate.
2.  **Listens** to the candidate's spoken answers.
3.  **Analyzes** the response using **Gemini AI** and provides instant feedback.

### 🛠 **Tech Stack**
* **Frontend:** Next.js 14 (App Router), Tailwind CSS
* **Voice Infrastructure:** **Vapi.ai** (for low-latency voice streaming)
* **AI Logic:** Google Gemini API (for generating questions & feedback)
* **Backend:** Node.js, Firebase (for storing interview history)

### ✨ **Key Features**
* **🎙️ Human-Like Voice Interaction:** Zero-latency conversation using Vapi's edge network.
* **🧠 Context-Aware Questions:** The AI adapts the next question based on your previous answer.
* **📊 Performance Score:** Generates a detailed scorecard (Accuracy, Communication, Technical Depth) after the interview.

### 📸 **Screenshots**
<img width="1909" height="865" alt="image" src="https://github.com/user-attachments/assets/4ec6bcfc-dc15-46eb-901c-fa4945a5f048" />

<img width="1314" height="857" alt="image" src="https://github.com/user-attachments/assets/01e05d72-6eb7-44d3-be11-f23331ea4a33" />

<img width="1879" height="859" alt="image" src="https://github.com/user-attachments/assets/de12cef4-ae53-4d38-b0bf-5a0a316776d6" />




---

### 🏃‍♂️ **How to Run Locally**

```bash
# Clone the repo
git clone [https://github.com/Manya2811/ai_mock_interviews.git](https://github.com/Manya2811/ai_mock_interviews.git)

# Install dependencies
npm install

# Add Environment Variables (.env)
NEXT_PUBLIC_VAPI_KEY=your_key_here
GEMINI_API_KEY=your_key_here

# Run the server
npm run dev
