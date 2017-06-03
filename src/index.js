// TODO: Render the `App` component to the DOM
// var app = ReactDOM.render(<App sampleData={window.searchResult}/>, document.getElementById('app'));
// var app = ReactDOM.render(<App sampleData={window.searchYouTube}/>, document.getElementById('app'));

var app = ReactDOM.render(<App youTubeData={window.searchYouTube} sampleData={window.exampleVideoData}/>, document.getElementById('app'));
