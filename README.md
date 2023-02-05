## Author

Andrus Wen

## App Version

v1.0

## Node Version

v18.3.0

### TECHS

- React v18.2.0
- Typescript v4.4.2
- Deck.GL v8.8.x
- Mapbox v2.12.0
- Turf.Js v6.5.0
- Mui 5
- Jest

### Deploy Site

[Construct Building App](https://construct-building.netlify.app/)
!["Site Image"](/public/cb.png "construct building")

## Instruction

Easy to handle this app.\

1. Please run `yarn start` in this repository.
   Default launch url is `localhost:3000`.

2. You can find a button labeled as `LOAD GEOJSON`

3. Then click it to choose `GeoJSON` file for the source data which will determine the landing area of the building.

4. After that you can control its height, floors, coverage with slider or input.
5. Wow! So amazing~ It really works well.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. \
It will show the coverage of the unit testing.\
Here is the result picture.
!["Test Image"](/public/test.png "test result")

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
