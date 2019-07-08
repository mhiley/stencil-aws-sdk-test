import { Component, h } from '@stencil/core';
import * as AWS from 'aws-sdk/global';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  componentWillLoad() {
    AWS.config.region = 'us-west-2';
    AWS.config.credentials = new AWS.Credentials(
      'asdf',
      'zxcv',
      null
    );
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
