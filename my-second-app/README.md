# MySecondApp

use ``<ng-content>`` to project the views

# Lifecycle Hooks

``ngOnChanges`` : Called after a bound input property changes the @Input things  
``ngOnInit`` : Called once the component is initialized, note that this method runs after the constructor is called  
``ngDoCheck`` : Called during every change detection run, every event, and at every new rendering   
``ngAfterContentInit`` : Called after content (ng-content) has been projected into view
``ngAfterContentChecked`` : Called every time the projected content has been checked  
``ngAfterViewInit`` : Called after the component's view (and child views) has been initialized  
``ngAfterViewChecked`` : Called every time the view (and child views) have been checked  
``ngOnDestroy`` : Called once the component is about to be destroyed  

# Attribute vs Structural

## Attribute Directives
- Looks like a normal HTML attribute (possibly with databinding or event binding)  
- Only affect/change the element they are added to

## Structural Directive
- Looks like a normal HTML attribute but have a leading * (for desugaring)  
- Affect a whole area in the DOM (elements get added/removed)   

# View Encapsulation 
  encapsulation: ViewEncapsulation.None // Emulated, ShadowDOM

## Why should you use the Render2 ?

sometimes you might not have the access to modifying the element directly, such as service workers, there you would use the Renderer



