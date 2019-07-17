'use strict';

var listOfComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var firstName = ['Иван', 'Артем', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Саша', 'Данил'];
var userPhotoDescription = [];

var randomCase = function (min, max) {
  return Math.floor(Math.random() * (max - min));
};

var randomCaseImg = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var creatingUserList = function () {
// Создание объектов массива описания фото пользователей
  for (var i = 0; i < 25; i++) {
    userPhotoDescription[i] = {
      url: 'photos/' + randomCaseImg(1, 25) + '.jpg',
      likes: randomCase(15, 200),
      comments: listOfComments[randomCase(0, 6)],
      avatar: 'img/avatar-' + randomCaseImg(1, 6) + '.svg',
      name: firstName[randomCase(0, 8)]
    };
  }
};

creatingUserList();
// console.log(userPhotoDescription);

var creatingCopies = function () {
  var elementFillsCopies = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#picture').content.querySelector('.picture');

  for (var j = 0; j < 25; j++) {
    var element = similarWizardTemplate.cloneNode(true);

    element.querySelector('.picture__img').src = userPhotoDescription[j].url;
    element.querySelector('.picture__likes').textContent = userPhotoDescription[j].likes;
    element.querySelector('.picture__comments').textContent = userPhotoDescription[j].comments;

    fragment.appendChild(element);
  }
  elementFillsCopies.appendChild(fragment);
};

creatingCopies();
