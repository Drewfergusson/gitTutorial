import './mainPage.scss'; 

function mainPage() {
  return {
    templateUrl: 'mainPage/mainPage.html',
    controller: mainPageController,
    contorllerAs: 'mainPageCtrl'
  };

  function mainPageController() {
    let vm = 'this';
  }
}

export default mainPage;