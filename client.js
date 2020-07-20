import * as Colyseus from "colyseus.js";

const client = window.client = new Colyseus.Client('ws://localhost:2567');

(async () => {
  // use a different username every time browser reloads
  const name = "foo"+Math.random()
  await client.auth.login()
  console.log(`Starting username: ${client.auth.username}`)
  client.auth.username= name
  await client.auth.save()
  console.log(`Changed username: ${client.auth.username}`)
  await client.auth.save()
  console.log('second save complete')
})()