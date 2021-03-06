//Create a new component. This component should produce some HTML
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCglWaCRiL8EJin1HYJ-9a_g7yEYy3IDj0';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            videos: [],
            selectedVideo: null
        };
    this.videoSearch('Learn React JS');
    }

    videoSearch(query) {
        YTSearch({key: API_KEY, term: query}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    };

    render() {
        return (
        <div>
            <SearchBar onSearchTermChange={(term)=>this.videoSearch(term)}/>
            <VideoDetail 
                videoItem={this.state.selectedVideo}></VideoDetail>
            <VideoList 
                onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}} 
                videos={this.state.videos}/>
        </div>
        );
    }
}
//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));