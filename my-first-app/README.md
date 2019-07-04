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
