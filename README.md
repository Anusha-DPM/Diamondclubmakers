# Diamond Club Makers - Next.js Website

A modern, responsive website built with Next.js and Tailwind CSS, featuring a beautiful header design that matches the provided screenshot.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI**: Built with Tailwind CSS for consistent, beautiful styling
- **Custom Fonts**: Uses Sansation font family for navigation and text
- **Interactive Elements**: Hover effects and active states for navigation items
- **Gold Gradient Header**: Beautiful gradient background matching the design

## Project Structure

```
diamondclubmakers/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and font imports
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page with Header component
│   └── components/
│       └── Header.tsx           # Header component with navigation
├── public/
│   └── fonts/                   # Font files directory
├── tailwind.config.ts           # Tailwind CSS configuration
└── package.json                 # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd diamondclubmakers
```

2. Install dependencies:
```bash
npm install
```

3. **Important**: Download the Sansation font files:
   - You need to obtain the actual Sansation font files (`.woff2` and `.woff`) from a legitimate source
   - Place them in the `public/fonts/` directory:
     - `sansation-regular.woff2`
     - `sansation-regular.woff`
     - `sansation-bold.woff2`
     - `sansation-bold.woff`

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Font Setup

The project requires the Sansation font family. You can:

1. **Purchase the font** from the official source
2. **Use a web font service** like Google Fonts (if available)
3. **Replace with a similar font** by updating the CSS and Tailwind config

### Alternative Font Setup

If you can't obtain Sansation fonts, you can replace them with similar alternatives:

1. Update `src/app/globals.css` to use alternative fonts
2. Update `tailwind.config.ts` with the new font families
3. Update the Header component to use the new font classes

## Design Features

### Header Component
- **Background**: Gold gradient from amber-700 to yellow-400
- **Navigation**: Centered menu with pipe separators
- **Colors**: Dark blue (#003366) for text, with hover effects
- **Responsive**: Stacks vertically on mobile, horizontal on desktop
- **Active State**: Blue underline for the current page

### Responsive Behavior
- **Mobile**: Logo, menu, and button stack vertically
- **Tablet**: Elements remain in a single row with adjusted spacing
- **Desktop**: Full horizontal layout with proper spacing

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
- Primary blue: `#003366`
- Hover blue: `#004080`
- Gold gradient: `from-amber-700 via-amber-500 to-yellow-400`

### Fonts
- Navigation text: `sansation-regular`
- Logo and emphasis: `sansation-bold`

### Spacing
- Mobile: `px-4 py-4`
- Desktop: `px-6 py-4` (larger screens)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
