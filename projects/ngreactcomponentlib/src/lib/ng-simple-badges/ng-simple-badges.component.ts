import { AfterViewInit, Component, Input, NgZone, OnChanges, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Avatar from 'react-avatar';

@Component({
  selector: 'app-ng-simple-badges',
  templateUrl: './ng-simple-badges.component.html'
})
export class NgSimpleBadgesComponent implements OnChanges, AfterViewInit {
	containerId: string = 'simple-badges-xxxxxxxx'.replace(/[x]/g, c => (Math.random() * 16 | 0).toString(16));
  
	@Input()
	name: string = '';
	@Input()
	logoColor: string = '';

	constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.render();
}

  ngOnChanges() {
      this.render();
  }

  render = () => {
    const props = {
      name: this.name,
			logoColor: this.logoColor
    };

		if (document.getElementById(this.containerId)) {
      this._ngZone.runOutsideAngular(
      	() => {
          ReactDOM.render(React.createElement(Avatar, props),
            document.getElementById(this.containerId)
          );
        }
      );
		}
  }

}
