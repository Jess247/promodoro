# Pomodoro Timer

This is a Pomodoro Timer built with Vite and React. The timer helps you manage your focus and break intervals to increase productivity using the classic Pomodoro technique.

## Features

- **Focus and Break Sessions**: Alternates between a 25-minute focus session and a 5-minute break session.
- **Circular Progress Display**: Displays remaining time and progress through an animated circular progress bar.
- **Pause and Start Timer**: Easily pause or resume your session with a button click.
- **Visual Styling**: Customized with `react-circular-progressbar` and Ant Design components for an aesthetic, user-friendly interface.

## Installation

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/pomodoro-timer.git
cd pomodoro-timer
```

### 2. Install Dependencies

Run the following command to install dependencies:

```
npm install
```

### 3. Run the App

```
npm run dev
```

The app will be available at http://localhost:3000.

## Usage

- Start Timer: Click the "Start Timer" button to begin a 25-minute focus session. The timer and progress bar will start counting down.

- Pause Timer: Click "Pause Timer" to pause the session.
- Break Sessions: After a focus session, the timer automatically switches to a 5-minute break. When the break is over, the timer reverts to the focus session.

## Project Structure

The core functionality is implemented in the Progress component:

- useState hooks: Manage time, formatted time, session states (focus/break), and progress values.
- useEffect hook: Handles the countdown timer, switching between focus and break sessions, and formatting time.
- Helper functions: formatTime formats the remaining seconds into mm:ss format.

## Technologies Used

- React and Vite for efficient development and a fast build process.
- react-circular-progressbar for an animated circular progress indicator.
- Ant Design for a clean and consistent button component.
- CSS for styling and positioning components within the app.

## Future Improvements

- Customizable Timer Durations: Allow users to set their own focus and break durations.
- Audio Alerts: Notify users when a session ends.
- Session Statistics: Track and display completed sessions and total focus time.
