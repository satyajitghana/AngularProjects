# My First App

Create a new project by using ``ng new my-first-app``  
Now to add BootStrap to this type ``npm install --save bootstrap`` and then add it to Styles in ``angular.json``  
```json5

            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
```

# Lesson:

How does the app work ?  
Angular is a SPA - Single Page Application, so the only page that is, is the index.html. now you'll see the ``<app-root>`` tag, now how does angular know that this means our root app ?   

Here is the main.ts file, this bootstraps the AppModule, which contains the AppComponent
```angular2
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
```

The Selector is present in AppComponent  
```angular2
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

This is how the ``<app-root>`` works, there are selectors for various Components that can be used in html, and the AppModule is made aware of these components's selectors, each of these component has a html and a css associated with them.

Use ``emmet`` plugin in editor

You can create a new component using ``ng generate component servers`` this will create a folder server and inside will have the css, html and the ts file.

# Data Binding

Output data from the Logic can be bound using  
1. String Interpolation ``{{ data }}``
Any Expression that can be resolved to a string at the end works with string interpolation  
USAGE: ``{{string}}``

2. Property Binding `` [property]="data" ``
USAGE: 
```html
<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
```
The Template (HTML) can reach to user events and trigger logic
3. Event Binding ``(event)="expression"``

How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.  

Important: For events, you don't bind to onclick but only to click (=> (click)).  

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.  

4. Two Way Data Binding
``[(ngModel)]="data"``

# Directives

Directives are instructions in the DOM!  
Components are kind of such instructions  
Directives can be without templates  

``<p appTurnGreen> Receives a green background! </p>``  
this is a custom directive, attribute selector are used, but you can use css class or element style like selector

Directives are declared as:

```angular2
@Directive({
  selector: '[appTurnGreen'
})
export class TurnGreenDirective {
  ...
}
```

Property binding is not the same as directive !

we are binding to a property of directive

