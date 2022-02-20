//import icons from '../img/icons.svg';// Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2
import previewView from './previewView.js';
import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try another recipe.';
  _message;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
