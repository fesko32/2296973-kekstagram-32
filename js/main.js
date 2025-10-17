import { hideModal, setUserFormSubmit } from './form.js';
import './filter-for-photo.js';
import { getData } from './api.js';
import { renderGallery } from './image-modal.js';

getData(renderGallery);

setUserFormSubmit(hideModal)


