<div align=center>
    <h1 align=center>
        <br>
        Simpleshow front-end assessment 
        <br>
    </h1>
    <p style="font-size: 1.35rem; font-weight: 500; padding: 2rem; text-align: center"> This challenge proposition is to build an interactive scene with Drag 'n' drop features.  </p>
    <br>
</div>

# Setup

### Requirements

- Node Package Manager (NPM)

### Installation

- Clone the [repository]('https://github.com/adriansdk/simpleshow.git')
- Install dependencies using: `npm install`
- Run the app in the development mode using: `npm start`
- The app should automatically open at `http://localhost:3000`, if not, open manually and have fun!

# Decision making and considerations.

### Choice of tools:

My first significant decision was which tool I was going to use for state management and which framework better suited this project. Due to the scale of my app and personal prefference. My first idea was to use Vue.js, what changed my mind was analyzing the capabilities of drag and drop libraries available in each framework. [Vue Draggable](https://github.com/SortableJS/Vue.Draggable) being the main candidate for Vue, but unfortunately falling short in comparison to [react-dnd](https://github.com/react-dnd/react-dnd), mostly because of way better cross-browser compatibility and availability of hooks. So I ended up going with React.js and react-dnd.<br>

### Project management:

Decided to take the time to work on organizing myself with Trello, it's simple and gets the job done with the least amount of setup, making this a great choice for such a quick project, plus it feels nice to see tasks being completed and labels turning green. Also I have grown into the habit of sharing branch names with tasks id's.

##### All my individual tasks can be found here: [My Trello Board](https://trello.com/b/rGYiIIK9/megazord) (It's called Megazord for obvious reasons)

# Developer:

- [Adrian Visnieski](https://github.com/adriansdk)
