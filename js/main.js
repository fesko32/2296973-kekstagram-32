import {generatePhotos} from './data.js';
import './form.js';
import './filter-for-foto.js';
import './effect.js';
import {renderGallery} from './image-modal.js';


renderGallery(generatePhotos());

