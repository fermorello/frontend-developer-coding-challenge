# Solution to the Aerolab Frontend Coding Challenge

This project is my solution to the **Aerolab Frontend Coding Challenge**. The challenge consisted of creating a web application that allows users to search and collect video games using the IGDB API and browser storage.

## Deployment
The application is deployed on Vercel, and you can access the public demo [here](https://your-project-name.vercel.app).

## Description

The app allows users to perform dynamic searches for video games, add their favorite games to a collection, and view detailed information about each game on a dedicated page. I used **Next.js** and **Tailwind CSS** to create a smooth, fast, and visually appealing experience, optimized for both mobile and desktop devices.

### Key Features

- **Video Game Search**: Users can search for games as they type. The results display the game’s cover and title.
- **Game Collection**: Games can be added to a personal collection. Users can view their saved games in a grid.
- **Game Details Page**: Each game has its own details page showing additional information such as release date, rating, and platforms.
- **IGDB API Integration**: The IGDB API is used to fetch information about the video games.
- **Responsive Design**: The application is fully responsive, ensuring an optimized experience on both mobile and desktop devices.
- **Performance Optimization**: The app optimizes image sizes and manages loading and error states efficiently.

## Technologies Used

- **Next.js**: React framework for server-side rendering (SSR) and routing.
- **Tailwind CSS**: CSS framework for fast and flexible UI design.
- **TypeScript**: Ensures type safety and improves code maintainability.
- **IGDB API**: Used to fetch video game data.
- **Vercel**: Used for production deployment.

## Installation and Running Locally

Follow these steps to run the project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/aerolab-coding-challenge.git
   cd aerolab-coding-challenge
2. **Install dependencies:**
    ```
    npm install
    ```
3. **Configure environment variables: Create a .env.local file at the root of the project with the following keys**
     IGDB_CLIENT_ID=
     IGDB_CLIENT_SECRET=
     IGDB_API_URL=
     NEXT_PUBLIC_URL=
   ```
4. **Run the application:**
   ```
     npm run dev
   ```
5. **Access the application in your browser:** Navigate to http://localhost:3000.

## Project Structure

```
/frontend
│
├── /public
├── /src
    ├── /app
    ├── /components
    ├── /entities
    ├── /hooks
    ├── /lib
    ├── /types
```

## Implemented Features

### Home Page:
- Search bar to find video games.
- Display of games added to the collection.
- Grid view of game covers.
- Sorting games by release date and by date added to the collection.

### Game Details Page:
- Game information: cover, title, rating, release date, and platforms.
- Option to add or remove the game from the collection.
- Image gallery and list of similar games.
- User-friendly URLs with slugs instead of IDs.

### Responsiveness:
- The application adapts correctly to mobile, tablet, and desktop screen sizes.

### Optimization:
- Efficient image loading using appropriate sizes.
- Error handling and load state management.

### Accessibility:
- Keyboard navigation and basic screen reader support.

## Future Improvements
- **User Authentication**: Implement a login system using a solution like Supabase or Firebase, so users can save their collection across devices.
- **Search Enhancements**: Include an autocomplete or suggestion system based on search terms.
- **Unit Testing**: Add more tests with React Testing Library to ensure key components function correctly.
- **Animations and Micro-Interactions**: Enhance the interface with subtle animations to make it more engaging.

