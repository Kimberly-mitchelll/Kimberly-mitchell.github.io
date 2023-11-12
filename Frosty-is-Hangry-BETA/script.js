AFRAME.registerComponent('carrot-interaction', {
  init: function () {
    var carrots = document.querySelectorAll('.carrot.interactive');
    var hangrySnowman = document.querySelector('#hangrySnowman');
    var happySnowman = document.querySelector('#happySnowman');
    var text = document.querySelector('a-text');
    var collectedCarrots = 0;
    var requiredCarrots = 3;

    carrots.forEach(function (carrot) {
      carrot.addEventListener('click', function () {
        // Remove the clicked carrot
        this.parentNode.removeChild(this);
        collectedCarrots++;

        if (collectedCarrots >= requiredCarrots) {
          // Shrink the hangry snowman
          hangrySnowman.object3D.scale.set(0.01, 0.01, 0.01);
          hangrySnowman.setAttribute('visible', 'false');

          // Show the happy snowman
          happySnowman.setAttribute('visible', 'true');
        }
      });
    });
  },
});
