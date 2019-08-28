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

var randomCaseComment = function () {
  var rand = Math.floor(Math.random() * (listOfComments.length - 1) + 1);
  var arrayOfComments = [];
  for (var b = 0; b < rand; b++) {
    arrayOfComments[b] = listOfComments[Math.floor(Math.random() * listOfComments.length)];
  }

  return arrayOfComments;
};

var creatingUserList = function () {
// Создание объектов массива описания фото пользователей
  for (var i = 0; i < 25; i++) {
    userPhotoDescription[i] = {
      url: 'photos/' + randomCaseImg(1, 25) + '.jpg',
      likes: randomCase(15, 200),
      comments: randomCaseComment().length,
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
  var templateForPhotos = document.querySelector('#picture').content.querySelector('.picture');

  for (var j = 0; j < 25; j++) {
    var element = templateForPhotos.cloneNode(true);

    element.querySelector('.picture__img').src = userPhotoDescription[j].url;
    element.querySelector('.picture__likes').textContent = userPhotoDescription[j].likes;
    element.querySelector('.picture__comments').textContent = userPhotoDescription[j].comments;

    fragment.appendChild(element);
  }
  elementFillsCopies.appendChild(fragment);
};

creatingCopies();

//  Форма редактирования изображения

var imgUploadInput = document.querySelector('.img-upload__input');
var imgUploadOverlay = document.querySelector('.img-upload__overlay');
var buttonImgUploadCancel = document.querySelector('.img-upload__cancel');
var popupImageEditing = document.querySelector('.img-upload__overlay');
var effectLevel = popupImageEditing.querySelector('.effect-level');
var buttonDepthEffect = popupImageEditing.querySelector('.effect-level__pin');
var effectLevelDepth = popupImageEditing.querySelector('.effect-level__depth');
var popupImagePreview = popupImageEditing.querySelector('.img-upload__preview');
var effectsList = popupImageEditing.querySelector('.effects__list');
var effectsItems = effectsList.querySelectorAll('li');
var imgUploadScale = document.querySelector('.img-upload__scale');
var scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
var imgUploadText = document.querySelector('.img-upload__text');
var textDescription = imgUploadText.querySelector('.text__description');
var ESC_BUTTON = 27;

effectLevel.style.display = 'none';
scaleControlValue.value = '100%';

var onEffectsItemsOpen = function (item) {
  item.addEventListener('mouseup', function () {
    var result = item.querySelector('.effects__preview--none');
    if (!result) {
      popupImagePreview.style.filter = window.getComputedStyle(item.querySelector('span')).filter;
      effectLevel.style.display = 'block';
      buttonDepthEffect.style.left = '100%';
      effectLevelDepth.style.width = '100%';
    } else {
      popupImagePreview.style.filter = window.getComputedStyle(item.querySelector('span')).filter;
      effectLevel.style.display = 'none';
    }
  });
};

var onPopupEscClos = function (evt) {
  if (evt.keyCode === ESC_BUTTON) {
    if (textDescription !== document.activeElement) {
      closPopup();
    }
  }
};

var openPopup = function () {
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscClos);

  for (var i = 0; i < effectsItems.length; i++) {
    onEffectsItemsOpen(effectsItems[i]);
  }
};

var closPopup = function () {
  imgUploadOverlay.classList.add('hidden');
  imgUploadInput.value = null;
  document.removeEventListener('keydown', onPopupEscClos);
};

imgUploadInput.addEventListener('change', function () {
  openPopup();
});

buttonImgUploadCancel.addEventListener('click', function () {
  closPopup();
});
