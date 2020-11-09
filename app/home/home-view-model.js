var observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    textFieldValue: "",
  });

  return viewModel;
}

module.exports = HomeViewModel;
