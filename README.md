# Photography Gallery
## Project Overview
  
This project is an interactive photography gallery web application that displays various categories of images with a flip-card effect. Users can filter images by category, toggle themes, like photos, share images, and view them in full-screen mode.

## Key Features
  
### 1. Responsive Grid Layout
- The gallery uses CSS Grid to organize images into a responsive layout that adapts to different screen sizes
- Media queries ensure proper display on smaller screens
### 2. Category Filtering
- Images are organized into categories: All Photos, Nature, Architecture, Sports, and Food
- Users can filter images by clicking on category buttons
- Active filtering is visually indicated with button highlighting
- When switching categories, cards are shuffled for visual interest
### 3. Interactive Card Effects
- Each image is presented as a flip card with front and back sides
- Front side shows the image
- Back side displays a quote related to the image and interactive buttons
- Cards flip on hover to reveal the back content
### 4. Theme Toggler
- Users can switch between two custom themes (green and red)
- Theme preference is saved in localStorage for persistence between sessions
- Each theme includes:
  - Custom color scheme
  - Custom background image
  - Coordinated button colors and hover effects
### 5. Social Interaction Features
- Like button functionality with counter
- Share button to share images via:
  - Web Share API (on supported browsers)
  - URL copying (fallback method)
- Sharing preserves the specific image being shared
### 6. Full Image View Mode
- Double-clicking on any card opens the image in a full-screen overlay
- Close button to exit the full view
- Shared links directly open the full image view

## Technical Implementation

### CSS Features
- Custom CSS variables for theming
- CSS transitions and transforms for card flipping effect
- Font Awesome integration for icons
- Google Fonts integration for typography
### JavaScript Functionality
- Dynamic category filtering
- Card shuffling algorithm using Fisher-Yates shuffle
- URL parameter handling for shared content
  
## Setup Instructions

- Clone the repository
- Open the grid.html file in a web browser
- No server or build process required - this is a static website
 
## Code Structure

- HTML: Defines the gallery structure and card layout
- CSS: Handles styling, animations, and responsive design
- JavaScript: Manages interactivity, filtering, and social features
  

