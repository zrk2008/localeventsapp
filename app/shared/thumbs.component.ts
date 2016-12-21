import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'acw-thumb',
    templateUrl: 'app/shared/thumbs.component.html',
    styleUrls: ['app/shared/thumbs.component.css']
})
export class ThumbComponent implements OnChanges {
    @Input() rating: number;
    thumbWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
         new EventEmitter();

    ngOnChanges(): void {
        this.thumbWidth = this.rating * 86 / 5;
    }

    onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }
}
