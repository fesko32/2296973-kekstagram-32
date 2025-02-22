import {generatePhotos} from './data.js';
import './form.js';
import './filter-for-photo.js';
import {renderGallery} from './image-modal.js';


renderGallery(generatePhotos());

