Simple Video Captioning Web App

Overview:
The Simple Video Captioning Web App is a React-based application designed to allow users to add captions to hosted videos along with timestamps. The app provides an intuitive interface for users to input video URLs, captions, and corresponding timestamps, which are then synchronized with the video playback. This project aimed to create a straightforward solution for adding captions to videos without the additional complexity of frameworks like Next.js and Tailwind CSS.

Features:

Video URL Input: Users can enter the URL of a hosted video. Please note that only hosted video URLs are supported. YouTube video URLs and similar platforms are not compatible due to the additional requirements, such as embedding via iframes.
Caption Input: Users can enter captions for the video.
Timestamp Input: Users can specify timestamps for when captions should be displayed.
Video Playback: The app displays the video along with captions synchronized with the video playback.
Play/Pause Control: Users can play or pause the video as needed.
Running the Project:
Clone Repository: If you have Git installed, clone the project repository from GitHub.

git clone https://github.com/example/project-repo.git
Install Dependencies: Navigate to the project directory and install the required dependencies using npm or yarn.

cd caption-editor
npm install
or

Copy code
yarn install
Run the Application: Once the dependencies are installed, start the development server to run the application.

npm start
or

yarn start
Access the App: Open your web browser and navigate to http://localhost:3000 to access the Simple Video Captioning Web App.

you can use this link for video play: https://www.w3schools.com/html/mov_bbb.mp4

Technical Notes:
The project intentionally avoided the use of advanced frameworks like Next.js and Tailwind CSS to maintain simplicity and focus on core functionality.
Custom CSS was used for responsive design to ensure compatibility across various screen sizes and devices.
Hosted video URLs are preferred. URLs from platforms like YouTube may not work directly due to additional requirements such as embedding via iframes.

Future Enhancements:
Integration of Next.js for improved performance and SEO.
Implementation of Tailwind CSS for streamlined styling and component consistency.

Conclusion:
The Simple Video Captioning Web App provides a user-friendly solution for adding captions to hosted videos with ease. By leveraging React.js and custom CSS, the project prioritizes simplicity and functionality, laying the foundation for potential future enhancements.
