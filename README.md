### **Prerequisites**

**1. Install Cursor**
Download from https://cursor.com/downloads and create a free account.

**2. Install Node Version Manager (nvm)**
Run the installation script:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```
- After installation, verify with `nvm --version`.
- If the command fails, run the following to load nvm, then try verifying again.
  ```bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  ```

**3. Install Node.js**
Install the latest Long-Term Support (LTS) version:
```bash
nvm install --lts
```
Verify the installation of Node.js and npm:
```bash
node -v
npm -v
```

**4. Install pnpm**
Use npm to install pnpm globally:
```bash
npm install -g pnpm
```
Verify the installation:
```bash
pnpm --version
```

**5. Install the Repository**
- Download the code: https://send.vis.ee/download/7dafd63043474b1b/
- Unzip the folder.
- Open the folder in Cursor.

**6. Run the Application**

In Cursor, open a new terminal (Cmd/Ctrl + J) and run the following commands:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```
Once the server is running, open `http://localhost:3000` in your browser.

Of course. Here is a clear and concise way to add instructions for setting up a local Git repository, designed to be easy for both Mac and Windows users.

---

**7. Set Up Git**

This allows you to track your changes as you fix bugs.

**1. Install Git**
First, check if Git is installed by running this command in your terminal:
```bash
git --version
```
If the command is not found, download and install Git from the official website: https://git-scm.com/downloads

**2. Initialize the Repository**
In your terminal, navigate to the project folder you unzipped and run:
```bash
# This creates a new local Git repository in the folder.
git init
```

**3. Create the First Commit**
It's good practice to save the initial state of the code before you begin.
```bash
# Stage all files for the initial commit
git add .

# Save the files with a descriptive message
git commit -m "Initial commit"
```
Now you can commit your bug fixes as you work.

---

### **Debugging Challenge Instructions**

The challenge consists of two 30-minute parts.

1.  **Part One:** Using only the source code, run the application to find and fix as many bugs as possible.
2.  **Part Two:** Using a provided list of known bugs, fix as many as you can.

Got it. Here is the updated version with the mention of documentation.

---

### **Tips for the Challenge**

**1. Describe Bugs Clearly to the AI**
To get the best help from Cursor's AI, provide high-quality information. The more specific you are, the better the fix will be.

*   **Explain the problem:** Describe what you expected to happen versus what actually happened.
*   **Provide error messages:** Copy and paste the complete, exact error from the terminal or browser console.
*   **Add context:** Mention which files you suspect are involved. If the bug relates to a library or API, providing a link to its documentation is very helpful.

**2. Use Git to Save Your Progress**
Version control is your safety net. It allows you to experiment without fear of losing your work.

*   **Commit often:** After each successful fix, commit your changes with a clear message (e.g., `git commit -m "fix: resolve login button bug"`). This creates a safe checkpoint.
*   **Roll back if needed:** If a change breaks the application, you can easily revert to the last working version and try a different approach.