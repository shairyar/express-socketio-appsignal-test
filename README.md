# AppSignal express+socket.io test

## Instructions

- Install dependencies: `npm install`
- Start the project: `APPSIGNAL_KEY={YOUR_APPSIGNAL_KEY} npm start`
- Open [http://localhost:3000/](http://localhost:3000/)

Check the network tab in the browser development tools, socket.io will try to connect and receive a 400 response from the backend `Session ID unknown`.
If the project is started without `APPSIGNAL_KEY` socket.io will connect successfully.
