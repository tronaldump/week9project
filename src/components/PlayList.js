import React from 'react';
import PlayListItem from './PlayListItem';

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        songs: []
    };
  }


componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
  .then(results => {return results.json();})
      .then(data =>  {this.setState({songs: data})
        console.log('state', this.state.songs);})

      }


/*    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
      }
*/
  render() {
    const {songs} = this.state;

      return (

            <div className='col-md-6'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Playlist:</th>
                  </tr>
                </thead>
                {songs.slice(0, 3).map(song => <PlayListItem song={song} key={song.id} />)}
              </table>
            </div>

    )
  }
}
