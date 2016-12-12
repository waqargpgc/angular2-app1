import {Component ,OnChanges, Input} from '@angular/core';
@Component({
    selector:'stars',
    templateUrl : `app/share/star.component.html`,
    styleUrls:['app/share/star.component.css']
})
export class StarComponent implements OnChanges{
    rating: Number=5;
    starWidth=Number;
    ngOnChanges():void{
        
    }
}