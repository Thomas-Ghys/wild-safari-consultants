import {Directive, Self, TemplateRef} from '@angular/core';

@Directive({
	selector: 'ng-template[libSafariCardDescription]'
})
export class SafariCardDescriptionDirective {
	constructor(@Self() public template: TemplateRef<unknown>) {}
}
