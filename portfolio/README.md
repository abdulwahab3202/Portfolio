# 👨‍💻 Abdul Wahab - Full Stack Developer Portfolio

![Portfolio Preview](public/background.png)
*(Note: You can replace the image path above with a screenshot of your actual website if you have one, or keep the background image)*

## 🚀 About The Project
This is a personal portfolio website built to showcase my journey as an **Information Technology student** and **Full Stack Developer**. It highlights my technical skills in the **MERN Stack** and **Java/Spring Boot**, features my key projects, and provides a way for potential employers and collaborators to connect with me.

The application is fully responsive, interactive, and integrated with a real-time email service for contact.

### ✨ Features
* **Responsive Design:** Optimized for desktops, tablets, and mobile devices using CSS3 and Media Queries.
* **Dynamic Project Showcase:** Data-driven components rendering projects like *Smart Village Management System*, *ArabSpice*, and *Console Debugger AI*.
* **Interactive UI:** Smooth scrolling, hover effects, and modern styling.
* **Contact Form Integration:** Fully functional contact form using **EmailJS** for direct messaging.
* **Downloadable Assets:** Direct link to download my Resume/CV.

---

## 🛠️ Tech Stack
* **Frontend:** [React.js](https://reactjs.org/), [Vite](https://vitejs.dev/)
* **Styling:** CSS3, Modular CSS Architecture
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Email Service:** [EmailJS](https://www.emailjs.com/)
* **Alerts:** [SweetAlert2](https://sweetalert2.github.io/)

---

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
* Node.js (v14 or higher)
* npm (Node Package Manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/abdulwahab3202/portfolio.git](https://github.com/abdulwahab3202/portfolio.git)
    cd portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    This project uses EmailJS for the contact form. You need to create a `.env` file in the root directory and add your keys:
    
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *(Note: These keys are kept private and are not committed to GitHub)*

4.  **Run the Development Server**
    ```bash
    npm run dev
    ```

5.  **Open in Browser**
    Visit `http://localhost:5173` to view the application.

---

## 📂 Project Structure

```text
├── public/              # Static assets (Resume, Favicon, Backgrounds)
├── src/
│   ├── assets/          # Images and Icons
│   ├── components/      # Reusable React Components
│   │   ├── AboutUs/     # About Me section
│   │   ├── Contact/     # Contact Form with EmailJS logic
│   │   ├── Footer/      # Footer component
│   │   ├── HeroSection/ # Landing area with Resume download
│   │   ├── Navbar/      # Navigation bar
│   │   └── Projects/    # Project showcase (Data-driven)
│   ├── App.jsx          # Main application layout
│   └── main.jsx         # Entry point
└── index.html           # HTML template