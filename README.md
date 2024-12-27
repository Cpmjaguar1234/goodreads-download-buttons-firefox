# Goodreads Download Buttons for Firefox

A Firefox extension that enhances your Goodreads experience by adding convenient download buttons to book pages. The extension adds two buttons:
- 📖 Download eBook - Searches Anna's Archive/Libgen
- 🎧 Download Audiobook - Searches AudioBook Bay

## Features

- Automatically adds download buttons to every book page on Goodreads
- Left click searches Anna's Archive
- Right click on the eBook button searches Libgen as a fallback
- Clean integration with Goodreads' native UI
- No data collection or tracking

## Installation Instructions

Since this extension isn't published on the Firefox Add-ons store, you'll need to install it temporarily for development:

1. Download this repository (Code → Download ZIP) and extract it to a folder
2. Open Firefox and type `about:debugging` in the address bar
3. Click on "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the folder where you extracted the files
6. Select the `manifest.json` file

Note: This is a temporary installation that will be removed when you close Firefox. 
## Usage

1. Visit any book page on Goodreads (URLs starting with `https://www.goodreads.com/book/`)
2. You'll see two new buttons below the existing buttons:
   - "Download eBook" (📖)
   - "Download Audiobook" (🎧)
3. Click any button to search for the book on the respective website
4. For eBooks, you can right-click to search on Libgen instead of Anna's Archive

## Legal Notice

This extension only provides search shortcuts. Users are responsible for ensuring they only download content they have the right to access.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements. 
