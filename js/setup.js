'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var anotherWizardBlock = document.querySelector('.setup-similar');
anotherWizardBlock.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardFamilies = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards;
wizards = [
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' + wizardFamilies[Math.floor(Math.random() * wizardFamilies.length)],
    coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
    eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  },
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' + wizardFamilies[Math.floor(Math.random() * wizardFamilies.length)],
    coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
    eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  },
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' + wizardFamilies[Math.floor(Math.random() * wizardFamilies.length)],
    coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
    eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  },
  {
    name: wizardNames[Math.floor(Math.random() * wizardNames.length)] + ' ' + wizardFamilies[Math.floor(Math.random() * wizardFamilies.length)],
    coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
    eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);


