# Random User Generator

A JavaScript project that uses the Fetch API to generate random user data, including names, addresses, and profile images.

### Installation

1.Clone or download the repository to your local machine.
2.Navigate to the root directory of the project.
3.Open index.html in your browser to view the project in action.

## Usage

The project is designed to be used out of the box, but you can also customize the user data by modifying the Fetch API parameters.

fetch("https://randomuser.me/api/?results=10")
  .then((res) => res.json())
  .then((data) => {
    // handle data
  });

You can change the results parameter to specify the number of users you want to generate.

## Contributing

If you would like to contribute to the project, feel free to submit a pull request. All contributions are welcome!

## Authors

- [Mehmet Akif Tas](https://github.com/mehmetakiftas)

## License

This project is unlicensed
