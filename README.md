## To reproduce

### Step 1

In terminal 1, link the module just so it's easy to test it in isolation
```sh
$ cd ./some-lib
$ yarn link 
```

### Step 2

In terminal 2, link the lib and run the consumer
```shell
$ cd ./some-consumer
$ yarn link 'some-lib'
$ node ./index.js
```

Expected output is:

```
✔️ Saw named export `wave`
```

### Step 3

Change the `importHelpers` setting in `some-lib` to `true`

Terminal 1, install deps and recompile the lib

```shell
$ yarn install
$ yarn tsc
```

Terminal 2, run the consumer again

```shell
$ node ./index.js
```

Output from Terminal 2 is now:
```
❌ Named export missing
```

### Step 3

Install Typescript 4.3 instead and recompile

Terminal 1:

```shell
$ yarn install typescript@4.3
$ yarn tsc
```

Terminal 2:

```shell
$ node ./index.js
```

Output from Terminal 2 is now:
```
✔️ Saw named export `wave`
```
