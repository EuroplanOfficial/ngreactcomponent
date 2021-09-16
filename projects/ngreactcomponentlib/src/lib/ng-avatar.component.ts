import { AfterViewInit, Component, Input, NgZone, OnChanges, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Avatar, { ReactAvatarProps } from 'react-avatar';

@Component({
  selector: 'app-ng-avatar',
  templateUrl: './ng-avatar.component.html'
})
export class NgAvatarComponent implements OnChanges, AfterViewInit {
	containerId: string = 'avatar-xxxxxxxx'.replace(/[x]/g, c => (Math.random() * 16 | 0).toString(16));
  
	@Input()
	name: string = '';
	@Input()
	round: string = '';
  @Input()
	color?: string = undefined;

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
    const props: ReactAvatarProps = {
      name: this.name,
      round: this.round,
      color: this.color
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
