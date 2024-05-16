Project: Simple Video Captioning Web App

Overview:

The Simple Video Captioning Web App is a React-based application designed to allow users to add captions to hosted videos along with timestamps. The app provides an intuitive interface for users to input video URLs, captions, and corresponding timestamps, which are then synchronized with the video playback. This project aimed to create a straightforward solution for adding captions to videos without the additional complexity of frameworks like Next.js and Tailwind CSS.

Features:

1. Video URL Input: Users can enter the URL of a hosted video. Please note that only hosted video URLs are supported. YouTube video URLs and similar platforms are not compatible due to the additional requirements, such as embedding via iframes.
2. Caption Input: Users can enter captions for the video.
3. Timestamp Input: Users can specify timestamps for when captions should be displayed.
4. Video Playback: The app displays the video along with captions synchronized with the video playback.
5. Play/Pause Control: Users can play or pause the video as needed.

Implementation Details:

1. Frontend Framework: React.js
2. Styling: Custom CSS for responsiveness.
3. Caption Synchronization: Captions are synchronized with the video playback using React state and the timeupdate event of the HTML5 video element.

Components:
1. VideoPlayer Component: Responsible for displaying the video player, handling user interactions, and synchronizing captions with video playback.
2. CaptionInput Component: Renders input fields for entering captions and timestamps, along with a button to add captions.
3. CaptionDisplay Component: Displays captions above the video player when synchronized with the video playback.
4. VideoUrlInput Component: Renders an input field for entering the URL of the hosted video.

Dependencies:
React.js

Technical Notes:

1- The project intentionally avoided the use of advanced frameworks like Next.js and Tailwind CSS to maintain simplicity and focus on core functionality.
2- Custom CSS was used for responsive design to ensure compatibility across various screen sizes and devices.
3- Hosted video URLs are preferred. URLs from platforms like YouTube may not work directly due to additional requirements such as embedding via iframes.

Running the Project:
1 - Clone Repository: If you have Git installed, clone the project repository from GitHub.
2- git clone https://github.com/Arun1522/Simple-Video-Captioning-Web-App
3- Install Dependencies: Navigate to the project directory and install the required dependencies using npm or yarn.

cd project-directory
npm install

Run the Application: Once the dependencies are installed, start the development server to run the application.

npm start

4- Access the App: Open your web browser and navigate to http://localhost:3000 to access the Simple Video Captioning Web App.

Future Enhancements:
1 -Integration of Next.js for improved performance and SEO.
2 -Implementation of Tailwind CSS for streamlined styling and component consistency.

Conclusion:
The Simple Video Captioning Web App provides a user-friendly solution for adding captions to hosted videos with ease. By leveraging React.js and custom CSS, the project prioritizes simplicity and functionality, laying the foundation for potential future enhancements.

