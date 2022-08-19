# react-native-ios-passkit

React-Native wrapper for iOS PassKit. Contains a PKAddPassButton and a methods to work with PassKit.

## Installation

```sh
npm install @reeq/react-native-ios-passkit
```

or

```sh
yarn add @reeq/react-native-ios-passkit
```

and

```sh
cd ios/
pod install
```

## Usage

```js
import { canAddPasses, addPass, AddPassButton } from 'react-native-ios-passkit';

// ...
<AddPassButton
  style={{ margin: 24, height: 60, width: 194 }}
  onPress={async () => {
    try {
      const isAddable = await canAddPasses();
      if (isAddable) {
        await addPass('YOUR BASE 64 PASS');
      }
    } catch (err) {
      console.log(err);
    }
  }}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
