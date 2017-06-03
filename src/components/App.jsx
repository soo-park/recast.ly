class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.sampleData,
      playing: props.sampleData[Math.floor(Math.random() * props.sampleData.length)]
    };
  }

  handleClick(video) {
    this.setState({
      playing: video
    });
  }  

  render() {
    return (

    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer appState={this.state} video={this.state.playing}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.list} handleClick={this.handleClick.bind(this)}/>
      </div>
    </div>
    );
  }

  // changePlayer(video) {
  //   this.setState({
  //     playing: video
  //   });
  // }
}

/*
var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer />
    </div>
    <div className="col-md-5">
      <VideoList />
    </div>
  </div>
);
*/
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
